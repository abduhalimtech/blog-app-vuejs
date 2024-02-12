<template>
    <div class="navbar-custom d-flex justify-content-between align-items-center py-2 mb-3 bg-white border-bottom shadow-sm">
        <a  class="navbar-brand" @click="toHomeHandler">
            <img :src="logo" alt="Company logo" class="logo-size">
        </a>
        <nav class="nav">
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Enterprise</a>
            <a class="nav-item nav-link" href="#">Support</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
        </nav>
        <div class="auth-buttons">
            <RouterLink class="btn-signin mr-2" :to="{name: 'login'}">Sign In</RouterLink>
            <RouterLink class="btn-custom" :to="{name: 'register'}">Sign Up</RouterLink>
            <!-- <a class="btn-signin mr-2"><RouterLink :to="{name: 'login'}">Sign In</RouterLink></a>
            <a class="btn-custom"><RouterLink :to="{name: 'register'}">Sign Up</RouterLink></a> -->
        </div>
    </div>
</template>

<script>
import { logo } from '../constants';
export default {
    name: 'Navbar',
    data() {
        return {
            logo,
        }
    },
    methods: {
        toHomeHandler(){
            return this.$router.push({name: 'home'})
        },
    },
}
</script>

<style>
.navbar-custom {
    font-family: 'Nunito', sans-serif;
    color: #333;
}

.navbar-brand {
    display: flex;
    align-items: center;
}

.logo-size {
    height: 70px; /* Adjust logo size */
    cursor: pointer;
}

.nav {
    align-items: center;
}

.nav-item {
    margin: 0 10px;
    transition: color 0.3s ease-in-out;
}

.nav-link {
    color: #555;
    font-size: 1rem;
    padding: 5px 0;
}

.nav-link:hover, .nav-link:focus {
    color: #1a73e8;
    text-decoration: none;
}

.auth-buttons {
    display: flex;
    align-items: center;
}

.btn-signin {
    color: #1a73e8;
    background-color: transparent;
    padding: 10px 20px;
    border: 1px solid #1a73e8;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
}

.btn-signin:hover, .btn-signin:focus {
    background-color: #1a73e8;
    color: #fff;
    text-decoration: none;
}

.btn-custom {
    color: #fff;
    background-color: #1a73e8;
    padding: 10px 20px;
    margin-left: 10px; /* Add spacing between buttons */
    border-radius: 20px;
    transition: all 0.2s ease-in-out;
}

.btn-custom:hover, .btn-custom:focus {
    background-color: #0f5ba7;
    color: #fff;
    text-decoration: none;
}
</style>
