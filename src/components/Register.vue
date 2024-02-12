<template>
    <div class="text-center w-50 m-auto">
        <form class="form-signup" @submit.prevent="submitHandler">
            <img class="mb-4 mt-3 logo-img" :src="logo" alt="logo" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
            <Input 
                :label="'Name'" 
                :type="'text'" 
                :placeholder="'Your Name'" 
                :id="'inputName'" 
                :rules="{ required: true, minlength: 2, autofocus: true }" 
                v-model="username"
                />

            <Input 
                :label="'Email'" 
                :type="'email'" 
                :placeholder="'Your Email'" 
                :id="'inputEmail'" 
                :rules="{ required: true }" 
                v-model="email"
                />

            <Input 
                :label="'Password'" 
                :type="'password'" 
                :placeholder="'Your Password'" 
                :id="'inputPassword'" 
                :rules="{ required: true, minlength: 8 }" 
                v-model="password"
                />
            
            <Button type="submit" :click="submitHandler" :disabled="isLoading" >  Sign Up</Button>
        </form>
    </div>
</template>

<script>
import { logo } from '../constants';
export default {
    name: 'Register',
    data() {
        return {
            logo,
            username: '',
			email: '',
			password: '',
        }
    },
    computed:{
        isLoading(){
            return this.$store.state.auth.isLoading;
        },
    },
    methods: {
        submitHandler(){
            this.$store.commit('setLoading', true);
            const data = {
                username: this.username,
				email: this.email,
				password: this.password,
            }
            this.$store.
                dispatch('register', data)
                .then(user => {
					console.log('USER', user)
					this.$router.push({name: 'home'})
				})
				.catch(err => console.log('ERROR', err))
        },
    },
   
}
</script>

<style>
.form-signup {
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.logo-img {
    border-radius: 50%; /* Makes the logo rounded */
}

h1 {
    font-size: 24px; /* Larger font size for the heading */
    color: #495057; /* Dark grey color for the text */
}

.form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px; /* Larger font size for input */
    border-radius: 5px; /* Rounded borders for input fields */
    border: 1px solid #ced4da; /* Adds a border to the input fields */
    margin-bottom: 10px; /* Adds spacing between input fields */
}

.btn-block {
    padding: 10px;
    font-size: 18px; /* Larger font size for button */
    border-radius: 5px; /* Rounded borders for the button */
    background-color: #007bff; /* Bootstrap primary color */
    border-color: #007bff;
    margin-top: 10px; /* Adds spacing above the button */
}

.btn-block:hover {
    background-color: #0056b3; /* Darker shade for hover state */
    border-color: #0056b3;
}
</style>
