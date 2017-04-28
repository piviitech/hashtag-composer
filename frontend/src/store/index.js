import Vue from 'vue'
import Vuex from 'vuex'

// import {includes, debounce} from 'lodash'
// import includes from 'lodash'
import get from 'axios'

Vue.use(Vuex)

const state = {
  currentTagText: '',
  autosuggestItems: [],
  tagList: [], // TODO: tag objects?
  mostRecentTag: '', // TODO: tag object instead of just text?
  relatedItemCategories: {}
}

const mutations = {
  commitTag (state, { tagText }) { // from the input field - free form
    state.currentTagText = ''
    state.mostRecentTag = tagText

    // if (includes(state.tagList, tagText)) {
    state.tagList.push({name: tagText, count: -1})

    get('/api/v1/related')
      .then(function (response) {
        state.relatedItemCategories = response.data
      })
  },
  updateCurrentTag (state, { newCurrentTag }) {
    state.currentTagText = newCurrentTag

    get('/api/v1/search')
      .then(function (response) {
        state.autosuggestItems = response.data.tags
      })
    // see end of https://vuex.vuejs.org/en/actions.html
    //
    // debounce(
    //   function () {
    //     get('/api/v1/search')
    //       .then(function (response) {
    //         console.log(response.data)
    //         state.autosuggestItems = response.data.tags
    //       })
    //   },
    //   500
    // )
  },
  addSuggestedTag (state, { tagText }) { // for clicking around on related Tags
    // if (!includes(state.tagList, tagText)) {
    state.tagList.push({name: tagText, count: -1})
  },
  selectTag (state, { text }) { // when clicking on tag list (suggestions)
    state.mostRecentTag = text
    // TODO
    // get('/api/v1/related')
    //   .then(function (response) {
    //     state.relatedItemCategories = response.data
    //   })
  }
}

// see https://github.com/vuejs/vuex/tree/dev/examples/todomvc/store
export default new Vuex.Store({
  state,
  mutations
})
