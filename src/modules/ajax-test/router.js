export default [
    {
        name: 'Home',
        path: '/home',
        meta: {
            title: '首页'
        },
        component: require('../../components/home/Home.vue')
    },
    {
        name: 'HelloWorld',
        path: '/helloworld',
        meta: {
            title: 'Hello'
        },
        component: require('../../components/HelloWorld.vue')
    }
]