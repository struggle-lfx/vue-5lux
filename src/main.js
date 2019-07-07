import Vue from 'vue'
import App from './App.vue'

import './assets/styles/reset.styl'
import './assets/script/swiper.min.js'
import './assets/styles/swiper.min.styl'
import './assets/styles/icons.styl'
import './assets/styles/header-footer.styl'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
