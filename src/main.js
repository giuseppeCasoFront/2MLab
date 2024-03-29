import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Vuelidate from 'vuelidate'

import './components'
import i18n from './i18n'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
