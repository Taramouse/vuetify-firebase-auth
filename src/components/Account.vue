<template>
  <div id="account" class="container">
    <div class="card-panel center">
      <h4>Account details</h4>
      <br />
      <div class="account-details">
        <div v-if="user" class="left-align">
          <h4 class="grey-text">User: <span class="grey-text text-darken-2 right">{{ user.email }}</span></h4>
          <h4 class="grey-text">Bio: <span class="grey-text text-darken-2 right">{{ bio }}</span></h4>
          <h4 class="grey-text">Member Status: <span class="grey-text text-darken-2 right">{{ adminStatus }}</span></h4>
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
        </div>
        <div v-if="!user">
          <h4 class="red-text">No user logged in</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Account',
  data () {
    return {
      bio: null,
      feedback: null,
      adminStatus: null
    }
  },
  computed: {
    ...mapGetters(['user', 'admin'])
  },
  mounted () {
    if (this.user) {
      this.$db.collection('users').doc(this.user.uid).get().then(doc => {
        this.bio = doc.data().bio
        this.feedback = null
      }).catch(err => {
        this.feedback(err.message)
      })
      this.adminStatus = this.admin ? 'Admin' : 'User'
    } else {
      this.adminStatus = 'User'
    }
  }

}
</script>

<style>
</style>
