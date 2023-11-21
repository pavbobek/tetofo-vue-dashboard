import App from './App.vue'
import Router from './router.js'
import { createApp } from 'vue'

const app = createApp(App)
app.use(Router)
app.mount('#app')
