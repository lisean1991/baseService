import publicInfoApi from '../../api/publicInfoApi'

const state = () => ({
  runDateNumber: 0,
  systemDate: new Date(),
  systemLocation: '四川省成都市'
})

// getters
const getters = {

}

// actions
const actions = {
  getPublicData ({ commit, state }) {
    publicInfoApi.readPublicData().then(result => {
      if (result) {
        commit('setPublicData', result)
      }
    })
  }
}

// mutations
const mutations = {
  setPublicData (state, data) {
    state.runDateNumber = data.number
    state.systemDate = data.date
    state.systemLocation = data.location
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
