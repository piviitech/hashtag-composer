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
  $light-pink: rgb(188, 72, 110)
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

  .autocomplete-container
    display: block
    width: 50%
    transform: translateX(50%)
    font-size: 1em

  .tag-container
    padding: 0.5em
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
      background-color: $pink
    .tag
    .count
    .deletethis
      font-size: 1em
      display: flex
      align-items: center
      justify-content: center
      margin-left: 0.5em

  .list-container
    .tags-wrapper
      display: flex
      justify-content: center
      flex-wrap: wrap

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

</style>
