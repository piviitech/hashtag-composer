<template>
  <input @keyup.enter="commit" v-model="currentTag" type="text" placeholder="Start by typing your first tag here!">
</template>

<script>
export default {
  name: 'tag-input',
  data () {
    return {
      currentTag: ''
    }
  },
  methods: {
    commit (event) {
      this.$store.commit('commitTag', {tagText: this.currentTag})
      this.currentTag = ''
    }
  },
  watch: {
    currentTag: function (newCurrentTag) {
      this.$store.commit('updateCurrentTag', {newCurrentTag})
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
