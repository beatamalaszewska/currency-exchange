import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store/store";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

import Add from "./components/add.vue";
import Converter from "./components/converter.vue";
import Table from "./components/rate_table.vue";

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/add", component: Add },
    { path: "/converter", component: Converter },
    { path: "/rate_table", component: Table },
  ],
});

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
