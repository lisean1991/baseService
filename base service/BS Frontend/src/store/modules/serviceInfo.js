import systemApi from '../../api/systemApi'

const state = () => ({
  currentChoose: {},
  systemList: []
})

// getters
const getters = {
}

// actions
const actions = {
  getAllSystemInfo ({ commit, state }) {
    systemApi.getAllSystemData().then(result => {
      commit('setAllSystemData', result)
    })
  },
  getChooseSystemInfo ({ commit, state },sId) {
    systemApi.getSystemDataById(sId).then(result => {
      commit('setChooseSystem', result)
    })
  }
}

// mutations
const mutations = {
  setAllSystemData (state, data) {
    state.systemList = data.map(item => {
      item.SysResPercent = 100
      item.DbResPercent = 100
      item.SysResLevel = parseInt(item.serviceResTime / 5) > 2 ? 2 : parseInt(item.serviceResTime / 5)
      item.DbResLevel = parseInt(item.dbResTime / 5) > 2 ? 2 : parseInt(item.dbResTime / 5)
      return {...item}
    })
    state.currentChoose = state.systemList[0]
  },
  setChooseSystem (state, data) {
    state.systemList = state.systemList.map(item => {
      if (data.id === item.id) {
        data.SysResPercent = Math.round((data.serviceResTime - item.serviceResTime) / item.serviceResTime * 100)
        data.DbResPercent = Math.round((data.dbResTime - item.dbResTime) / item.dbResTime * 100)
        data.SysResLevel = parseInt(data.serviceResTime / 5) > 2 ? 2 : parseInt(data.serviceResTime / 5)
        data.DbResLevel = parseInt(data.dbResTime / 5) > 2 ? 2 : parseInt(data.dbResTime / 5)
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
