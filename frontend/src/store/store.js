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

export default new Vuex.Store({
// const store = new Vuex.Store({
  state,
  mutations
})
