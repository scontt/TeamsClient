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
                    <button type="button" @click="loginUser" class="btn">Зарегистрироваться</button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import router from '@/router';
import store from '@/store'

// import * as query from '@/api'

export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async loginUser() {
            const response = await fetch('http://localhost:5282/api/User/login', {
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
                sessionStorage.setItem('tokenKey', data.access_token);
                sessionStorage.setItem('username', data.username);
            }
            else {
                console.log('Status: ', response.status);
            }
            const user = await fetch('http://localhost:5282/api/User/getbyname?username=' + sessionStorage.getItem('username'), {
                method: 'GET',
                header: {
                    'Content-Type': 'application/json'
                }
            });
            const userJson = await user.json();
            localStorage.setItem('userId', userJson.id);
            store.commit('logged');
            router.push('/');
        }
    }
}
</script>

<style src="../assets/styles/login.css" scoped>

</style>