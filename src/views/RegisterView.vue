<template>
  <div class="wrapper">
        <main class="main">
            <div class="register">
                <h2 class="reg-label">Регистрация</h2>
                <form class="reg-form">
                    <div class="input-field">
                        <label>Логин</label>
                        <input type="text" class="input_username">
                    </div>
                    <div class="input-field">
                        <label>Номер телефона</label>
                        <input type="text" class="input_phone-number">
                    </div>
                    <div class="input-field">
                        <label>Пароль</label>
                        <input type="password" class="input_password">
                    </div>
                    <div class="input-field">
                        <label>Подтверждение пароля</label>
                        <input type="password" class="input_password">
                    </div>
                    <button type="submit" class="btn">Зарегистрироваться</button>
                </form>
            </div>
        </main>
    </div>
</template>

<script></script>

<style>
:root {
    --main-bg-color: #EDEDEDFF;
    --main-border-color: #ADB5BD;
    --main-font-family: 'Jost', sans-serif; 
}

html {
    box-sizing: border-box;
}

*, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
    font-family: var(--main-font-family);
}

#app {
  height: inherit;
}

.wrapper {
    height: 100%;
    width: 100%;
}

.main {
    height: inherit;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
}

.register {
    display: flex;
    flex-direction: column;
    min-width: 20%;
    min-height: 450px;
    background-color: var(--main-bg-color);
    border: 1px solid var(--main-border-color);
    border-radius: 20px;
}

.reg-label {
    margin: 20px auto 0;
    font-size: 26px;
}

input {
    min-width: 200px;
    min-height: 27px;
    border: 1px solid var(--main-border-color);
    border-radius: 7px;
    padding-left: 3px;
}

.reg-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 22px;
}

.input-field {
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 0;
    gap: 5px;
    font-size: 19px;
}

.btn {
    margin-top: 30px;
    min-height: 27px;
    min-width: 200px;
    border: 1px solid var(--main-border-color);
    border-radius: 7px;
    background-color: #fff;
    font-family: var(--main-font-family);
    font-size: 16px;
}

.btn:hover {
    background-color: #ebebeb;
}
</style>