<template>
  <input @keyup.enter="commit" v-model="currentTag" type="text" placeholder="Start by typing your first tag here!">
</template>

<script>
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
  }
}
</script>

<style lang="sass" scoped>
input
  display: block
  width: 100%
  font-size: 1.5em
</style>
