<template>
    <nav>
        <li>
            <router-link to="/dashboard">Home</router-link>
        </li>
        <div v-if="!isUserLogged()">
            <li>
                <RouterLink to="/login">Login</RouterLink>
            </li> 
            <li>
                <RouterLink to="/register">Register</RouterLink>
            </li> 
        </div>
        <div v-if="isUserLogged()">
            <li>
                <a href @click.prevent="logout">Logout</a>
            </li> 
        </div>
    </nav>
</template>

<script setup>
    import authService from '../service/AuthService.js'
    import router from '../router.js'
    function logout() {
        authService.logout();
        router.push('/login');
    }
    function isUserLogged() {
        return authService.isUserLogged()
    }
</script>