<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view v-if="isRouterAlive"></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
  export default {
    name: '',
    // provide / inject 组合 实现页面刷新
    // 其他页面中 注入依赖 inject:['reload'], 然后执行 reload方法即可
    provide(){
      return {
        reload:this.reload
      }
    },
    data() {
      return {
        isRouterAlive:true
      }
    },
    methods: {
      reload(){
        this.isRouterAlive=false
        this.$nextTick(()=>{
          this.isRouterAlive=true 
        })
      }
    },
  }
</script>

<style scoped>
  #app{
    height: 100%;
  }
</style>