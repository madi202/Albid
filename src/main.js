import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import Multiselect from 'vue-multiselect'
Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)
Axios.defaults.headers.common['x-api-key'] = 'APIKEYUNTUKAPLIKASILAYANANKEBIDANANKOTA211D3TIF2017POLBAN';
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.common['session-id'] = localStorage.getItem('token');

var cek = document.location.origin;
Axios.defaults.baseURL = cek;
new Vue({
  el: '#app',
  router,
  store,
  icons,
  Multiselect,
  template: '<App/>',
  components: {
    App
  }
})
