import runtimeApi from '../../api/runtimeApi'

const state = {
  currentChoose: {},
  systemRunList: []
}

// getters
const getters = {

}

// actions
const actions = {
  getAllRunSystemData ({ commit, state }) {
    runtimeApi.getAllRunSystemData().then(result => {
      if (result) {
        commit('setRunSystemData', result)
      }
    })
  },
  getRunSystemDataById ({ commit, state }, sId) {
    runtimeApi.getRunSystemDataById(sId).then(result => {
      if (result) {
        commit('setRunChooseSystem', result)
      }
    })
  }
}

// mutations
const mutations = {
  setRunSystemData (state, data) {
    state.systemRunList = [...data]
  },
  setRunChooseSystem (state, data) {
    state.systemRunList = state.systemRunList.map(item => {
      if (data.id === item.id) {
        state.currentChoose = {...data}
        return {...data}
      }
      return item
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
