<template>
  <div id="account" class="container">
    <div class="card-panel center">
      <h4>Account details</h4>
      <br />
      <div class="account-details">
        <h4>User: {{ user.email }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Account',
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>
</style>
