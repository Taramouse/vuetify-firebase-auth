<template>
  <div id="login" class="container">
    <div class="card-panel center">
      <h4>Login</h4><br />
      <form id="login-form" @submit.prevent="login">
        <div class="input-field">
          <input type="email" id="login-email" v-model="email" required />
          <label for="login-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="login-password" v-model="password" required />
          <label for="login-password">Your password</label>
        </div>
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn yellow darken-2 z-depth-0">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import EventBus from '@/eventBus'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login () {
      this.$auth.login(this.email, this.password)
      EventBus.$on('ERROR_MESSAGE', payload => {
        this.feedback = payload
        if (!this.feedback) {
          this.$router.push({ name: 'Home' })
        }
      })
    }
  }
}
</script>

<style>
#login {
  padding-top: 30px;
  width: 500px;
}
</style>
