<template>
  <div id="guide-list" class="container">
    <div v-if="!user">
      <h3>Welcome to Game Guidez</h3>
      <p class="red-text">Please log in or sign up to see our guides</p>
    </div>

    <ul v-if="user" class="collapsible z-depth-0 guides" style="border: none;">
      <li v-for="(guide, index) in guides" :key="index">
        <div class="collapsible-header grey lighten-4">{{ guide.title }}</div>
        <div class="collapsible-body white">{{ guide.content }}</div>
      </li>
    </ul>
  </div>
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
  updated () {
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
