<template>
  <div class="home">
    <GuideList />
  </div>
</template>

<script>
// @ is an alias to /src
import GuideList from '@/components/GuideList'

export default {
  name: 'Home',
  components: {
    GuideList
  }
}
</script>
