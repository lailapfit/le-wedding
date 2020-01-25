import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import VShowSlide from 'v-show-slide';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-8bUhZ0I161Es_iKy2Wc1pPUn5f7u_Zk",
    libraries: "places"
  }
});

Vue.use(VShowSlide);


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
// AIzaSyC2sNF0wHT7BW3vKvluucmtqFBIFETtC8c