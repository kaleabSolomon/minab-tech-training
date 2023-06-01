import { createRouter, createWebHistory } from "vue-router";
import Body from "../components/Body.vue";
import CountryDetail from "../components/CountryDetail.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => Body,
    },
    {
      path: "/country/:code",
      name: "country",
      component: () => CountryDetail,
    },
  ],
});

export default router;
