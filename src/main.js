import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FirebasePlugin from '@/firebase/firebasePlugin'

Vue.config.productionTip = false

Vue.use(FirebasePlugin)

/* eslint-disable no-new */
app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
