import './assets/css/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { createWebHistory } from 'vue-router';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(createWebHistory());

app.mount('#app')
