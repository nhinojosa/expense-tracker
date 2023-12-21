import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'


import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css';

import './assets/style.css'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/expense-tracker/', name: 'Home', component: App },
    ]
});


import App from './App.vue'
const app = createApp(App)
app.use(router);
app.use(Toast);
app.mount('#app')

