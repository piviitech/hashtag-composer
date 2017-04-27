<template>
  <span>Tag count: {{ tag_count }}</span>
</template>

<script>
export default {
  name: 'tag-count',
  computed: {
    tag_count () {
      return 42
    }
  }
}
</script>
