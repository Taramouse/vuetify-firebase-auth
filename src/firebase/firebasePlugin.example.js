import store from '@/store'
import Firebase from 'firebase/app'
import EventBus from '@/eventBus'
require('firebase/firestore')
require('firebase/auth')

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
      // TODO: Check this observable is added to store as user correctl
      console.log(user, 'user state changed')
      store.commit('updateUser', user)
    })
  }
}
