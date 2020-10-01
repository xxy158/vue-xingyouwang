<template>
  <div id="app">
    <!-- <mains></mains> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import mains from './views/Main'
  export default {
    name: '',
    components: {
      mains
    }
  }
</script>

<style scoped>
  body,
  html {
    visibility: hidden;
    background: rgb(243, 243, 243);
  }

</style>