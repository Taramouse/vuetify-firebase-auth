<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 mb-3">
          Welcome to Game Guidez
        </h1>
        <p v-if="!user">Please log in or sign up to see our guides</p>
      </v-flex>

      <v-card v-if="user" class="mx-auto">
        <v-list width="600">
          <v-list-group v-for="(guide, index) in guides" :key="index" no-action>

            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="guide.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item class="px-10">
              <v-list-item-content>
                <p v-text="guide.content"></p>
              </v-list-item-content>
            </v-list-item>

          </v-list-group>
        </v-list>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GuideList',
  data () {
    return {
      guides: []
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.$db.collection('guides').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.guides.push(doc.data())
      })
    })
  }
}
</script>

<style>
</style>
