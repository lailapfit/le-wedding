import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Location from "./views/Location.vue";
import Rsvp from "./views/Rsvp.vue";
import Accommodation from "./views/Accommodation.vue";
import LocalKnowledge from "./views/LocalKnowledge.vue";
import Itinerary from "./views/Itinerary";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/location",
      name: "location",
      component: Location
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () =>
       // import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: Rsvp,
    },
    {
      path: "/accommodation",
      name: "accommodation",
      component: Accommodation
    },
    {
      path: "/localknowledge",
      name: "localknowledge",
      component: LocalKnowledge,
    },
    {
      path: "/itinerary",
      name: "itinerary",
      component: Itinerary
    }
  ]
});
