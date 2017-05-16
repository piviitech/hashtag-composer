<template>
  <div class="main-container">
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="static/logo.png" alt="">
        </a>
      </div>
      <h1>Hashtag Composer</h1>
    </div>
    <autocomplete>
    </autocomplete>
    <!-- <tag-input></tag-input> -->
    <tag-suggestions></tag-suggestions>
    <tag-list></tag-list>
  </div>
</template>

<script>
import TagList from './TagList'
import TagSuggestions from './TagSuggestions'
import Autocomplete from './autocomplete'

export default {
  name: 'main',
  components: {
    'tag-list': TagList,
    'tag-suggestions': TagSuggestions,
    'autocomplete': Autocomplete
  }
}
</script>
