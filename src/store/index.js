import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import activities from './modules/activities'
import movie from './modules/movie'
import book from './modules/book'
import group from './modules/group'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  actions,
  getters,
  modules: {
    activities,
    movie,
    book,
    group
  }
})
