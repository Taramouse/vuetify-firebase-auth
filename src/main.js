import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import FirebasePlugin from '@/firebase/firebasePlugin'

Vue.config.productionTip = false
let app = null

Vue.use(FirebasePlugin)

firebase.auth().onAuthStateChanged(() => {
  // create app if not already created
  /* eslint-disable no-new */
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
