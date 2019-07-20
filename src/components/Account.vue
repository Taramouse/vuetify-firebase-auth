<template>
  <div id="account" class="container">
    <div class="card-panel center">
      <h4>Account details</h4>
      <br />
      <div class="account-details">
        <div>
          <h4 v-if="user">User: {{ user.email }}</h4>
          <h4 v-else class="red-text">No user logged in</h4>
        </div>
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
