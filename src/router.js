import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/home/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.use(VueRouter)
const routes = [
    {
        name: 'Index',
        path: '/',
        redirect: '/home',
        component: Home
    },
    {
        name: 'Home',
        path: '/home',
        meta: {
            title: '首页'
        },
        component: Home
    },
    {
        name: 'HelloWorld',
        path: '/helloworld',
        meta: {
            title: 'Hello'
        },
        component: HelloWorld
    }
]
export default new VueRouter({
    routes: routes
})