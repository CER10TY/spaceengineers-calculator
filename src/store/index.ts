import Vue from "vue";
import Vuex from "vuex";
import Buildings from "./modules/buildings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    bld: Buildings
  }
});
