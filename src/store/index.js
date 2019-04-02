
import Vue from 'vue'
import Vuex from 'vuex'
const userlist = [{
  id: 1,
  user: 'admin01',
  realname: '王小虎',
  age: 20,
  idType: '111111111111'
}, {
  id: 2,
  user: 'admin01',
  realname: '王小虎',
  age: 26,
  idType: '111111111111'
}, {
  id: 3,
  user: 'admin01',
  realname: '王小虎',
  age: 22,
  idType: '111111111111'
}, {
  id: 4,
  user: 'admin01',
  realname: '王小虎',
  age: 29,
  idType: '111111111111'
}, {
  id: 5,
  user: 'admin01',
  realname: '王小',
  age: 29,
  idType: '111111111111'
}]
Vue.use(Vuex)
const state = {
  userinfo: JSON.parse(localStorage.getItem('userinfo')),
  userlist: []
}
const getters = {
  vipUser: state => {
    return state.userinfo.filter(item => item.age > 25)
  }
}
const actions = {
  GET_USERINFO ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('SAVE_USELIST', userlist)
      resolve(userlist)
    })
  }
}
const mutations = {
  SAVE_USERINFO (state, userinfo) {
    localStorage.setItem('userinfo', JSON.stringify(userinfo))
    state.userinfo = userinfo
  },
  SAVE_USELIST (state, userlist) {
    // localStorage.setItem('userinfo', JSON.stringify(userinfo))
    state.userlist = userlist
  }
}
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
