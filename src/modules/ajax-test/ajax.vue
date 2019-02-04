<template>
  <div id="ajax">
    <p>123
      <!-- <router-link to="/Home">Go to Foo</router-link>
      <router-link to="/HelloWord">Go to Bar</router-link> -->
    </p>
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/home/Home.vue'

export default {
  name: 'ajax',
  components: {
    HelloWorld,
    Home
  }
}
</script>

<style>
#ajax {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
