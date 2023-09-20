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
                const data = await response.json();
                sessionStorage.setItem(tokenKey, data.access_token);
            }
            else {
                console.log('Status: ', response.status);
            }
        }
    }
}
</script>

<style src="../assets/styles/login.css" scoped>

</style>