import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import store from "./store/store";
import moment from "moment";
import Vue2Filters from "vue2-filters";
import { VueStars } from "vue-stars";
import VueYouTubeEmbed from "vue-youtube-embed";
import VueSocialSharing from "vue-social-sharing";

moment().format();
// Custom Filter
Vue.filter("getYear", function(dateData) {
  return moment(dateData).format("YYYY");
});
Vue.component("vue-stars", VueStars);

Vue.config.productionTip = false;
Vue.use(Vue2Filters);
Vue.use(VueYouTubeEmbed);
Vue.use(VueSocialSharing);
Vue.use(Argon);
// Vue.use(VueKinesis);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
