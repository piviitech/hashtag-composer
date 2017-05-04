<template>
  <div v-if="notEmpty" class="autocomplete-container">
    <ul v-for="tag in items">
      <tag :name="tag.name" :count="tag.count" />
    </ul>
  </div>
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



</style>
