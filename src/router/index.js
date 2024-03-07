import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import GalleryView from "../views/GalleryView.vue";
import MemberView from "../views/MemberView.vue";
import JadwalView from "../views/JadwalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "About",
      component: AboutView,
    },
    {
      path: "/gallery",
      name: "Gallery",
      component: GalleryView,
    },
    {
      path: "/members",
      name: "Members",
      component: MemberView,
    },
    {
      path: "/jadwal",
      name: "Jadwal",
      component: JadwalView,
    },
  ],
});

export default router;

