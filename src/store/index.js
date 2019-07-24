import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    admin: null
  },
  mutations: {
    updateUser: (state, payload) => {
      state.user = payload
    },
    updateAdmin: (state, payload) => {
      state.admin = payload
    }
  },
  actions: {
    //
  },
  getters: {
    user: (state) => {
      return state.user
    },
    admin: (state) => {
      return state.admin
    }
  }
})

export default store
