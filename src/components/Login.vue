<template>
    <div class="login">
        <div class="field">
            <p class="control">
                <input class="input" type="text" placeholder="Username" v-model="username">
            </p>
        </div>
        <div class="field">
            <p class="control">
                <input class="input" type="password" placeholder="Password" v-model="password">
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button" v-on:click="loginClicked">Login</button>
            </p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
            }
        },
        methods: {
            loginClicked: function (event) {
                console.log(this.username);
                console.log(this.password);
                axios.post('http://localhost:8000/api-token-auth/', {
                    username: this.username,
                    password: this.password
                    }
                ).then(response => {
                    console.log(response.data.token);
                    // Assuming success in every case. It's a demo; sue me.
                    localStorage.setItem('token', response.data.token);
                })
            }
        }
    }
</script>

<style scoped>

</style>