<template>
  <span>Tag count: {{ tagCount }}</span>
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
