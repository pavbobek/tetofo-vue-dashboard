import { createWebHistory, createRouter } from 'vue-router'
import DashboardComponent from './component/DashboardComponent.vue'
import LoginCompoment from './component/DashboardComponent.vue'
import RegisterComponent from './component/DashboardComponent.vue'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: LoginCompoment
        },
        {
            path: '/dashboard',
            component: DashboardComponent
        },
        {
            path: '/login',
            component: LoginCompoment
        },
        {
            path: '/register',
            component: RegisterComponent
        }
    ]
})