<template>
  <span>
    <span @click="selectTag">
      {{name}}
      ({{prettyCount}})
    </span>
    <span v-if="removable"><a href="#" @click="deleteTag">DELETE THIS</a></span>
  </span>

</template>

<script>
export default {
  name: 'tag',
  props: {
    name: {
      type: String,
      required: true
    },
    // TODO: count known?
    count: {
      type: Number,
      required: true
    },
    removable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    prettyCount () {
      return this.count // TODO: return 20M or something
    }
  },
  methods: {
    deleteTag () {
      // console.log('Trying to delete tag #' + this.name)
    },
    selectTag () {
      this.$store.commit('selectTag', {text: this.name})
    }
  }
}
</script>
