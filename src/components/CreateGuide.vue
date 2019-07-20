<template>
  <div id="create" class="container">
    <div class="card-panel center">
      <h4>Create Guide</h4><br />
      <div v-if="!user">
        <p class="red-text">Please log in or sign up to create a guide</p>
      </div>
      <form v-if="user" id="create-form">
        <div class="input-field">
          <input type="text" id="title" required>
          <label for="title">Guide Title</label>
        </div>
        <div class="input-field">
          <textarea id="content" class="materialize-textarea" required></textarea>
          <label for="content">Guide Content</label>
        </div>
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

    }
  },
  computed: {
    ...mapGetters(['user'])
  },
}
</script>

<style>
</style>
