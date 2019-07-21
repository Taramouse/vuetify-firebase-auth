<template>
  <div v-if="admin" class="admin-actions container">
    <div class="center">
      <form @submit.prevent="addAdmin">
        <input type="email" placeholder="User Email" v-model="email" required>
        <p v-if="feedback">{{ feedback }}</p>
        <button class="btn-small yellow darken-2 z-depth-0">Make Admin</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase/app'
// eslint-disable-next-line
// TODO: Is this really needed?
import functions from 'firebase/functions'

export default {
  name: 'AdminActions',
  data () {
    return {
      email: null,
      feedback: null,
      admin: true
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    addAdmin () {
      // use our makeAdminRole firebase function defined in functions/index.js
      const addAdminRole = firebase.functions().httpsCallable('addAdminRole')
      addAdminRole({ email: this.email }).then(result => {
        this.feedback = result.data.message
      }).catch(err => {
        console.log(err)
        this.feedback = err.message
      })
    }
  }
}
</script>

<style>
.admin-actions {
  margin: 40px auto;
  max-width: 300px;
}
</style>
