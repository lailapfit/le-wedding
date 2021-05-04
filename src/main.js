import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import VShowSlide from "v-show-slide";
import { BootstrapVue } from "bootstrap-vue";
import VModal from "vue-js-modal";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_APIKEY,
    libraries: "places"
  }
});

Vue.use(VShowSlide);
Vue.use(BootstrapVue);
Vue.use(VModal,{ dynamicDefault: { draggable: true, resizable: true } });

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");