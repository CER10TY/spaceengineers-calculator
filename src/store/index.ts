import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buildings: [
      {
        id: "bRefinery",
        name: "Basic Refinery",
        description: "The Basic Refinery is a specialized version of the Icon Block Empty Refinery block. It efficiently smelts iron, nickel and cobalt ores.",
        icon: "placeholder.svg",
        dimension: [1, 2, 1],
        power: ["1 kW", "330 kW"],
        components: [
          { name: "Steel Plate", amount: 100 },
          { name: "Construction Component", amount: 20 },
          { name: "Motor", amount: 10 },
          { name: "Computer", amount: 10 }
        ]
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
