import Vue from 'vue'
import Vuex from 'vuex'

// import debounce from 'lodash'
import get from 'axios'

Vue.use(Vuex)

const state = {
  inputTag: '',
  autosuggestItems: [],
  tagList: [], // TODO: tag objects?
  searchedTag: {
    name: '',
    count: 0
  }, // TODO: tag object instead of just text?
  relatedItemCategories: {}
}

const mutations = {
  addTag (state, { tagText }) { // from the input field - free form
    console.log('Searching tag...')
    state.inputTag = ''

    if (tagText !== '') {
      if (!state.tagList.some(function (tag) { return tag.name === tagText })) {
        state.tagList.push({name: tagText, count: -1})
      }
    }

    state.autosuggestItems = []
  },
  updateCurrentTag (state, { newCurrentTag }) {
    console.log('Updating current tag...')
    state.inputTag = newCurrentTag

    if (newCurrentTag !== '') {
      get('/api/v1/search?q=' + newCurrentTag)
        .then(function (response) {
          state.autosuggestItems = response.data.tags
        })
    } else {
      state.autosuggestItems = []
    }
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
    // var found = -1
    // for (var i in state.tagList) {
    //   if (state.tagList[i].name === tagText) {
    //     found = i
    //   }
    // }
    // if (found === -1) {
    //   state.tagList.push({name: tagText, count: -1})
    // }
  },
  removeTag (state, { tagText }) {
    if (state.tagList.some(function (tag, i) { return tag.name === tagText })) {
      state.tagList.splice(state.tagList.findIndex(function (tag) { return tag.name === tagText }), 1)
    }
    // // TODO: update recent?
  },
  searchTag (state, { tagText }) { // when clicking on tag list (suggestions)
    state.searchedTag.name = tagText
    get('/api/v1/related?q=' + tagText)
      .then(function (response) {
        state.relatedItemCategories = response.data
      })
    state.autosuggestItems = []
  }
}

// see https://github.com/vuejs/vuex/tree/dev/examples/todomvc/store
export default new Vuex.Store({
  state,
  mutations
})
