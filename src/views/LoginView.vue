<template>
    <div class="wrapper">
        <main class="main">
            <div class="login">
                <h2 class="reg-label">Регистрация</h2>
                <form class="reg-form">
                    <div class="input-field">
                        <label>Логин</label>
                        <input type="text" v-model="username" class="input_username">
                    </div>
                    <div class="input-field">
                        <label>Пароль</label>
                        <input type="password" v-model="password" class="input_password">
                    </div>
                    <button type="button" @click="loginUser" class="btn">Войти</button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import router from '@/router';
import store from '@/store';
import authHeader from '@/services/auth-header';

export default {
    name: 'Login',
    data() {

        return {

        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        async loginUser() {
            const response = await fetch('http://localhost:5282/api/User/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            });
    
            if (response.ok === true) {
                console.log(response);
                const data = await response.json();
                console.log(data.access_token);
                localStorage.setItem('user', JSON.stringify({
                    username: data.username,
                    access_token: data.access_token
                }));
            }
            else {
                console.log('Status: ', response.status);
            }
            let localUser = JSON.parse(localStorage.getItem('user'));
            const user = await fetch('http://localhost:5282/api/User/getbyname?username=' + 
            localUser.username, {
                method: 'GET'
            });
            const userJson = await user.json();
            localStorage.setItem('userId', userJson.id);
            store.commit('logged');
            const groups = await fetch('http://localhost:5282/api/Group/usergroups?userId=' + 
            localStorage.getItem('userId'), {
                method: 'GET'
            });
            let groupsJs = await groups.json();
            localStorage.setItem('groups', groupsJs);
            router.push('/');
        }
    }
}
</script>

<style src="../assets/styles/login.css" scoped>

</style>