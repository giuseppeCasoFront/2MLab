import { Products } from '../../services/http/Products'

export const products = {
  namespaced: true,

  state: {
    lockState: false,
    response: [],
    order: []
  },

  mutations: {
    fillResponse: (state, payload) => {
      state.response = payload.response
    },

    fillOrder: (state, payload) => {
      state.order = payload.order
    },

    setLockState: (state, payload) => {
      state.lockState = payload.state
    }
  },

  actions: {
    getProducts: ({ commit, rootState }, payload) => {
      return Products.getProducts(payload)
        .then(res => {
          return res || []
        })
    },

    fillResponse: ({ commit }, payload) => commit('fillResponse', payload),

    fillOrder: ({ commit }, payload) => commit('fillOrder', payload),

    setLockState: ({ commit }, payload) => commit('setLockState', payload)

  }
}
