import systemApi from '../../api/systemApi'

const state = () => ({
  systemNumber: 0,
  serviceNumber: 0,
  personNumber: 0,
  terminalData: {
    POS: 1,
    ATM: 1,
    VTM: 1,
    OHTER: 1
  }
})

// getters
const getters = {

}

// actions
const actions = {
  getSystemData ({ commit, state }) {
    systemApi.getSystemData().then(result => {
      if (result) {
        commit('setSystemData', result)
      }
    })
  },
  getTerminalData ({ commit, state }) {
    systemApi.getTerminalData().then(result => {
      if (result) {
        commit('setTerminalData', result)
      }
    })
  }
}

// mutations
const mutations = {
  setSystemData (state, data) {
    state.systemNumber = data.systemNumber
    state.serviceNumber = data.serviceNumber
    state.personNumber = data.personNumber
  },
  setTerminalData (state, data) {
    state.terminalData = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
