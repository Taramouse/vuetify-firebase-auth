<template>
  <v-container align-center>
    <v-layout text-center
              wrap>
      <v-flex mb-4>
        <h1 class="display-2 grey--text mb-3">
          Welcome to Game Guidez
        </h1>
        <p v-if="!user">Please log in or sign up to see our guides</p>
      </v-flex>
      <AdminActions />
      <GuideList />
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import AdminActions from '@/components/AdminActions'
import GuideList from '@/components/GuideList'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    AdminActions,
    GuideList
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
</style>
