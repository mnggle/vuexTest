import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    isShow: false,
    todos: [
        {id: 1, text: 'text1', done: true},
        {id: 2, text: 'text2', done: false}
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    // 为函数添加payload载荷
    increment (state, payload) {
        state.count += payload.amount
    },
    change (state) {
       state.isShow = !state.isShow
    }
  },
  actions: {
    // 异步方法
    change ({ commit }) {
        setTimeout(() => {
        commit('change')
        }, 1000)
    }
  }
})
export default store
