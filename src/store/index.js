import { createStore } from 'vuex'
import 'es6-promise/auto';

export default createStore({
    state: {
        isLoggedIn: false,
        groups: []
    },
    mutations: {
        logged (state) {
            state.isLoggedIn = true
        },
        logout (state) {
            state.isLoggedIn = false
        },
        fillGroups (state, list) {
            state.groups = list
        },
    },
    getters: {
        isUserLogged (state) {
            return state.isLoggedIn
        },
        getGroups (state) {
            return state.groups
        }
    },
    actions () {
        
    },
    modules () {
        
    }
})
    