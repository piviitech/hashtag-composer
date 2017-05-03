<template>
  <div class="" v-if="notEmpty">
    <div class="tagswrapper" >
      <tag v-for="tag in tagList" :name="tag.name" :count="tag.count" :removable="true"/>
    </div>
    <tag-count></tag-count>
    <tag-copy-button></tag-copy-button>
  </div>
</template>

<script>
import Tag from './Tag'
import TagCopyButton from './TagCopyButton'
import TagCount from './TagCount'

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
    'tag-count': TagCount,
    Tag
  }
}
</script>

<style lang="sass" scoped>
  .tagswrapper
    display: flex
    justify-content: center
    flex-wrap: wrap
</style>
