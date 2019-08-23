import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import cardsModal from "@/views/cardsModal";
import modifyCards from "@/views/modifyCards";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/chooseCards",
      name: "chooseCards",
      component: cardsModal
    },
    {
      path: "/modifyCards",
      name: "modifyCards",
      component: modifyCards
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
