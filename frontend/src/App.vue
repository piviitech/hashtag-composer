<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  $font-stack: 'Raleway', sans-serif
  $primary-color: #333
  $very-light-pink: #fce8ee
  $pink: #b22d57
  $light-pink: #c86a89
  $medium-pink: #bc486e
  $grey: rgb(173, 185, 172)

  #app
    margin: 0
    font-family: $font-stack

  .main-container
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

  .input-container
    margin-top: 4em
    .searchbar
      text-align: center
      display: flex
      justify-content: center
    input
      display: block
      width: 30%
      font-size: 1.5em
      appearance: none
      border: none
      outline: none
      border-bottom: 1px solid grey
      font-family: 'Raleway', sans-serif

  .center-me
    display: flex
    justify-content: center
    width: 100vw

  .autocomplete-container
    position: absolute
    display: block
    width: 30%
    font-size: 1em
    border: 1px solid $grey
    background-color: white
    border-radius: 0em 0em 1em 1em
    left: auto

  .autocomplete-tag-container
    color: $grey
    display: inline-block
    cursor: pointer
    display: flex
    align-items: center
    transition: all 0.5s ease
    &:hover
      color: $medium-pink
    .autocomplete-main-button
      padding: 0.5em 0em 0.5em 2em
      .autocomplete-tag
        margin-left: 0.5em
      .autocomplete-count

  .tag-container
    background-color: $light-pink
    border-radius: 1em
    color: white
    display: inline-block
    margin: 0.1em
    cursor: pointer
    display: flex
    align-items: center
    transition: all 0.5s ease
    &:hover
      background-color: $medium-pink
    .main-button
      padding: 0.5em 0em 0.5em 2em
      .tag
      .count
        margin-left: 0.5em
    .side-button
      transition: all 0.5s ease
      border-radius: 1em
      font-size: 1em
      display: flex
      align-items: center
      justify-content: center
      margin-left: 0.5em
      margin-right: 0.5em
      height: 1.5em
      width: 1.5em
      background-color: $light-pink
      &:hover
        background-color: $medium-pink



  .list-container
    margin: 0 5em 0 5em
    .tags-wrapper
      display: flex
      justify-content: center
      flex-wrap: wrap

  .added
    background-color: $pink !important

  .copy-container
    margin: 1em
    text-align: center
    button
      transition: all 0.5s ease
      padding: 0
      border: none
      background: none
      background-color: $grey
      width: 8em
      padding: 0.5em
      font-size: 1em
      border-radius: 2em
      display: inline-block
      margin: 0.1em
      color: white
      &:hover
        font-weight: 500
    .copied
      background-color: $pink

  .list-complete-item
    transition: all 0.5s

  .list-complete-enter, .list-complete-leave-active
    opacity: 0

  .autocomplete-suggestion
    color: $grey
    cursor: pointer
    transition: all 0.5s ease
    padding: 0.5em 0em 0.5em 2em
    &:hover
      color: $medium-pink

  .active
    color: $medium-pink

</style>
