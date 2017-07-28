import request from "superagent"
import jsonp from "superagent-jsonp"

const state = {
  queryRes_movie:[],
  queryRes_book:[],
  queryRes_music:[],
}

const getters = {

}

const mutations = {
  query (state, payload) {
    switch (payload.tag) {
      case 'movie':
        state.queryRes_movie = payload.res
        break;
      case 'book':
        state.queryRes_book = payload.res
        break;
      case 'music':
        state.queryRes_music = payload.res
        break;
      default:
        console.log('API is error!')
    }
  }
}

const actions = {
  query ({commit, state}, payload) {
    request
    .get('https://api.douban.com/v2/movie/search?q=' + payload.queryStr + '&count=3')
    .use(jsonp)
    .end((err, res)=>{
      if(!err){
        console.log(res)
        commit({
          type: 'query',
          tag: 'movie',
          res: res.body.subjects
        })
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
