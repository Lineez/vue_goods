import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "Home-page",
        component: HomePage,
    },
    {
        path: "/about",
        name: "About-page",
        component: () => import("@/pages/AboutPage.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
