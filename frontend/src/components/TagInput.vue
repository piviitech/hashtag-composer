<template>
  <div class="input-container">
    <div class="searchbar">
      <input @keyup.enter="commit" v-model="currentTag" type="text" name="search" placeholder="Search a hashtag">
    </div>
    <tag-autocomplete></tag-autocomplete>
  </div>
</template>

<script>
import TagAutocomplete from './TagAutocomplete'

export default {
  name: 'tag-input',
  computed: {
    currentTag: {
      get () {
        return this.$store.state.currentTagText
      },
      set (newCurrentTag) {
        this.$store.commit('updateCurrentTag', {newCurrentTag})
      }
    }
  },
  methods: {
    commit (event) {
      this.$store.commit('commitTag', {tagText: this.currentTag})
    }
  },
  components: {
    'tag-autocomplete': TagAutocomplete
  }
}
</script>
