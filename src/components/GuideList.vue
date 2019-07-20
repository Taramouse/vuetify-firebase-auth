<template>
  <div id="guide-list" class="container">
    <ul class="collapsible z-depth-0 guides" style="border: none;">
      <li v-for="(guide, index) in guides" :key="index">
        <div class="collapsible-header grey lighten-4">{{ guide.title }}</div>
        <div class="collapsible-body white">{{ guide.content }}</div>
      </li>
      <!-- <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div class="collapsible-header grey lighten-4">Guide title</div>
        <div class="collapsible-body white"><span>Lorem ipsum dolor sit amet.</span></div>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GuideList',
  data () {
    return {
      guides: []
    }
  },
  mounted () {
    // Materialize JS accessed via M
    const items = document.querySelectorAll('.collapsible')
    // eslint-disable-next-line
    M.Collapsible.init(items)
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
