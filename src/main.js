import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import FirebasePlugin from '@/firebase/firebasePlugin'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(FirebasePlugin)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
