import { createStore } from 'vuex'
import { userModule } from './userModule';
import 'es6-promise/auto';

export default createStore({
    state: () => ({
        isLogged: false,
    }),
    getters: {
        getLoginStatus (state) {
            return state.isLogged;
        }
    },
    getters: {
        getLogged(state) {
            return state.isLogged;
        }
    },
    mutations: {
        setLogged(state) {
            state.isLogged = true;
        },
        setUnlogged(state) {
            state.isLogged = false;
            localStorage.clear();
        }
    },
    actions: {
        userLogged({commit}) {
            commit('setLogged');
        },
        userUnlogged({commit}) {
            commit('setUnlogged');
        }
    },
    modules: {
        user: userModule
    }
})
    