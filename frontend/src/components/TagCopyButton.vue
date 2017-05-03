<template>
  <div class="">
    <button :disabled="notReady" @click="clicked" v-clipboard:copy="copyData">{{ message }}</button>
  </div>
</template>

<script>
export default {
  name: 'tag-copy-button',
  data () {
    return {
      message: `Copy tags!`
    }
  },
  computed: {
    tagCount () {
      return this.$store.state.tagList.length
    },
    notReady () {
      return this.$store.state.tagList.length === 0
    },
    copyData: {
      get () {
        console.log(this.$store.state.tagList[0])
        var res = ''
        for (var i in this.$store.state.tagList) {
          if (i !== 0) {
            res = res + ' '
          }
          res = res + '#' + this.$store.state.tagList[i].name
        }
        return res
      },
      set (newValue) {
      }
    }
  },
  methods: {
    clicked (event) {
      this.message = 'Copied!'
    }
  }
}
</script>

<style lang="sass" scoped>
  $pink: #b22d57

  button
    padding: 0
    border: none
    background: none
    padding: 0.5em
    border: 1px solid $pink
    border-radius: 1em
    display: inline-block
    margin: 0.1em
</style>
