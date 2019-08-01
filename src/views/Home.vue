<template>
  <v-container>
    <v-layout>
      <v-flex xs-12
              text-center>
        <h1 class="display-2 grey--text mb-3">
          Game Guidez
        </h1>
        <p v-if="!user">Please log in or sign up to see our guides</p>

        <GuideList />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import GuideList from '@/components/GuideList'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    GuideList
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
</style>
