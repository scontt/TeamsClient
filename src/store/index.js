import { createStore } from 'vuex'
import 'es6-promise/auto';
import { auth } from "./auth.module";

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
        auth
    }
})
    