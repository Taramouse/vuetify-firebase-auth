<template>
  <nav class="z-depth-0 grey lighten-4">
    <div class="nav-wrapper container">
      <router-link :to="{name: 'Home' }" class="brand-logo left">
        <img src="@/assets/logo.svg" alt="logo" style="width: 180px; margin-top: 10px">
      </router-link>
      <ul id="nav-mobile" class="right hide-on-small-and-down">
        <li v-if="loggedIn">
          <router-link :to="{ name: 'Account' }" class="grey-text">Account</router-link>
        </li>
        <li v-if="loggedIn">
          <router-link :to="{ name: 'CreateGuide' }" class="grey-text">Create Guide</router-link>
        </li>
        <li v-if="loggedIn">
          <a @click.prevent="logout" class="grey-text" id="logout">Logout</a>
        </li>
        <li v-if="!loggedIn">
          <router-link :to="{ name: 'Signup' }" class="grey-text">Sign up</router-link>
        </li>
        <li v-if="!loggedIn">
          <router-link :to="{ name: 'Login' }" class="grey-text">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line
import { db, auth } from '@/firebase/init'

export default {
  name: 'Navbar',
  data () {
    return {
      loggedIn: false
    }
  },
  methods: {
    logout () {
      auth.signOut()
    }
  },
  created () {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedIn = true
        console.log('User logged in:', user.email)
      } else {
        this.loggedIn = false
        console.log('User logged out')
      }
    })
  }
}
</script>

<style>
</style>
