<template>  
  <div id="app">  
    <!-- 路由显示的地方 -->  
    <vheader :title="title"></vheader>  
    <router-view></router-view>  
  </div>  
</template>  
  
<script>  
  import header from './components/106Header.vue' // 引入模板  
  export default {  
    // vue代码都在这里写  
    name: 'app',  
    data () {  
      return {title: 'hello chongqing!'}  
    },  
    components: {  
      vheader: header  
    }  
  }  
</script>  
  
<style>  
  #app {  
    font-family: 'Avenir', Helvetica, Arial, sans-serif;  
    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;  
    text-align: center;  
    color: #2c3e50;  
    margin-top: 60px;  
  }  
</style>  