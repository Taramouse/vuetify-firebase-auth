<template>
  <div class="home container">
    <div class="card-panel center">
      <h2 class="grey-text display-2">Guide List</h2>
      <AdminActions />
      <GuideList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AdminActions from '@/components/AdminActions'
import GuideList from '@/components/GuideList'

export default {
  name: 'Home',
  components: {
    AdminActions,
    GuideList
  }
}
</script>
<style>
.home .card-panel {
  min-height: 500px;
}
</style>
