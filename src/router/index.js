import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    /*   {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      } */
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
