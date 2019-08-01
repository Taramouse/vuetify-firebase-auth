<template>
  <v-app-bar color="deep-purple accent-4"
             dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <router-link :to="{name: 'Home' }">
        <v-img src="@/assets/logo.svg"
               alt="logo"
               width="180"></v-img>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text
           v-if="user"
           :to="{ name: 'Account' }">
      <span class="mr-2">Account</span>
    </v-btn>
    <v-btn text
           v-if="admin"
           :to="{ name: 'CreateGuide' }">
      <span class="mr-2">Create Guide</span>
    </v-btn>
    <v-btn text
           v-if="user"
           @click.prevent="logout">
      <span class="mr-2">Logout</span>
    </v-btn>
    <v-btn text
           v-if="!user"
           :to="{ name: 'Signup' }">
      <span class="mr-2">Sign Up</span>
    </v-btn>
    <v-btn text
           v-if="!user"
           :to="{ name: 'Login' }">
      <span class="mr-2">Login</span>
    </v-btn>
    <v-switch class="mt-7"
              :label="'Dark Theme'"
              v-model="theme.isDark"></v-switch>
  </v-app-bar>
</template>

<script>
// eslint-disable-next-line
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data () {
    return {
      theme: { isDark: true }
    }
  },
  methods: {
    logout () {
      this.$auth.logout()
      this.$router.push({ name: 'Login' })
    }
  },
  computed: {
    ...mapGetters(['user', 'admin']),
    setTheme () {
      if (this.theme.isDark) {
        // eslint-disable-next-line
        return (this.$vuetify.theme.dark = true)
      } else {
        // eslint-disable-next-line
        return (this.$vuetify.theme.dark = false)
      }
    }
  }
}
</script>

<style>
</style>
