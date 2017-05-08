<template>
  <div class="tag-container" @mouseover="showButtons" @mouseleave="hideButtons">
    <span class="search" v-if="visibleButtons && searchable">
      S
    </span>
    <span class="tag" @click="selectTag" >#{{name}}</span>
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
      default: true
    },
    searchable: {
      type: Boolean,
      required: false,
      default: true
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
      // console.log('Trying to delete tag #' + this.name)
      this.$store.commit('removeTag', {tagText: this.name})
    },
    selectTag () {
      if (this.removable) {
        // already added tag, we only select it
        this.$store.commit('selectTag', {tagText: this.name})
      } else {
        // tag not yet added. Add dat shit!
        this.$store.commit('commitTag', {tagText: this.name})
      }
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
