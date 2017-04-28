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
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

#app
  font-family: $font-stack
  margin-top: 20px
  margin-left: 20px
  margin-right: 20px
</style>
