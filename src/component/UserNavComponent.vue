<template>
    <nav>
        <li>
            <router-link to="/dashboard">Home</router-link>
        </li>
        <div v-if="!user">
            <li>
                <RouterLink to="/login">Login</RouterLink>
            </li> 
            <li>
                <RouterLink to="/register">Register</RouterLink>
            </li> 
        </div>
        <div v-if="user">
            <li>
                <a href @click.prevent="logout">Logout</a>
            </li> 
        </div>
    </nav>
</template>

<script setup>
    import { ref } from 'vue'
    const user = ref(false)
    function logout() {}
</script>