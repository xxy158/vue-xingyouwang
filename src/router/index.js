import Vue from 'vue'
import VueRouter from 'vue-router'

import layer from 'vue-layer'
import '../../node_modules/vue-layer/lib/vue-layer.css'
Vue.prototype.$layer = layer(Vue);

// 解决 $router.push相同地址报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import header from '../views/Header.vue'
import main from '../views/Main.vue'
import recoment from '../views/Recomment.vue'
import message from '../views/Message.vue'
import platform from '../views/Platform.vue'
import customized from '../views/Customized.vue'
import share from '../views/Share.vue'
import register from '../views/Register.vue'
import aboutus from '../components/platform/Aboutus.vue'
import advice from '../components/platform/Advice.vue'
import callus from '../components/platform/Callus.vue'
import getview from '../components/platform/Getview.vue'
import registerbasic from '../components/platform/Registerbasic.vue'
import mine from '../views/Mine.vue'
import customresult from '../views/Customresult.vue'
import recomdetails from '../views/Recomdetails.vue'
import sharedetails from '../views/Sharedetails.vue'
import writeshare from '../views/Writeshare.vue'

Vue.use(VueRouter)
const routes = [

  { path: '/', redirect: '/header/main' },
  { path: '/header', name: 'header', component: header, children: [
      { path: '/header/main', name: 'main', component: main },
      { path: '/header/recoment', name: 'recoment', component: recoment },
      { path: '/header/recomdetails', name: 'recomdetails', component: recomdetails },
      { path: '/header/message', name: 'message', component: message },
      { path: '/header/platform', name: 'platform', component: platform, redirect: '/header/platform/aboutus' ,children:[
        { path: '/header/platform/aboutus', name: 'aboutus', component: aboutus },
        { path: '/header/platform/advice', name: 'advice', component: advice },
        { path: '/header/platform/callus', name: 'callus', component: callus },
        { path: '/header/platform/getview', name: 'getview', component: getview },
        { path: '/header/platform/registerbasic', name: 'registerbasic', component: registerbasic },
      ]},
      { path: '/header/customized', name: 'customized', component: customized },
      { path: '/header/share', name: 'share', component: share },
      { path: '/header/sharedetails', name: 'sharedetails', component: sharedetails },
      { path: '/header/writeshare', name: 'writeshare', component: writeshare },
      { path: '/header/mine', name: 'mine', component: mine },
      { path: '/header/customresult:customviews', name: 'customresult', component: customresult },
    ]
  },
  { path: '/register', name: 'register', component: register },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.path=='/header/customized'){
    if(!localStorage.getItem("user")){
      console.log(Vue)
      console.log(new Vue())
      console.log(new Vue().$layer.confirm)
      new Vue().$layer.confirm('您还未登录,是否去登录？', {
          btn: ['是','否'] //按钮
      }, function(index){
        next({
          name:'main',
          path:'/header/main',
          params:{showlogin:true}
        })
          new Vue().$layer.close(index)
        }, function(index){
          new Vue().$layer.close(index)
      });
    }
  }else{
    next()
  }
})

export default router
