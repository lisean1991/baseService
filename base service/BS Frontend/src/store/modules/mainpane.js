import mainPaneApi from '../../api/mainPaneApi'

const state = {
  bottomSystem: [],
  middleSystem: [],
  topSystem: {
    level1: [],
    level2: []
  }
}

// getters
const getters = {

}

// actions
const actions = {
  getLayerSystemData ({ commit, state }) {
    mainPaneApi.getMainSystems().then(result => {
      if (result) {
        commit('setMainSystems', result)
      }
    })
  }
}

// mutations
const mutations = {
  setMainSystems (state, data) {
    state.bottomSystem = [...data.bottomSystem]
    state.middleSystem = [...data.middleSystem]
    state.topSystem = {...data.topSystem}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
