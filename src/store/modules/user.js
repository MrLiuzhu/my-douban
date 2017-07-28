import request from "superagent"
// import jsonp from "superagent-jsonp"
import axios from 'axios'

import jsonp from "jsonp"


const state = {
  login_email:'',
  login_name:'',
  login_token:'',
  temp_email:'',
  temp_token:'',
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
    localStorage.setItem('name',payload.name)
    localStorage.setItem('token',payload.token)
    state.login_email = payload.email
    state.login_name = payload.name
    state.login_token = payload.token
  },
  getLocalUer(state, payload){
    state.login_email = localStorage.getItem('email')
    state.login_token = localStorage.getItem('token')
    state.login_name = localStorage.getItem('name')
  }
}

const actions = {
  login ({commit, state}, payload) {
    return new Promise((resolve,reject)=>{
      jsonp('http://op.juhe.cn/onebox/basketball/nba?key=8f46058ce669553f78f840ba8f0b4863', null, function (err, data) {
        if (err) {
          reject(err)
        } else {
          console.log(data)
          commit({
            type:'setUser',
            email: payload.email,
            name: 'jocueliu',
            token: payload.token
          })
          resolve({
            type:'setUser',
            email: payload.email,
            name: 'jocueliu',
            token: payload.token
          })
        }
      });


    })


  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
