import Vue from 'vue'
import App from './App.vue'
import router from './router/app_routes'
import { store } from './stateObjVuex'
import Vuelidate from 'vuelidate'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm'
import { ValidationObserver } from 'vee-validate'

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
