<template>
  <div class="tag-container" @mouseover="showButtons" @mouseleave="hideButtons" @click="searchTag">
    <span class="search" v-if="visibleButtons && searchable">
      S
    </span>
    <span class="tag" >#{{name}}</span>
    <span class="count">({{prettyCount}})</span>
    <span class="deletethis" v-if="visibleButtons && removable" @click="deleteTag">
      <i class="fa fa-times" aria-hidden="true"></i>X
    </span>
    <span class="include" v-if="visibleButtons && includible">
      +
    </span>
  </div>
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
    },
    includible: {
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
    deleteTag () {
      this.$store.commit('removeTag', {tagText: this.name})
    },
    searchTag () {
      this.$store.commit('searchTag', {tagText: this.name})
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
