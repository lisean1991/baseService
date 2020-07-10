import Vue from 'vue'
import Vuex from 'vuex'
import PublicInfo from './modules/publicInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    PublicInfo
  },
  strict: debug,
  plugins: []
})
