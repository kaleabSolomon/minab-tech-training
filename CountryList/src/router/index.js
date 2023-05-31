import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../components/AboutView.vue"),
    },
    {
      path: "/car/:id",
      name: "car",
      component: () => import("../components/CarView.vue"),
    },
  ],
});

export default router;
