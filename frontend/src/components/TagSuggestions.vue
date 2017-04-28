<template>
  <span v-if="recentTag">
  <span>Tag suggestions for #{{recentTag}}</span>

  <span>
  <ul>
    <li><tag></tag></li>
  </ul>
  </span>

  </span>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'tag-suggestions',
  computed: {
    recentTag () {
      return this.$store.state.mostRecentTag
    }
  },
  components: {
    Tag
  }
}
</script>
