import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buildings: [
      {
        id: "bRefinery",
        name: "Basic Refinery",
        description: "Lorem ipsum",
        icon: "placeholder.svg",
        dimension: [1, 2, 1],
        power: ["1 kW", "330 kW"],
        components: []
      },
      {
        id: "bAssembler",
        name: "Basic Assembler",
        description: "Lorem ipsum",
        icon: "placeholder.svg",
        dimension: [],
        power: "0W",
        components: []
      }
    ]
  },
  getters: {
    getBuildingById: (state) => (id: string): object | undefined => {
      return state.buildings.find(building => building.id === id);
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
