import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Buildings from "../views/Buildings.vue";
import SingleBuilding from "../views/SingleBuilding.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      breadcrumb: "Home"
    }
  },
  {
    path: "/buildings",
    name: "buildings",
    component: Buildings,
    meta: {
      breadcrumb: "Buildings"
    }
  },
  {
    path: "/buildings/:id",
    name: "singleBuilding",
    component: SingleBuilding,
    meta: {
      breadcrumb: (building: { name: string }) => building.name
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
