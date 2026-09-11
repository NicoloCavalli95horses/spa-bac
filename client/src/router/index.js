//===========================
// Import
//===========================
import { createRouter, createWebHistory } from "vue-router";

//===========================
// Consts
//===========================
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: () => import("../views/homepage.vue"),
    },
    {
      path: "/admin-page",
      name: "admin",
      component: () => import("../components/adminPage.vue"),
    },
    {
      path: "/:id",
      name: "detail",
      component: () => import("../components/detail.vue"),
    },
  ],
});

export default router;