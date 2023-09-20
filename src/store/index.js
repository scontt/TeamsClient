import { createApp } from 'vue'
import { createStore } from 'vuex'
import 'es6-promise/auto';

export default createStore({
    state: {
        isLoggedIn: false
    },
    mutations: {
        logged (state) {
            state.isLoggedIn = true
        },
        logout (state) {
            state.isLoggedIn = false
        }
    },
    getters: {
        isUserLogged (state) {
            return state.isLoggedIn
        }
    },
    actions () {

    },
    modules () {

    }
})
    