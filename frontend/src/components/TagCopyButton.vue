<template>
  <div class="copy-container">
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
      setTimeout(() => {
        this.isCopied = false
      }, 3000)
    }
  }
}
</script>
