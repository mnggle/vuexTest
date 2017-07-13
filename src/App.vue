<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <p>{{message}}</p>
    <p>{{message2}}</p>
    <!--<p>{{message3}}</p>-->
    <counter @click.native='increment' :count="count"></counter> <!-- 在组件上绑定事件的时候需要用到 .native -->
    <router-link to="./hello">Go to hello</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
const Counter = {
  props: {
    count: {
      Number,
      default: 0
    }
  },
  template: `<div>{{ count }}</div>`,
  created: function () {
//  console.log(this.count)
  },
  methods: {
    increment: function () {
      store.commit('increment')
    }
  }
}
export default {
  name: 'app',
  data: function () {
    return {
      message: 'message加载：' + new Date(),
      message3: ''
    }
  },
  computed: {
    message2 () { // 因为 Date.now() 不是响应式依赖,故不会自动刷新时间
      return 'message2加载：' + new Date()
    },
    count () { // 由于 Vuex 的状态存储是响应式的
      return store.state.count
    }
  },
  created () {
    setInterval(this.now, 1000)
  },
  components: {
    Counter
  },
  methods: {
    now: function () {
      this.message3 = 'message3加载：' + new Date()
    },
    increment: function () {
      console.log(this.count)
      store.commit('increment')
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
