import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    updateUser: (state, payload) => {
      state.user = payload.user
    }
  },
  actions: {
    //
  },
  getters: {
    user: (state) => {
      return state.user
    }
  }
})

export default store
