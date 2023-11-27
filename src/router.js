import { createWebHistory, createRouter } from 'vue-router'
import DashboardComponent from './component/DashboardComponent.vue'
import LoginCompoment from './component/LoginComponent.vue'
import RegisterComponent from './component/RegisterComponent.vue'
import WelcomeComponent from './component/WelcomeComponent.vue'

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            component: WelcomeComponent
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
        },
        {
            path: '/welcome',
            component: WelcomeComponent
        }
    ]
})