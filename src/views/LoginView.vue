<template>
    <div class="wrapper">
        <main class="main">
            <div class="login">
                <h2 class="reg-label">Авторизация</h2>
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
                <span class="reg-advice">Нет аккаунта? 
                    <router-link 
                    to="/register"
                    class="reg-link">
                        Зарегистрируйтесь
                    </router-link>
                </span>
                <div class="loginError" v-if="this.loginError">
                    <span class="error">Неверный логин или пароль</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import router from '@/router';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            loginError: false
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        ...mapActions({
            signIn: 'user/userLogin'
        }),
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
                this.loginError = false;
                const data = await response.json();
                let user = JSON.parse(data.user);
                this.signIn({
                    _user: user.Id, 
                    _access_token: data.access_token
                });
                router.replace('/');
            }
            else {
                console.error('Status: ', response.status);
                this.loginError = true;
            }
        }
    }
}
</script>

<style src="../assets/styles/login.css" scoped>

</style>