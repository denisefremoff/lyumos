import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Lyumos" },
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/ServicesView.vue"),
      meta: { title: "Services" },
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("@/views/ContactsViews.vue"),
      meta: { title: "Contacts" },
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("@/views/PortfolioView.vue"),
      meta: { title: "Portfolio" },
    },
    {
      path: "/services/development",
      name: "development",
      component: () => import("@/views/DevelopmentView.vue"),
      meta: { title: "Development" },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;
