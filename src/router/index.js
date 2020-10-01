import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '../views/Main.vue'
import recoment from '../views/Recomment.vue'
import message from '../views/Message.vue'
import aboutus from '../views/Aboutus.vue'
import customized from '../views/Customized.vue'
import share from '../views/Share.vue'

Vue.use(VueRouter)
const routes = [

  {path: '/',redirect:'/main'},
  {path: '/main',name: 'main',component: main},
  {path: '/recoment',name: 'recoment',component: recoment},
  {path: '/message',name: 'message',component: message},
  {path: '/aboutus',name: 'aboutus',component: aboutus},
  {path: '/customized',name: 'customized',component: customized},
  {path: '/share',name: 'share',component: share},

]

const router = new VueRouter({
  routes
})

export default router
