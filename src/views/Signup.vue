<template>
  <v-card width="500"
          class="mx-auto mt-5">
    <v-card-title class="pb-10">
      <h1 class="display-1 grey--text">Sign Up</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field v-model="email"
                      type="email"
                      label="Email"
                      prepend-icon="mdi-account-circle"
                      autocomplete="username" />
        <v-text-field v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      label="Password"
                      prepend-icon="mdi-lock"
                      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="showPassword = !showPassword"
                      autocomplete="new-password" />
        <v-text-field v-model="bio"
                      type="text"
                      label="User Bio"
                      prepend-icon="mdi-account-question" />
      </v-form>
      <user-feedback :show="fbShow"
                     :type="fbType"
                     :message="fbMsg">
      </user-feedback>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="signup"
             :loading="loading"
             color="success">Sign Up</v-btn>
    </v-card-actions>
  </v-card>
</template>
<input type="text" id="signup-bio" v-model="bio" required />
<script>
// import { mapGetters } from 'vuex'
import EventBus from '@/eventBus'
import UserFeedback from '@/components/UserFeedback'

export default {
  name: 'Signup',
  data () {
    return {
      showPassword: false,
      loading: false,
      email: null,
      password: null,
      bio: null,
      fbShow: false,
      fbType: 'info',
      fbMsg: 'User feedback'
    }
  },
  methods: {
    signup () {
      this.loading = true
      this.fbShow = false
      this.$auth.signup(this.email, this.password, this.bio)
      EventBus.$on('ERROR_MESSAGE', payload => {
        this.loading = false
        this.fbMsg = payload
        this.fbType = 'error'
        this.fbShow = true
        if (!this.fbMsg) {
          this.$router.push({ name: 'Home' })
        }
      })
    }
  },
  components: {
    UserFeedback
  }
}
</script>

<style>
</style>
