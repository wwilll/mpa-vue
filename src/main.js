import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import DATAURL from './config/interface.js'
import router from './router.js'
import $ from 'jquery'
import 'bootstrap'

Vue.config.productionTip = true //启动时控制台生产提示
Vue.prototype.$ajax = axios
window.DATAURL = DATAURL
Vue.prototype.$ = $
Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
