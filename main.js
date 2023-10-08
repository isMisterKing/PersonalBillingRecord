import App from './App'

import './src/common/globalStyle.css'
import './src/common/uniStyle.css'

import { myRequest } from './util/API.js'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  
  // *** 全局挂载 ***
  app.config.globalProperties.$myRequest = myRequest
  // ***************
  
  return {
    app
  }
}
// #endif