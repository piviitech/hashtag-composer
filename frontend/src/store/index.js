import Vue from 'vue'
import Vuex from 'vuex'

import includes from 'lodash'

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

    if (includes(state.tagList, tagText)) {
      state.tagList.push(tagText)
    }
  },
  updateCurrentTag (state, { newCurrentTag }) {
    state.currentTagText = newCurrentTag
    // TODO: kick off autocomplete?
  },
  addSuggestedTag (state, { tagText }) { // for clicking around on related Tags
    if (!includes(state.tagList, tagText)) {
      state.tagList.push(tagText)
    }
  },
  selectTag (state, { text }) { // when clicking on tag list (suggestions)
    state.mostRecentTag = text
  }
}

// see https://github.com/vuejs/vuex/tree/dev/examples/todomvc/store
export default new Vuex.Store({
  state,
  mutations
})
