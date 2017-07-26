import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import layOut from './modules/layOut'
import activities from './modules/activities'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  actions,
  getters,
  modules: {
    layOut,
    activities
  }
})
