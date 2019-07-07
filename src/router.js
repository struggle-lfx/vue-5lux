import Vue from 'vue'
import Router from 'vue-router'

import Shop from './pages/shop/shop.vue'
import Arrival from './pages/arrival/arrival.vue'
import Overseas from './pages/overseas/overseas.vue'
import My from './pages/my/my.vue'
import page404 from './pages/404/page404.vue'
import Home from './pages/home/home.vue'
import Details from './pages/details/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
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
    {
      path:'/details/:id',
      name:'details',
      component:Details
    },
    {   //vue的路由都是排他性的
      path:'*',
      component:page404
    }
  ]
})
