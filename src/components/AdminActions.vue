<template>
  <v-flex xs-12
          md-4>
    <v-card v-if="admin"
            width="600"
            class=" text-center mx-auto my-2">
      <v-card-title>
        <h3 class="grey--text">Make Admin</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field type="email"
                        label="Email"
                        v-model="email" />
        </v-form>
        <user-feedback :show="fbShow"
                       :type="fbType"
                       :message="fbMsg"
                       dismisible="true">
        </user-feedback>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="addAdmin"
               :loading="loading"
               color="info">Make Admin</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/functions'
import UserFeedback from '@/components/UserFeedback'

export default {
  name: 'AdminActions',
  data () {
    return {
      email: '',
      fbShow: false,
      fbType: 'info',
      fbMsg: '',
      loading: false
    }
  },
  computed: {
    ...mapGetters(['user', 'admin'])
  },
  methods: {
    addAdmin () {
      this.loading = true
      this.fbShow = false
      // use our makeAdminRole firebase function defined in functions/index.js
      const addAdminRole = firebase.functions().httpsCallable('addAdminRole')
      addAdminRole({ email: this.email }).then(result => {
        this.loading = false
        this.fbType = 'success'
        this.fbMsg = result.data.message
        this.fbShow = true
        this.email = ''
      }).catch(err => {
        console.log(err)
        this.loading = false
        this.fbType = 'error'
        this.fbMsg = err
        this.fbShow = true
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
