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
// import { mapGetters } from 'vuex'
import EventBus from '@/eventBus'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  computed: {
    //  ...mapGetters(['errorMessage'])
  },
  methods: {
    signup () {
      this.$auth.signup(this.email, this.password)
      EventBus.$on('ERROR_MESSAGE', payload => {
        this.feedback = payload
        if (!this.feedback) {
          this.$router.push({ name: 'Home' })
        }
      })
    }
  },
  mounted () {

  }
}
</script>

<style>
#signup {
  padding-top: 60px;
  width: 500px;
}
</style>
