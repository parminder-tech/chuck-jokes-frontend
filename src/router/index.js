import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ViewJokes from "../views/ViewJokes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/view/:id",
    name: "ViewJokes",
    component: ViewJokes,
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
