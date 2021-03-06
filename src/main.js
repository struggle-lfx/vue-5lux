import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.styl'

import './assets/styles/icons.styl'
import './assets/styles/header-footer.styl'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
