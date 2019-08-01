<template>
  <v-flex xs-12>
    <v-expansion-panels accordion>
      <v-expansion-panel v-for="(guide, index) in guides"
                         :key="index">
        <v-expansion-panel-header>{{guide.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>{{guide.content}}</v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
