<template lang="html">
  <div style="position:relative" :class="{'open': openSuggestion}" class="input-container">
    <div class="searchbar">
      <input autofocus
        class="form-control"
        type="text"
        placeholder="Search a hashtag"
        v-model="selection"
        v-focus="focused"
        @focus="focused = true"
        @blur="focused = false"
        @keydown.enter = 'enter'
        @keydown.down = 'down'
        @keydown.up = 'up'
        @input = 'change'
      />
    </div>

    <div v-if="openSuggestion" class="center-me">
      <div class="dropdown-menu autocomplete-container" >
        <div v-for="(suggestion, index) in matches"
          class="autocomplete-match"
          :class="{'active': isActive(index)}"
          @click="suggestionClick(index)"
          >
          <div class="autocomplete-main-button">
            <div class="autocomplete-tag">{{ suggestion }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as focusMixin } from 'vue-focus'

export default {
  name: 'autocomplete',
  mixins: [ focusMixin ],
  data: function () {
    return {
      focused: false,
      open: false,
      current: -1,
      value: ''
    }
  },
  computed: {
    notEmpty () {
      return this.$store.state.autosuggestItems.length !== 0
    },
    matches () {
      return this.suggestions.filter((str) => {
        return str.indexOf(this.selection) >= 0
      })
    },
    openSuggestion () {
      return this.selection !== '' && this.matches.length !== 0 && this.open === true
    },
    selection: {
      get () {
        return this.$store.state.inputTag
      },
      set (newCurrentTag) {
        this.$store.commit('updateCurrentTag', {newCurrentTag})
        this.$store.commit('updateAutosuggestItems', {newCurrentTag})
      }
    },
    suggestions () {
      let array = this.$store.state.autosuggestItems.map(function (obj) {
        return obj.name
      })
      return array
    }
  },
  methods: {
    enter () {
      if (this.matches[this.current]) {
        this.selection = this.matches[this.current]
        this.$store.commit('searchTag', {tagText: this.selection})
        this.$store.commit('addTag', {tagText: this.selection})
        this.current = -1
        this.open = false
      } else {
        this.$store.commit('searchTag', {tagText: this.selection})
        this.$store.commit('addTag', {tagText: this.selection})
        this.current = -1
        this.open = false
      }
    },
    up () {
      if (this.current > -1) {
        this.current--
      }
    },
    down () {
      if (this.current < this.suggestions.length - 1) {
        this.current++
      }
    },
    isActive (index) {
      return index === this.current
    },
    change () {
      if (this.open === false) {
        this.open = true
        this.current = -1
      }
      if (this.selection === '') {
        this.open = false
      }
    },
    suggestionClick (index) {
      var clickedTag = this.matches[index]
      this.$store.commit('addTag', {tagText: clickedTag})
      this.$store.commit('searchTag', {tagText: clickedTag})
      this.current = -1
      this.open = false
    }
  }
}
</script>

<style lang="sass">
  // .form-control
  //   display: block
  //   width: 100%
  //   height: 34px
  //   padding: 6px 12px
  //   font-size: 14px
  //   line-height: 1.42857143
  //   color: #555
  //   background-color: #fff
  //   background-image: none
  //   border: 1px solid #ccc
  //   border-radius: 4px
  //   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
  //   box-shadow: inset 0 1px 1px rgba(0,0,0,.075)
  //   -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s
  //   -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  //   transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s
  //
  // .active

</style>
