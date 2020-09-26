import Vue from 'vue'
import App from './App.vue'
import router from './router/app_routes'
import { store } from './stateObjVuex'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
