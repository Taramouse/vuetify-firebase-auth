<template>
  <div id="create" class="container">
    <div class="card-panel center">
      <h4>Create Guide</h4><br />
      <form id="create-form">
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
export default {
  name: 'CreateGuide'
}
</script>

<style>
</style>
