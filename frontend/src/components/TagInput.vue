<template>
  <div class="container">
    <div class="searchbar">
      <input @keyup.enter="commit" v-model="currentTag" type="text" name="search" placeholder="Start by typing your first tag here!">
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

<style lang="sass" scoped>
  .searchbar
    text-align: center
    display: flex
    justify-content: center

  input
    display: block
    width: 30%
    font-size: 1.5em
    appearance: none
    border: none
    outline: none
    border-bottom: 1px solid grey
    font-family: 'Raleway', sans-serif
</style>
