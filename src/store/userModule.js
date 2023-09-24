import authHeader from "@/services/auth-header";
import store from ".";


export const userModule = {
    state: () => ({
        groups: [],
    }),
    getters: {
        getGroups(state) {
            return state.groups;
        }
    },
    mutations: {
        login({state}, {_user, _access_token}) {
            store.dispatch('userLogged');
            localStorage.setItem('userId', _user);
            localStorage.setItem('access_token', _access_token);
        },
        setGroups(state, _groups) {
            state.groups = _groups;
        },
        logoff(state) {
            state.isLogged = false;
            localStorage.clear();
        },
    },
    actions: {
        async userLogin({state, commit}, _user) {
            commit('login', _user);
        },
        async addGroup({dispatch}, _group) {
            try {
                const bearer = authHeader();
                const response = await fetch('http://localhost:5282/api/Group/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': bearer
                    },
                    body: _group
                });
            }
            catch (e) {
                console.log(e);
            }
            finally {
                dispatch('refreshGroupsList');
            }
        },
        async refreshGroupsList({state, commit}) {
            try {
                const response = await fetch('http://localhost:5282/api/Group/usergroups?userId=' + localStorage.getItem('userId'), {
                    method: 'GET',
                });
                let _groups = await response.json();
                commit('setGroups', _groups);
            }
            catch (e) {
                console.error(e);
            }
        },
        async userLogoff({commit}) {
            localStorage.clear();
            store.dispatch('userUnlogged');
        }
    },

    namespaced: true
}