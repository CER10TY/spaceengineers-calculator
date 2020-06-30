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
      },
      {
        id: "refinery",
        name: "Refinery",
        description: "The Refinery is able to process all ores in the game. \
        It has 8 upgrade slots for Upgrade Modules and 3 conveyor slots.",
        icon: "placeholder.svg",
        dimension: [2, 2, 4],
        power: [1, 560],
        components: [
          { name: "Steel Plate", amount: 1200 },
          { name: "Construction Component", amount: 40 },
          { name: "Large Steel Tube", amount: 20 },
          { name: "Motor", amount: 16 },
          { name: "Metal Grid", amount: 20 },
          { name: "Computer", amount: 20 }
        ]
      },
      {
        id: "assembler",
        name: "Assembler",
        description: "The Assembler is able to produce all components found in the game. \
        It has space for 2 Upgrade Modules and can be connected to the conveyor system.",
        icon: "placeholder.svg",
        dimension: [1, 1, 2],
        power: [1, 560],
        components: [
          { name: "Steel Plate", amount: 140 },
          { name: "Construction Component", amount: 80 },
          { name: "Motor", amount: 20 },
          { name: "Display", amount: 10 },
          { name: "Metal Grid", amount: 10 },
          { name: "Computer", amount: 160 }
        ]
      },
      {
        id: "battery",
        name: "Battery",
        description: "The Battery saves energy produced by Wind Turbines, Solar Panels and Reactors for later use.",
        icon: "placeholder.svg",
        dimension: [1, 1, 1],
        capacity: [3],
        components: [
          { name: "Steel Plate", amount: 80 },
          { name: "Construction Component", amount: 30 },
          { name: "Power Cell", amount: 80 },
          { name: "Computer", amount: 25 }
        ]
      },
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
