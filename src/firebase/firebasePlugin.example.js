import store from '@/store'
import Firebase from 'firebase/app'
import EventBus from '@/eventBus'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  // enter your firebase project config here
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

export default {
  install: (Vue, options) => {
    const firebase = Firebase.initializeApp(config)
    const db = firebase.firestore()
    const auth = firebase.auth()
    // enable access of db via $db
    Vue.prototype.$db = db
    // enable access of auth via $ auth with signup, login and logout methods
    Vue.prototype.$auth = {
      signup: (username, password, bio) => {
        auth.createUserWithEmailAndPassword(username, password).then(cred => {
          // create user record in firestore
          return db.collection('users').doc(cred.user.uid).set({
            bio: bio
          })
        }).then(() => {
          EventBus.$emit('ERROR_MESSAGE', null)
        }).catch(err => {
          EventBus.$emit('ERROR_MESSAGE', err.message)
        })
      },
      login: (username, pass) => {
        auth.signInWithEmailAndPassword(username, pass).then(cred => {
          EventBus.$emit('ERROR_MESSAGE', null)
        }).catch(err => {
          EventBus.$emit('ERROR_MESSAGE', err.message)
        })
      },
      logout: () => {
        auth.signOut().then(() => {
          EventBus.$emit('ERROR_MESSAGE', null)
        }).catch(() => {
          EventBus.$emit('ERROR_MESSAGE', 'Error logging out')
        })
      }
    }
    auth.onAuthStateChanged(user => {
      // console.log(user, 'user state changed')
      if (user) {
        console.log(user.email, 'logged in')
        store.commit('updateUser', user)
        // get our custom claim (role) set by function addAdminRole
        user.getIdTokenResult().then(idTokenResult => {
          user.admin = idTokenResult.claims.admin
          if (user.admin) {
            store.commit('updateAdmin', true)
          } else {
            store.commit('updateAdmin', null)
          }
        })
      } else {
        store.commit('updateUser', null)
        store.commit('updateAdmin', null)
      }
    })
  }
}
