import Vue from 'vue'
import Ajax from './ajax.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import DATAURL from '../../config/interface.js'
import routes from '../..//router.js'

Vue.config.productionTip = true //启动时控制台生产提示
Vue.prototype.$ajax = axios
window.DATAURL = DATAURL

Vue.use(VueRouter)
let router = new VueRouter(routes)
Vue.use(require('vue-wechat-title'))

new Vue({
  router,
  render: h => h(Ajax),
}).$mount('#ajax')
