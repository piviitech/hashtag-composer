<template>
  <span v-if="notEmpty">
  <span>Your tags:</span>
  <ul>
    <li v-for="tag in tagList">
      <tag :name="tag.name" :count="tag.count" :removable="true"/>
    </li>
  </ul>
  </span>
</template>

<script>
import Tag from './Tag'

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
    Tag
  }
}
</script>
