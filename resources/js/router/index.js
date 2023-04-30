import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Contacts from "../views/Contacts.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/contact",
    name: "contact",
    component: Contacts
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
