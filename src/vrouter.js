import Vue from 'vue'
import VueRouter from 'vue-router'
import Olt from './olt.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Olt
        },
    ]
})

new Vue({
    router
}).$mount('#app')