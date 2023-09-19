import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/styles/main.css'

// const api = axios.create({
//     baseURL: 'http://localhost:5282/'
// })

// const axiosPlgn = {
//     install(Vue){
//         Vue.prototype.$api = api;
//     }
// }

// Vue.use(axiosPlgn)

const app = createApp(App)
app.use(router)
app.mount('#app')