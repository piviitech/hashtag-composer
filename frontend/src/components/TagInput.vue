<template>
  <div class="input-container">
    <div class="searchbar">
      <input @keyup.enter="commit" v-model="inputTag" type="text" name="search" placeholder="Search a hashtag">
    </div>
    <tag-autocomplete></tag-autocomplete>
  </div>
</template>

<script>
import TagAutocomplete from './TagAutocomplete'

export default {
  name: 'tag-input',
  computed: {
    inputTag: {
      get () {
        return this.$store.state.inputTag
      },
      set (newCurrentTag) {
        this.$store.commit('updateCurrentTag', {newCurrentTag})
      }
    }
  },
  methods: {
    commit (event) {
      this.$store.commit('addTag', {tagText: this.inputTag})
    }
  },
  components: {
    'tag-autocomplete': TagAutocomplete
  }
}
</script>
