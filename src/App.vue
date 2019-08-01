<template>
  <v-app :dark="useDarkTheme"
         id="app">
    <Navbar />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  data () {
    return {
      useDarkTheme: false
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background: #666;
  min-height: 100%;
  width: 100%;
}
</style>
