<template>
  <span v-if="notEmpty">
  <span>Tag autocomplete:</span>
  <ul v-for="tag in items">
    <tag :name="tag.name" :count="tag.count" />
  </ul>
  </span>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'tag-autocomplete',
  computed: {
    notEmpty () {
      return this.$store.state.autosuggestItems.length !== 0
    },
    items () {
      return this.$store.state.autosuggestItems
    }
  },
  components: {
    Tag
  }
}
</script>

<style lang="sass" scoped>
span
  display: block
  width: 100%
  font-size: 1.5em
  margin: 0.5em
</style>
