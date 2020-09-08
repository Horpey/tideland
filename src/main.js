import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import "./registerServiceWorker";
import store from "./store/store";
import Vue2Filters from "vue2-filters";
// import VueKinesis from "vue-kinesis";

Vue.config.productionTip = false;
Vue.use(Vue2Filters);
Vue.use(Argon);
// Vue.use(VueKinesis);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
