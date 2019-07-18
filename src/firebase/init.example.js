import firebase from 'firebase/app'
require('firebase/firestore')

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}

firebase.initializeApp(config)
const db = firebase.firestore()

export default db
