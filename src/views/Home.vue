<template>
  <div class="home">
    <AdminActions />
    <GuideList />
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
</style>
