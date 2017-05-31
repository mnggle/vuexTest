<template>
  <div class="hello">
    <p>{{isShow}}</p>
    <p>doneTodos:{{doneTodos}}</p>
    <p>{{localComputed}}</p>
    <!--<p>{{countPlusLocalState}}</p>
    <p>{{countAlias}}</p>-->
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="change">change</button>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      localCount: 5,
      message: 'hello'
    }
  },
  // computed: mapState({
  //   count: state => state.count,
  //   // 传字符串参数 'count' 等同于 `state => state.count`
  //   countAlias: 'count',
  //   // 为了能够使用 `this` 获取局部状态，必须使用常规函数
  //   countPlusLocalState (state) {
  //     return state.count + this.localCount
  //   }
  // }),
  // computed: mapState([
  //   // 映射 this.count 为 store.state.count
  //   'count'
  // ]),
  // 对象展开运算符
  computed: {
    localComputed () {
      return this.message.split('').reverse().join('')
    },
      ...mapState({
        count: state => state.count,
        doneTodos () {
          return this.$store.getters.doneTodos
        },
        isShow: state => state.isShow
      })

  },
  methods: {
    // 不使用包含type对象的方法
    // increment () {
    //   this.$store.commit('increment', {amount: 10})
    // }
    // 使用包含type对象的方法
    increment () {
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
    },
    change () {
      this.$store.dispatch('change')
    }
  },
  created () {
    console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
