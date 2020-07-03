import Vue from "vue";
import Vuex from "vuex";
import Buildings from "./modules/buildings";
import RefineRates from "./modules/refinerates";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    bld: Buildings,
    ref: RefineRates
  }
});
