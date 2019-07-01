import Vue from 'vue'
import Router from 'vue-router'

import Index from './pages/index.vue'
import Shop from './pages/shop.vue'
import Arrival from './pages/arrival.vue'
import Overseas from './pages/overseas.vue'
import My from './pages/my.vue'
import page404 from './pages/page404.vue'
import Home from './pages/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/arrival',
      name: 'arrival',
      component: Arrival
      // children:[{   //子路由
      //   path: ':overseas',
      //   name: 'overseas',
      //   component: Overseas
      // }]
    },
    {
      path: '/overseas',
      name: 'overseas',
      component: Overseas
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {   //vue的路由都是排他性的
      path:'*',
      component:page404
    }
  ]
})
