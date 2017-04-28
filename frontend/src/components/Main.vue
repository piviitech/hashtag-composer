<template>
  <div>
    <h1>Hashtag Composer</h1>
    <tag-input></tag-input>
    <span class="right">
      <tag-count></tag-count>
      <tag-copy-button></tag-copy-button>
    </span>
    <tag-autocomplete></tag-autocomplete>
    <div>
      <div>
        <tag-list></tag-list>
      </div>
    </div>
    <tag-suggestions></tag-suggestions>
  </div>
</template>

<script>
import TagCount from './TagCount'
import TagList from './TagList'
import TagCopyButton from './TagCopyButton'
import TagInput from './TagInput'
import TagSuggestions from './TagSuggestions'
import TagAutocomplete from './TagAutocomplete'

export default {
  name: 'main',
  components: {
    'tag-count': TagCount,
    'tag-list': TagList,
    'tag-copy-button': TagCopyButton,
    'tag-input': TagInput,
    'tag-suggestions': TagSuggestions,
    TagAutocomplete
  }
}
</script>

<style scoped>
</style>
