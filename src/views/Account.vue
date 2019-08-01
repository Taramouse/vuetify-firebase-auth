<template>
  <v-container>
    <v-layout>
      <v-flex xs-12>
        <v-card v-if="user">
          <v-card-text>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>User</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>Bio</v-list-item-title>
                <v-list-item-subtitle>{{ bio }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>User Status</v-list-item-title>
                <v-list-item-subtitle>{{ user.admin }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card-text>
          <v-card-text v-if="!user">
            <h4 class="red-text">No user logged in</h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
