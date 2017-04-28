<template>
  <button @click="clicked" v-clipboard:copy="copyData">Copy tags!</button>
</template>

<script>
export default {
  name: 'tag-copy-button',
  computed: {
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
    }
  }
}
</script>
