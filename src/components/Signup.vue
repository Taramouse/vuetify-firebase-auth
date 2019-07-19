<template>
  <div id="signup" class="container">
    <div class="card-panel center">
      <h4>Sign up</h4><br />
      <form id="signup-form" @submit.prevent="signup">
        <div class="input-field">
          <input type="email" id="signup-email" v-model="email" required />
          <label for="signup-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="signup-password" v-model="password" required />
          <label for="signup-password">Choose password</label>
        </div>
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { db, auth } from '@/firebase/init'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    signup () {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(cred => {
        this.feedback = null
        this.$router.push({ name: 'Home' })
      }).catch(err => {
        this.feedback = err.message
      })
    }
  }
}
</script>

<style>
#signup {
  padding-top: 60px;
  width: 500px;
}
</style>
