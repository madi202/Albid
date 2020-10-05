import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

// const state = {
//   sidebarShow: 'responsive',
//   sidebarMinimize: false
// }

// const mutations = {
//   toggleSidebarDesktop (state) {
//     const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
//     state.sidebarShow = sidebarOpened ? false : 'responsive'
//   },
//   toggleSidebarMobile (state) {
//     const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
//     state.sidebarShow = sidebarClosed ? true : 'responsive'
//   },
//   set (state, [variable, value]) {
//     state[variable] = value
//   }
// }

export default new Vuex.Store({
  state: {
    //temopalte
    sidebarShow: 'responsive',
    sidebarMinimize: false,

    status: '',
    token: localStorage.getItem('token') || '',
    bidan: '',
    userId: localStorage.getItem('userId') || '',


  },
  mutations: {
    toggleSidebarDesktop(state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile(state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set(state, [variable, value]) {
      state[variable] = value
    },

    //for apps

    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, userId) {
      state.status = 'success'
      state.token = token
      state.userId = userId
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.userId = ''
    },
    GET_BIDAN(state, bidan) {
      state.bidan = bidan
    }

  },
  actions: {
    //user Logim
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        var config = {
          method: 'post',
          url: '/api/session',
          data: user
        };
        // axios({url: 'http://localhost:8080/api/session',data:user,method:'POST'})
        axios(config)
          .then(resp => {
            const token = resp.data.doc._id
            const userId = resp.data.doc.userId
            localStorage.setItem('token', token)
            localStorage.setItem('userId', userId)
            axios.defaults.headers.common['session-id'] = token
            // console.log(token);
            commit('auth_success', token, userId)
            resolve(resp)

          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    //user Register
    register({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        var config = {
          method: 'post',
          url: '/api/bidan',
          data: user
        };
        // axios({url: 'http://localhost:8080/api/session',data:user,method:'POST'})
        axios(config)
          .then(resp => {
            console.log(resp.data.httpStatus)
            resolve(resp)

          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },
    //user logout
    logout({
      commit
    }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        delete axios.defaults.headers.common['session-id']
        resolve()
      })
    },

    getBidan({
      commit
    }) {
      return new Promise((resolve, reject) => {
        var config = {
          method: 'get',
          url: '/api/bidan?_id=' + this.state.userId,
        };
        axios(config).then(response => {
            resolve(response)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })

      })
    },
    //menambahkan pasien
    tambahpasien({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        var config = {
          method: 'post',
          url: '/api/pasien',
          data: user
        };
        // axios({url: 'http://localhost:8080/api/session',data:user,method:'POST'})
        axios(config)
          .then(resp => {
            console.log(resp.data.httpStatus);
            resolve(resp)

          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
      })
    },

    //get pasien list
    getpasienList({
      commit
    }) {
      return new Promise((resolve, reject) => {
        var config = {
          method: 'get',
          url: '/api/pasien/list'
        };
        axios(config)
          .then(response => {
            resolve(response)

          })
          .catch(err => {
            reject(err)
          })
      })
    },
    //details pasien
    pasienDetails({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        let param = params
        // console.log(param)
        var config = {
          method: 'get',
          url: '/api/pasien?_id=' + param
        };
        axios(config)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },


    //list Rekam Meids
    PasienMRecord({
      commit
    }, params) {
      return new Promise((resolve, reject) => {

        let idPasien = params
        // console.log(params)
        var config = {
          method: 'get',
          url: '/api/rekamMedis/list?idPasien=' + idPasien
        };

        axios(config)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    //register rekam medis
    registermedis({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        var config = {
          method: 'post',
          url: 'api/rekamMedis',
          data: params
        };

        //  if (params.jenisPemeriksaan == 'ANC') {
        axios(config)
          .then(resp => {
            // console.log(resp.data)
            // console.log('ini id rekam medis :' + resp.data.docId);?
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            reject(err)
          })
        //  } else console.log('tidak masuk if')
      })
    },

    getAssesmenSubjektif({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        let param = params
        var config = {
          method: 'get',
          url: 'api/asesmenAwal?idRekamMedis=' + param
        };
        axios(config)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    UpdateAssesmenSubjektif({commit},params) {
      return new Promise((resolve, reject) => {
        console.log('masuk sini buat update')
        console.log(params)
       
        // comsole.log(idRekamMedis)
        let param = params
        var config = {
          method: 'put',
          url: '/api/asesmenAwal/subjektif?idRekamMedis=' + param.params,
          data : param.data
        };
        axios(config)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    
    getANC({
      commit
    }, params) {
      return new Promise((resolve, reject) => {
        let param = params
        var config = {
          method: 'get',
          url: `api/anc?idRekamMedis=${param}`
         
        };
        axios(config)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    UpdateANC({commit},params) {
      return new Promise((resolve, reject) => {
        console.log('masuk sini buat update')
       
        // comsole.log(idRekamMedis)
        let param = params
        var config = {
          method: 'put',
          url: `/api/anc?idRekamMedis=${param.idRekamMedis}`,
          data : param
        };
        axios(config)
          .then(response => {
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },



    //gettes
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    userData: state => state.bidan,
  },

})