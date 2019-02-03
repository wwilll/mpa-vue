<template>
  <div class="home">
    <h1>{{ test }} Home</h1>
  </div>
</template>

<script>
import HomeFunc from './home.js'
let Hc = new HomeFunc();
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      test: Hc.say('Hello!')
    }
  },
  // created () {
  //   window.scrollTo(0, 0)
  // },
  // methods: {},
  // computed: {
  //   shortComments () {
  //     return this.$store.getters.getShortComments
  //   },
  //   longComments () {
  //     return this.$store.getters.getLongComments
  //   }
  // },
  // watch: {
  //   shortComments () {
  //   },
  //   longComments () {
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import './home.less';
</style>
