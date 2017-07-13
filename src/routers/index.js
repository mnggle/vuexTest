import Vue from 'vue'
import VueRouter from 'vue-router'
import hello from '../components/hello'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})

export default router
