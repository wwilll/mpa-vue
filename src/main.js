import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import DATAURL from './config/interface.js'

Vue.config.productionTip = true //启动时控制台生产提示
Vue.prototype.$ajax = axios
window.DATAURL = DATAURL

new Vue({
  render: h => h(App),
}).$mount('#app')
