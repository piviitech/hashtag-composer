<template>
  <div class="container">
    <button :class="{ copied: isCopied }" :disabled="notReady" @click="clicked" v-clipboard:copy="copyData">{{ tagCount }}</button>
  </div>
</template>

<script>
export default {
  name: 'tag-copy-button',
  data () {
    return {
      isCopied: false
    }
  },
  computed: {
    tagCount () {
      if (this.isCopied) {
        return `Copied!`
      } else if (this.$store.state.tagList.length === 1) {
        return `Copy ${this.$store.state.tagList.length} tag!`
      } else {
        return `Copy ${this.$store.state.tagList.length} tags!`
      }
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
      this.isCopied = true
    }
  }
}
</script>

<style lang="sass" scoped>
  $pink: #b22d57
  $grey: rgb(173, 185, 172)

  .container
    margin: 1em
    text-align: center

  button
    padding: 0
    border: none
    background: none
    background-color: $grey
    width: 8em
    padding: 0.5em
    font-size: 1em
    border-radius: 2em
    display: inline-block
    margin: 0.1em
    color: white
    &:hover
      font-weight: 500
  .copied
    background-color: $pink
</style>
