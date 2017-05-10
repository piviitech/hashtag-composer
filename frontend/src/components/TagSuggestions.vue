<template>
  <div v-if="notEmpty" class="container">
    <div class="current">#{{recentTag}}</div>
    <div class="wrapper">
      <div v-for="category in suggestionCategories" class="category">
        <!-- {{ category.title }} -->
        <draggable :list="category.items" v-for="tag in category.items">
          <tag :name="tag.name" :count="tag.count" :key="tag.name" :searchable="true" />
        </draggable>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import Tag from './Tag'
import draggable from 'vuedraggable'

export default {
  name: 'tag-suggestions',
  computed: {
    recentTag () {
      return this.$store.state.searchedTag.name
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
    Tag,
    draggable
  }
}
</script>

<style lang="sass" scoped>
  $pink: #b22d57

  .container
    text-align: center
    margin: 2em

  .current
    color: $pink
    font-weight: 500
    font-size: 2em

  .wrapper
    display: flex
    justify-content: center
    flex-wrap: wrap

    .category
      margin: 1em
</style>
