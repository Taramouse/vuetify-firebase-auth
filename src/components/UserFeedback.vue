<template>
  <v-alert v-model="show"
           :closeText="closeText"
           :color="color"
           :theme='theme'
           :dismissible="dismissible"
           :type="type">{{ message }}</v-alert>
</template>

<script>
export default {
  name: 'UserFeedback',
  props: {
    'show': {
      type: Boolean,
      default: false
    },
    'closeText': {
      type: String,
      default: 'Close Alert'
    },
    'color': {
      type: String
    },
    'theme': {
      type: String,
      dafault: 'light'
    },
    'dismissible': {
      type: Boolean,
      default: false
    },
    'type': {
      type: String,
      default: 'info'
    },
    'message': {
      type: String,
      default: 'User Feedback Component'
    }
  }
}
</script>
