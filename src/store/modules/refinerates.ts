import { Module, VuexModule } from "vuex-module-decorators";

@Module
export default class RefineRates extends VuexModule {
  refineRates = {
    bRefinery: {
      cobalt: {
        processTime: 4.615, // s/kg
        efficiency: 21,
        consumption: 0.217, // kg/s
        production: 0.046,
        productionTime: 21.978 // s/kg
      },
      iron: {
        processTime: 0.077, // s/kg
        efficiency: 49,
        consumption: 13, // kg/s
        production: 6.37,
        productionTime: 0.157 // s/kg
      },
      magnesium: {
        processTime: 0.769, // s/kg
        efficiency: 0.49,
        consumption: 1.3, // kg/s
        production: 0.006,
        productionTime: 156.986 // s/kg
      },
      nickel: {
        processTime: 1.015, // s/kg
        efficiency: 28,
        consumption: 0.985, // kg/s
        production: 0.276,
        productionTime: 3.626 // s/kg
      },
      scrap: {
        processTime: 0.062, // s/kg
        efficiency: 56,
        consumption: 16.25, // kg/s
        production: 9.1,
        productionTime: 0.11 // s/kg
      },
      silicon: {
        processTime: 0.923, // s/kg
        efficiency: 49,
        consumption: 1.083, // kg/s
        production: 0.531,
        productionTime: 1.884 // s/kg
      },
      stone: {
        processTime: 0.015, // s/kg
        efficiency: 3.528,
        consumption: 65, // kg/s
        production: 2.293,
        productionTime: 0.436 // s/kg
      }
    },
    refinery: {}
  };
}
