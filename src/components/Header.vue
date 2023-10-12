<template>
    <header class="header">
            <div class="header__container">
                <div class="header_inner">
                    <div class="header__menu">
                        <li class="menu-list">
                            <ul class="menu-list__item">
                                <router-link to="/" class="menu-list__item-a work">Группы</router-link>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Вакансии</a>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Поиск</a>
                            </ul>
                            <ul class="menu-list__item">
                                <a href="#" class="menu-list__item-a">Поддержка</a>
                            </ul>
                        </li>
                    </div>
                    <div class="auth-container">
                        <div class="login" v-if="!getLogged">
                            <router-link to="/register" class="auth-link">Зарегистрироваться</router-link>
                            <span> | </span>
                            <router-link to="/login" class="auth-link">Войти</router-link>
                        </div>
                        <div class="logout" v-else>
                            <router-link @click.native="userLogoff" class="auth-link" to="/">Выйти</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<style src="../assets/styles/header.css" scoped></style>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions({
            userLogoff: 'user/userLogoff'
        }),
    },
    computed: {
    ...mapState({
        isLogged: state => state.user.isLogged,
        groups: state => state.user.groups
    }),
    ...mapGetters({
        getLogged: 'getLogged'
    })
  }
}
</script>