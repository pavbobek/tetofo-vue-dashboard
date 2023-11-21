import { createWebHistory, createRouter } from 'vue-router'
import Dashboard from './component/dashboard.vue'
import Login from './component/login.vue'
import Register from './component/register.vue'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        }
    ]
})