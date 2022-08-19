import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
// 全局引入
import GuangUI from '../packages/gui.js'
// 全局注册
Vue.use(GuangUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
