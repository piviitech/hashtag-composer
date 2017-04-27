<template>
  <span>
    <div>Tag input.</div>
    <tag-autocomplete></tag-autocomplete>
  </span>
</template>

<script>
import TagAutocomplete from './TagAutocomplete'

export default {
  name: 'tag-input',
  components: {
    'tag-autocomplete': TagAutocomplete
  },
  computed: {
  }
}
</script>
