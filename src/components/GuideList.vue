<template>
  <div id="guide-list" class="container">
    <h3 v-if="!user">Please log in or sign up to see our guides</h3>
    <ul v-if="user" class="collapsible z-depth-0 guides" style="border: none;">
      <li v-for="(guide, index) in guides" :key="index">
        <div class="collapsible-header grey lighten-4">{{ guide.title }}</div>
        <div class="collapsible-body white">{{ guide.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'GuideList',
  data () {
    return {
      guides: []
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  mounted () {
    // Materialize JS accessed via M
    const collapsible = document.querySelectorAll('.collapsible')
    // eslint-disable-next-line
    M.Collapsible.init(collapsible)
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
#guide-list {
  margin-top: 40px;
}
</style>
