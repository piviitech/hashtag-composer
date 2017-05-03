<template>
  <div v-if="notEmpty" class="container">
    <span>Tag suggestions for #{{recentTag}}</span>
    <div class="wrapper">
      <div v-for="category in suggestionCategories" class="category">
        {{ category.title }}
        <ul v-for="tag in category.items">
          <tag :name="tag.name" :count="tag.count" />
        </ul>
      </div>
    </div>
    <hr>
  </div>
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

<style lang="sass">
  .container
    text-align: center

  .wrapper
    display: flex
    justify-content: center

    .category
      margin: 1em
</style>
