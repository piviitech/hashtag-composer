import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  increment (state) {
    state.count++
  }
}

// see https://github.com/vuejs/vuex/tree/dev/examples/todomvc/store

export default new Vuex.Store({
// const store = new Vuex.Store({
  state,
  mutations
})
