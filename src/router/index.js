import Vue from "vue";
import Router from "vue-router";
import Welcome from "../views/Welcome.vue";
import Location from "../views/Location.vue";
import Invitations from "../views/Invitations.vue";
import Accommodation from "../views/Accommodation.vue";
import LocalKnowledge from "../views/LocalKnowledge.vue";
import Itinerary from "../views/Itinerary.vue";
import Faq from "../views/Faq.vue";
import Utility from "../views/Utility.vue";


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
      component: Location
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: Invitations
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
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq,
    },
    {
      path: "/utility",
      name: "utility",
      component: Utility
    }
  ]
});
