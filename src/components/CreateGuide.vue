<template>
  <div id="create" class="container">
    <div class="card-panel center">
      <h4>Create Guide</h4><br />
      <div v-if="!user">
        <p class="red-text">Please log in or sign up to create a guide</p>
      </div>
      <form v-if="user" id="create-form" @submit.prevent="saveGuide">
        <div class="input-field">
          <input type="text" id="title" v-model="title" required>
          <label for="title">Guide Title</label>
        </div>
        <div class="input-field">
          <textarea id="content" class="materialize-textarea" v-model="content" required></textarea>
          <label for="content">Guide Content</label>
        </div>
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn yellow darken-2 z-depth-0">Create</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CreateGuide',
  data () {
    return {
      title: '',
      content: '',
      feedback: null
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    saveGuide () {
      this.$db.collection('guides').add({
        title: this.title,
        content: this.content
      }).then(() => {
        this.title = ''
        this.content = ''
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
</style>
