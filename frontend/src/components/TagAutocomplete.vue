<template>
  <div class="center-me">
    <div v-if="notEmpty" class="autocomplete-container">
      <div v-for="tag in items">
        <autocomplete-tag :name="tag.name" :count="tag.count" />
      </div>
    </div>
  </div>
</template>

<script>
import AutocompleteTag from './TagAutocompleteTag'

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
    AutocompleteTag
  }
}
</script>
