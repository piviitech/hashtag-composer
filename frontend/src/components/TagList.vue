<template>
  <div class="list-container" v-if="notEmpty">
    <draggable :list="tagList" class="tags-wrapper" >
      <tag v-for="tag in tagList" :name="tag.name" :count="tag.count" :removable="true" :key="tag.name"/>
    </draggable>
    <tag-copy-button></tag-copy-button>
  </div>
</template>

<script>
import Tag from './Tag'
import TagCopyButton from './TagCopyButton'
import draggable from 'vuedraggable'

export default {
  name: 'tag-list',
  computed: {
    tagList () {
      return this.$store.state.tagList
    },
    notEmpty () {
      return this.$store.state.tagList.length !== 0
    }
  },
  components: {
    'tag-copy-button': TagCopyButton,
    Tag,
    draggable
  }
}
</script>
