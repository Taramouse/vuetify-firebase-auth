import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import FirebaseAuthPlugin from '@/firebase/firebaseAuthPlugin'

Vue.config.productionTip = false
Vue.use(FirebaseAuthPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
