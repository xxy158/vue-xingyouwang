import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.prototype.$axios=axios

import layer from 'vue-layer'
import '../node_modules/vue-layer/lib/vue-layer.css'
Vue.prototype.$layer = layer(Vue);
import './assets/cssC/iconfont/iconfont.css'
import './assets/cssC/moren.css'

// 导入自定义组件
import footer from './components/footer'
Vue.use(footer)
import evelator from './components/evelator'
Vue.use(evelator)
import login from './components/login'
Vue.use(login)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
