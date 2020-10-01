import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios=axios
// import './assets/cssC/iconfont.css'
import './assets/cssC/moren.css'

// 导入自定义组件
import footer from './components/footer'
Vue.use(footer)
import header from './components/header'
Vue.use(header)
import evelator from './components/evelator'
Vue.use(evelator)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
