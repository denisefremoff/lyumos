import "./assets/css/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { createWebHistory } from "vue-router";

import { IMaskDirective } from "vue-imask"; //импорт директивы

import piniaPersist from "pinia-plugin-persist";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPersist);

app.directive("imask", IMaskDirective); //импорт директивы

app.use(pinia);
app.use(router);

app.use(createWebHistory());

app.mount("#app");
