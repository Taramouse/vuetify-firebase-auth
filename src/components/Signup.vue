<template>
  <div id="signup" class="container">
    <div class="card-panel center">
      <h4>Sign up</h4><br />
      <form id="signup-form">
        <div class="input-field">
          <input type="email" id="signup-email" required />
          <label for="signup-email">Email address</label>
        </div>
        <div class="input-field">
          <input type="password" id="signup-password" required />
          <label for="signup-password">Choose password</label>
        </div>
        <button class="btn yellow darken-2 z-depth-0">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style>
#signup {
  padding-top: 60px;
  width: 500px;
}
</style>
