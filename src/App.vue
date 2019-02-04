<template>
  <div id="app">
    <HelloWorld v-if="false" msg="Welcome to Your Vue.js App"/>
    <div class="top-nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/helloworld">HW</router-link>
    </div>
    <router-view class="router" v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  .router-link-exact-active.router-link-active {
    color: green;
  }
  a {
    text-decoration: none;
  }
  .top-nav {
    padding: .5rem 2rem;
    text-align: right;
    a {
      margin-left: 1rem;
    }
  }
  .router {
    &::before {
      display: table;
      content: '';
      clear: both;
    }
  }
}
@media screen and (max-width: 500px) {
  html {
    font-size: 32px;
  }
  #app {
    .top-nav {
    padding: .2rem .5rem;
    text-align: right;
    a {
      margin-left: .5rem;
    }
  }
  }
}
</style>
