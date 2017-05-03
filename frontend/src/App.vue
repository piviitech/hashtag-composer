<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass" scoped>
  $font-stack: 'Raleway', sans-serif
  $primary-color: #333
  $light-pink: rgb(188, 72, 110)
  $very-light-pink: #fce8ee
  $pink: #b22d57

  body, html
    padding: 0
    margin: 0

  #app
    margin: 0
    font-family: $font-stack
</style>
