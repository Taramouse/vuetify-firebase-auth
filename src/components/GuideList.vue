<template>
  <v-flex xs-12 md-4 left>
    <v-card v-if="user" width="600" class="mx-auto" :loading="loading">
      <v-card-title>
        <h3>Game Guides</h3>
      </v-card-title>
      <v-card-text>
        <v-list>
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
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GuideList',
  data () {
    return {
      guides: [],
      loading: false,
      feedback: null
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created () {
    this.loading = true
    this.$db.collection('guides').get().then(snapshot => {
      this.loading = false
      snapshot.forEach(doc => {
        this.guides.push(doc.data())
      })
    }).catch(err => {
      this.loading = false
      console.log(err.message)
    })
  }
}
</script>

<style>
</style>
