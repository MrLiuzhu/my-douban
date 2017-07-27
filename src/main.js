
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// import './filters'
import store from './store'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import * as Types from './store/mutation-types'

Vue.use(VueLocalStorage)
Vue.use(VueResource)

// API config
// Vue.http.options.root = 'http://localhost';
// Vue.http.interceptors.push((request, next) => {
//   const token = window.localStorage.getItem('CSAMP_SESSION_TOKEN');
//   if (token) {
//     request.headers.set('CSAMP_SESSION_TOKEN', token)
//   }
//   next();
// })

// 路由映射 BREADCRUMB
router.beforeEach((to, from, next) => {
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
