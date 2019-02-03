<template>
  <div class="home">
    <h1>{{ test }} Home</h1>
    <input type="text" v-model="userId">
    <button @click="testGet($event, 2)">发送get</button>
    <button @click="testPost($event, 2)">发送post</button>
    <p>返回信息为: {{callbackString}}</p>
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
      test: Hc.say('Hello!'),
      callbackString: '',
      userId: 'id...'
    }
  },
  // created () {
  //   window.scrollTo(0, 0)
  // },
  methods: {
    testPost: function (event) {
      console.log(event.target, this)
      this.$ajax.post(window.DATAURL.home.post, {
        userId: this.userId,
      }).then((response) => {
        this.callbackString = response.data
        // alert(response.data.r)
        // this.$router.push({path: '/'})
      }).catch((err) => {
        console.log(err)
        this.callbackString = '发布失败，请求不到服务器'
      })
    },
    testGet: function (event) {
      console.log(event.target, this)
      this.$ajax.get(window.DATAURL.home.get).then((response) => {
        this.callbackString = response.data;
      }).catch((error) => {
        this.callbackString = error.response.statusText;
      })
    }
  },
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
