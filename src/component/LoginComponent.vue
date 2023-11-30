<template>
    <h1>Login</h1>
    <form @submit.prevent="login">
        <label for="username">Username</label>
        <input v-model="userToLogin.username" type="text" name="username" />
        <label for="password">Password</label>
        <input v-model="userToLogin.password" type="password" name="password" />
        <button>
            <span>Login</span>
        </button>
    </form>
</template>

<script setup>
    import { ref } from 'vue'
    import authService from '../service/AuthService.js'
    import router from '../router.js'
    import user from '../model/User.js'
    const userToLogin = ref(new user(null,null))
    function login() {
        authService.login(userToLogin.value);
        router.push('/dashboard');
    }
</script>