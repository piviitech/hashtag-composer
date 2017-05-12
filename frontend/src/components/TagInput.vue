<template>
  <div class="input-container">
    <div class="searchbar">
      <input autofocus @keyup.enter="commit" @keyup.arrowdown="alert" v-model="inputTag" type="text" name="search" placeholder="Search a hashtag">
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
      this.$store.commit('searchTag', {tagText: this.inputTag})
      this.$store.commit('addTag', {tagText: this.inputTag})
    },
    alert () {
      alert('whaat')
    }
  },
  components: {
    'tag-autocomplete': TagAutocomplete
  }
}
</script>
