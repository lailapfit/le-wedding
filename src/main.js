import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB-8bUhZ0I161Es_iKy2Wc1pPUn5f7u_Zk',
    libraries: 'places'
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
