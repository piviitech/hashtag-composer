<template>
  <div class="list-container" v-if="notEmpty">
    <div class="tags-wrapper" >
      <tag v-for="tag in tagList" :name="tag.name" :count="tag.count" :removable="true"/>
    </div>
    <tag-copy-button></tag-copy-button>
  </div>
</template>

<script>
import Tag from './Tag'
import TagCopyButton from './TagCopyButton'

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
    Tag
  }
}
</script>
