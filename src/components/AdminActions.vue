<template>
  <div v-if="user" class="admin-actions container">
    <div class="center">
      <form @submit.prevent="addAdmin">
        <input type="email" placeholder="User Email" v-model="email" required>
        <div v-if="loading" class="progress">
          <div class="indeterminate"></div>
        </div>
        <p v-if="feedback">{{ feedback }}</p>
        <button class="btn-small yellow darken-2 z-depth-0">Make Admin</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/functions'

export default {
  name: 'AdminActions',
  data () {
    return {
      email: '',
      feedback: null,
      loading: null
    }
  },
  computed: {
    ...mapState(['user', 'admin'])
  },
  methods: {
    addAdmin () {
      this.loading = true
      this.feedback = null
      // use our makeAdminRole firebase function defined in functions/index.js
      const addAdminRole = firebase.functions().httpsCallable('addAdminRole')
      addAdminRole({ email: this.email }).then(result => {
        this.loading = false
        this.feedback = result.data.message
        this.email = ''
      }).catch(err => {
        console.log(err)
        this.loading = false
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
