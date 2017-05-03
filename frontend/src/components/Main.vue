<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="static/logo.png" alt="">
        </a>
      </div>
      <h1>Hashtag Composer</h1>
    </div>
    <tag-input></tag-input>
    <tag-suggestions></tag-suggestions>
    <tag-list></tag-list>
  </div>
</template>

<script>
import TagList from './TagList'
import TagInput from './TagInput'
import TagSuggestions from './TagSuggestions'

export default {
  name: 'main',
  components: {
    'tag-list': TagList,
    'tag-input': TagInput,
    'tag-suggestions': TagSuggestions
  }
}
</script>

<style scoped lang="sass">
  $font-stack: Helvetica, sans-serif
  $primary-color: #333
  $very-light-pink: #fce8ee
  $pink: #b22d57

  .container
    text-align: center

  .header
    height: 8em
    padding: 1em
    margin: 1em
    h1
      text-align: center
      color: $pink
    .logo
      height: 4em
      img
        height: 100%
</style>
