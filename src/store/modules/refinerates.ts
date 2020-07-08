import { Module, VuexModule } from "vuex-module-decorators";
import { Refines, Material } from "@/interfaces/refines.ts";

@Module
export default class RefineRates extends VuexModule {

  refineRates: Refines = {
    bRefinery: {
      Cobalt: {
        processTime: 4.615, // s/kg
        efficiency: 21,
        consumption: 0.217, // kg/s
        production: 0.046,
        productionTime: 21.978, // s/kg
        output: [
          ["Cobalt Ingot", 1] // Output, percentage
        ]
      },
      Iron: {
        processTime: 0.077, // s/kg
        efficiency: 49,
        consumption: 13, // kg/s
        production: 6.37,
        productionTime: 0.157, // s/kg
        output: [
          ["Iron Ingot", 1] // Output, percentage
        ]
      },
      Magnesium: {
        processTime: 0.769, // s/kg
        efficiency: 0.49,
        consumption: 1.3, // kg/s
        production: 0.006,
        productionTime: 156.986, // s/kg
        output: [["Magnesium Powder", 1]]
      },
      Nickel: {
        processTime: 1.015, // s/kg
        efficiency: 28,
        consumption: 0.985, // kg/s
        production: 0.276,
        productionTime: 3.626, // s/kg
        output: [["Nickel Ingot", 1]]
      },
      Scrap: {
        processTime: 0.062, // s/kg
        efficiency: 56,
        consumption: 16.25, // kg/s
        production: 9.1,
        productionTime: 0.11, // s/kg
        output: [["Iron Ingot", 1]]
      },
      Silicon: {
        processTime: 0.923, // s/kg
        efficiency: 49,
        consumption: 1.083, // kg/s
        production: 0.531,
        productionTime: 1.884, // s/kg
        output: [["Silicon Wafer", 1]]
      },
      Stone: {
        processTime: 0.015, // s/kg
        efficiency: 3.528,
        consumption: 65, // kg/s
        production: 2.293,
        productionTime: 0.436, // s/kg
        output: [
          ["Gravel", 0.03],
          ["Iron Ingot", 0.6422],
          ["Nickel Ingot", 0.0514],
          ["Silicon Wafer", 0.0856]
        ]
      }
    },
    refinery: {
      Cobalt: {
        processTime: 2.308, // s/kg
        efficiency: 30,
        consumption: 0.433, // kg/s
        production: 0.13,
        productionTime: 7.692, // s/kg
        output: [
          ["Cobalt Ingot", 1] // Output, percentage
        ]
      },
      Gold: {
        processTime: 0.308, // s/kg
        efficiency: 1,
        consumption: 3.25, // kg/s
        production: 0.033,
        productionTime: 30.769, // s/kg
        output: [
          ["Gold Ingot", 1] // Output, percentage
        ]
      },
      Iron: {
        processTime: 0.038, // s/kg
        efficiency: 70,
        consumption: 26, // kg/s
        production: 18.2,
        productionTime: 0.055, // s/kg
        output: [
          ["Iron Ingot", 1] // Output, percentage
        ]
      },
      Magnesium: {
        processTime: 0.385, // s/kg
        efficiency: 0.7,
        consumption: 2.6, // kg/s
        production: 0.018,
        productionTime: 54.945, // s/kg
        output: [
          ["Magnesium Powder", 1] // Output, percentage
        ]
      },
      Nickel: {
        processTime: 0.508, // s/kg
        efficiency: 40,
        consumption: 1.97, // kg/s
        production: 0.788,
        productionTime: 1.269, // s/kg
        output: [
          ["Nickel Ingot", 1] // Output, percentage
        ]
      },
      Platinum: {
        processTime: 2.308, // s/kg
        efficiency: 0.5,
        consumption: 0.433, // kg/s
        production: 0.002,
        productionTime: 461.538, // s/kg
        output: [
          ["Platinum Ingot", 1] // Output, percentage
        ]
      },
      Scrap: {
        processTime: 0.031, // s/kg
        efficiency: 80,
        consumption: 32.5, // kg/s
        production: 26,
        productionTime: 0.038, // s/kg
        output: [["Iron Ingot", 1]]
      },
      Silicon: {
        processTime: 0.462, // s/kg
        efficiency: 70,
        consumption: 2.167, // kg/s
        production: 1.517,
        productionTime: 0.659, // s/kg
        output: [
          ["Silicon Wafer", 1] // Output, percentage
        ]
      },
      Silver: {
        processTime: 0.769, // s/kg
        efficiency: 10,
        consumption: 1.3, // kg/s
        production: 0.13,
        productionTime: 7.692, // s/kg
        output: [
          ["Silver Ingot", 1] // Output, percentage
        ]
      },
      Stone: {
        processTime: 0.008, // s/kg
        efficiency: 5.04,
        consumption: 130, // kg/s
        production: 6.552,
        productionTime: 0.436, // s/kg
        output: [
          ["Gravel", 0.014],
          ["Iron Ingot", 0.03],
          ["Nickel Ingot", 0.24],
          ["Silicon Wafer", 0.4]
        ]
      },
      Uranium: {
        processTime: 3.077, // s/kg
        efficiency: 1,
        consumption: 0.325, // kg/s
        production: 0.003,
        productionTime: 307.692, // s/kg
        output: [
          ["Uranium Ingot", 1] // Output, percentage
        ]
      }
    }
  };

  get getRefineRateForBuilding() {
    return (building: string) => {
      let refineRate!: Material;

      Object.keys(this.refineRates).forEach(key => {
        if (building === key) {
          refineRate = this.refineRates[building.toString()];
        }
      });

      return refineRate;
    };
  }
}
