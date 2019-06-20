import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about-us',
      component: () => import(/* webpackChunkName: "about" */ './views/AboutUs.vue')
    }
  ]
})
