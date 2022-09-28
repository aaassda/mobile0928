import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import lavout from "@/views/layout/LayOut.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: lavout,
    redirect:{name:"homeson"},
    children:[
      {
        path: "/home",
        name: "homeson",
        component:import("@/views/HomeView.vue"),
      },
    ]
  },
  {
    path: "/fx",
    name: "fx",
    component:lavout,
    redirect:{name:"fxson"},
    children:[
      {
        path: "/fxson",
        name: "fxson",
        component:import("@/views/FenXiao.vue"),
      },
    ]
  },
  {
    path: "/cart",
    name: "fcartx",
    component:lavout,
    redirect:{name:"cartson"},
    children:[
      {
        path: "/cartson",
        name: "cartson",
        component:import("@/views/MyCart.vue"),
      },
    ]
  },
  {
    path: "/my",
    name: "my",
    component:lavout,
    redirect:{name:"myson"},
    children:[
      {
        path: "/myson",
        name: "myson",
        component:import("@/views/MiNi.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
