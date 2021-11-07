import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eur: null,
    gbp: null,
    usd: null,
    chf: null,
  },
  mutations: {
    saveRate(state, { selectedCur, savedRate }) {
      state[selectedCur] = savedRate;
    },
  },
});
