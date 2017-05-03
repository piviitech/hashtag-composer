<template>
  <div class="container">Tag count: {{ tagCount }}</div>
</template>

<script>
export default {
  name: 'tag-count',
  computed: {
    tagCount () {
      return this.$store.state.tagList.length
    }
  }
}
</script>

<style lang="sass" scoped>
  .container
    margin: 1em
    
</style>
