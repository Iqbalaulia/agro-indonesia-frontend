import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Detail from "./views/Detail.vue";
import Categories from "./views/Categories.vue";
import ShoppingCart from "./views/ShoppingCart.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/category",
      name: "category",
      component: Categories,
    },
    {
      path: "/cart",
      name: "cart",
      component: ShoppingCart,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
