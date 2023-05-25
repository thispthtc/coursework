import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Order from "../views/Order.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/menu",
        name: "menu",
        component: Menu,
    },
    {
        path: "/order",
        name: "order",
        component: Order,
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/admin",
        name: "admin",
        component: Admin
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
