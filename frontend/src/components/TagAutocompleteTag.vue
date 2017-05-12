<template>
  <div :class="{ added: isAdded }" class="autocomplete-tag-container">
    <span class="autocomplete-main-button" @click="commit">
      <span class="autocomplete-tag">#{{ name }}</span>
      <span class="autocomplete-count">({{ prettyCount }})</span>
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
    isRemovable: {
      type: Boolean,
      required: false,
      default: false
    },
    isSearchable: {
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
    },
    isAdded () {
      return this.$store.state.tagList.some((tag) => { return tag.name === this.name })
    }
  },
  methods: {
    commit () {
      this.$store.commit('searchTag', {tagText: this.name})
      this.$store.commit('addTag', {tagText: this.name})
    }
  }
}
</script>
