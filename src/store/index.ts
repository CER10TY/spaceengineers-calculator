import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buildings: [
      {
        id: "bRefinery",
        name: "Basic Refinery",
        description: "The Basic Refinery is a specialized version of the Icon Block Empty Refinery block. \
        It efficiently smelts iron, nickel and cobalt ores.",
        icon: "placeholder.svg",
        dimension: [1, 2, 1],
        power: [1, 330],
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
        description: "The Basic Assembler is ideal for usage with a Survival Kit. \
        It is a smaller version of the Assembler with no conveyor connections.",
        icon: "placeholder.svg",
        dimension: [1, 1, 1],
        power: [1, 280],
        components: [
          { name: "Steel Plate", amount: 80 },
          { name: "Construction Component", amount: 40 },
          { name: "Motor", amount: 10 },
          { name: "Display", amount: 4 },
          { name: "Computer", amount: 80 }
        ]
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
