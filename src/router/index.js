import Vue from "vue";
import Router from "vue-router";
import Welcome from "../views/Welcome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "",
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/location",
      name: "location",
      component: () => import('../views/Location.vue')
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: () => import('../views/Invitations.vue')
    },
    {
      path: "/accommodation",
      name: "accommodation",
      component: () => import('../views/Accommodation.vue')
    },
    {
      path: "/localknowledge",
      name: "localknowledge",
      component: () => import('../views/LocalKnowledge.vue')
    },
    {
      path: "/itinerary",
      name: "itinerary",
      component: () => import('../views/Itinerary.vue')
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import('../views/Faq.vue')
    },
    {
      path: "/utility",
      name: "utility",
      component: () => import('../views/Utility.vue')
    }
  ]
});
