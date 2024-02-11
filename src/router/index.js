import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Lymos" },
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
      path: "/portfolio/premium-pipe",
      name: "premium-pipe",
      component: () => import("@/views/PremiumPipe.vue"),
      meta: { title: "Premium-pipe" },
    },
    {
      path: "/services/development",
      name: "development",
      component: () => import("@/views/DevelopmentView.vue"),
      meta: { title: "Development" },
    },
    {
      path: "/services/mvp",
      name: "mvp",
      component: () => import("@/views/MvpView.vue"),
      meta: { title: "Mvp" },
    },
    {
      path: "/services/ii",
      name: "ii",
      component: () => import("@/views/IiView.vue"),
      meta: { title: "Ii" },
    },
    {
      path: "/services/modification",
      name: "modification",
      component: () => import("@/views/ModificationView.vue"),
      meta: { title: "Modification" },
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
