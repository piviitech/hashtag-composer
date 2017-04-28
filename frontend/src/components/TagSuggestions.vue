<template>
  <span v-if="notEmpty">
  <span>Tag suggestions for #{{recentTag}}</span>

  <div v-for="category in suggestionCategories">
  {{ category.title }}
  <ul v-for="tag in category.items">
    <tag :name="tag.name" :count="tag.count" />
  </ul>
  </div>

  </span>
</template>

<script>
import Tag from './Tag'

export default {
  name: 'tag-suggestions',
  computed: {
    recentTag () {
      return this.$store.state.mostRecentTag
    },
    notEmpty () {
      return Object.keys(this.$store.state.relatedItemCategories).length !== 0
    },
    suggestionCategories () {
      var a = this.$store.state.relatedItemCategories
      var res = []

      res.push({
        title: 'Small',
        items: a.tags_small
      })
      res.push({
        title: 'Medium',
        items: a.tags_medium
      })
      res.push({
        title: 'Large',
        items: a.tags_large
      })
      return res
    }
  },
  components: {
    Tag
  }
}
</script>
