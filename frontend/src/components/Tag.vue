<template>
  <div :class="" class="tag-container list-complete-item" @mouseover="showButtons" @mouseleave="hideButtons">
    <span class="tag" @click="addTag">#{{name}}</span>
    <span class="count">({{prettyCount}})</span>
    <span class="side-button" @click="sideAction">
      <icon name="times" v-if="visibleButtons && removable"></icon>
      <icon name="search" v-if="visibleButtons && searchable"></icon>
    </span>
  </div>
</template>

<script>

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'tag',
  components: {
    Icon
  },
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
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: function () {
    return {
      visibleButtons: false
    }
  },
  computed: {
    prettyCount () {
      return this.count // TODO: return 20M or something
    }
  },
  methods: {
    sideAction () {
      if (this.removable) {
        this.$store.commit('removeTag', {tagText: this.name})
      } else if (this.searchable) {
        this.$store.commit('searchTag', {tagText: this.name})
      }
    },
    addTag () {
      this.$store.commit('addTag', {tagText: this.name})
    },
    showButtons () {
      this.visibleButtons = true
    },
    hideButtons () {
      this.visibleButtons = false
    }
  }
}
</script>
