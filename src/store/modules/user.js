import request from "superagent"
import jsonp from "superagent-jsonp"
// import axios from 'axios'

// import jsonp from "jsonp"


const state = {
  login_email:'',
  login_name:'',
  login_token:'',
  temp_email:'',
  temp_token:'',
  temp_name:'',
}

const getters = {
  currentUser : state =>{
    return {
      email: state.login_email,
      token: state.login_token,
      name: state.login_name
    }
  }
}

const mutations = {
  updateData (state, payload) {
    switch (payload.name) {
      case 'email':
        state.temp_email = payload.value
        break;
      case 'token':
        state.temp_token = payload.value
        break;
      default:
        console.log('Error:Dont directly mutate Vuex store')
    }
  },
  setUser (state, payload) {
    localStorage.setItem('email',payload.email)
    localStorage.setItem('token',payload.token)
    localStorage.setItem('name',payload.name)

    state.login_email = payload.email
    state.login_name = payload.name
    state.login_token = payload.token
  },
  getLocalUser(state, payload){
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  },
  logout(state, payload){
    localStorage.removeItem('email')
    localStorage.removeItem('name')
    localStorage.removeItem('token')
    state.login_token = ''
    state.login_name = ''
    state.login_email = ''
  }
}

const actions = {
  // login ({commit, state}, payload) {
  //   return new Promise((resolve,reject)=>{
  //     jsonp('http://op.juhe.cn/onebox/basketball/nba?key=8f46058ce669553f78f840ba8f0b4863', null, function (err, data) {
  //       if (err) {
  //         reject(err)
  //       } else {
  //         commit({
  //           type:'setUser',
  //           email: payload.email,
  //           name: 'jocueliu',
  //           token: payload.token
  //         })
  //         resolve({
  //           type:'setUser',
  //           email: payload.email,
  //           name: 'jocueliu',
  //           token: payload.token
  //         })
  //       }
  //     });
  //   })
  // }

  /**
   * Login
   * new Promise((resolve, reject) => {})
   * Authorization: 'Bearer ' + token
   * email: payload.email
   * pass: payload.pass
   * name: payload.name
   */
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://douban.herokuapp.com/user/' + payload.email)
        .set('Authorization', 'Bearer ' + payload.token)
        .then((res) => {
          commit({
            type: 'setUser',
            email: res.body.email,
            token: res.body.token,
            name: res.body.name
          })
          resolve(res)
        }, (err) => {
          reject(err)
        })
    })
  },


  register({ commit }, payload){
    return new Promise((resolve, reject)=>{
      request
      .post('https://douban.herokuapp.com/user/')
      .send({
        email: payload.email,
        name: payload.name,
        pass: payload.pass
      })
      .then((res)=>{
        commit({
          type: 'setUser',
          email: res.body.email,
          token: res.body.token,
          name: res.body.name,
        })
        resolve(res)
      },(err)=>{
        reject(err)
      })
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
