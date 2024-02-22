import "./assets/css/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { createWebHistory } from "vue-router";
import { IMaskDirective } from "vue-imask"; //импорт директивы
import App from "./App.vue";
import router from "./router";
import { createHead } from '@unhead/vue';


const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app.directive("imask", IMaskDirective); //импорт директивы
app.use(pinia);
app.use(router);
app.use(head);
app.use(createWebHistory());
app.mount("#app");
