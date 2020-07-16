import Vue from 'vue'
import Vuex from 'vuex'
import PublicInfo from './modules/publicInfo'
import SystemInfo from './modules/systemInfo'
import ServiceInfo from './modules/serviceInfo'
import Mainpane from './modules/mainpane'
import Runtime from './modules/runtime'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    PublicInfo,
    SystemInfo,
    ServiceInfo,
    Mainpane,
    Runtime
  },
  strict: debug,
  plugins: []
})
