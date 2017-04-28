<template>
  <button :disabled="notReady" @click="clicked" v-clipboard:copy="copyData">{{ message }}</button>
</template>

<script>
export default {
  name: 'tag-copy-button',
  data () {
    return {
      message: 'Copy tags!'
    }
  },
  computed: {
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
