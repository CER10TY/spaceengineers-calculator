import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Buildings from "../views/Buildings.vue";
import SingleBuilding from "../views/SingleBuilding.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/buildings",
    name: "Buildings",
    component: Buildings
  },
  {
    path: "/building/:id",
    name: "SingleBuilding",
    component: SingleBuilding
  }
];

const router = new VueRouter({
  routes
});

export default router;
