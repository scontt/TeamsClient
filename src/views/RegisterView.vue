<template>
  <div class="wrapper">
        <main class="main">
            <div class="register">
                <h2 class="reg-label">Регистрация</h2>
                <form class="reg-form">
                    <div class="input-field">
                        <label>Логин</label>
                        <input type="text" v-model="username" class="input_username">
                    </div>
                    <div class="input-field">
                        <label>Номер телефона</label>
                        <input type="text" v-model="phoneNumber" class="input_phone-number">
                    </div>
                    <div class="input-field">
                        <label>Пароль</label>
                        <input type="password" v-model="password" class="input_password">
                    </div>
                    <div class="input-field">
                        <label>Подтверждение пароля</label>
                        <input type="password" class="input_password">
                    </div>
                    <div class="input-field">
                        <label>E-mail</label>
                        <input type="text" v-model="email" class="input_phone-number">
                    </div>
                    <button type="button" @click="regUser" class="btn">Зарегистрироваться</button>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import UserService from '../services/user-service.js'
import router from '@/router';

const service = new UserService();

export default {
    data() {
        return {
            username: '',
            password: '',
            phoneNumber: '',
            email: ''
        }
    },
    methods: {
        async regUser() {
            const body = JSON.stringify({
                    username: this.username,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    password: this.password
                });
            const response = await service.registerUser(body);

            if (response.ok === true) {
                router.go(-1);
            }
            else {
                alert('Ошибка!');
            }

        }
    }
}
</script>

<style src="../assets/styles/register.css" scoped>

</style>