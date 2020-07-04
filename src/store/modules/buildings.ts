import { Module, VuexModule } from "vuex-module-decorators";

@Module
export default class Buildings extends VuexModule {
  buildings: Array<Record<string, any>> = [
    {
      id: "bRefinery",
      name: "Basic Refinery",
      type: "ore-processing",
      description:
        "The Basic Refinery is a specialized version of the Refinery block. \
            It efficiently smelts iron, nickel and cobalt ores.",
      icon: "placeholder.svg",
      dimension: [1, 2, 1],
      power: [1, 330],
      grids: [true, false], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 100 },
        { name: "Construction Component", amountLg: 20 },
        { name: "Motor", amountLg: 10 },
        { name: "Computer", amountLg: 10 }
      ]
    },
    {
      id: "bAssembler",
      name: "Basic Assembler",
      type: "assembly",
      description:
        "The Basic Assembler is ideal for usage with a Survival Kit. \
            It is a smaller version of the Assembler with no conveyor connections.",
      icon: "placeholder.svg",
      dimension: [1, 1, 1],
      power: [1, 280],
      grids: [true, false], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 80 },
        { name: "Construction Component", amountLg: 40 },
        { name: "Motor", amountLg: 10 },
        { name: "Display", amountLg: 4 },
        { name: "Computer", amountLg: 80 }
      ]
    },
    {
      id: "refinery",
      name: "Refinery",
      type: "ore-processing",
      description:
        "The Refinery is able to process all ores in the game. \
            It has 8 upgrade slots for Upgrade Modules and 3 conveyor slots.",
      icon: "placeholder.svg",
      dimension: [2, 2, 4],
      power: [1, 560],
      grids: [true, false], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 1200 },
        { name: "Construction Component", amountLg: 40 },
        { name: "Large Steel Tube", amountLg: 20 },
        { name: "Motor", amountLg: 16 },
        { name: "Metal Grid", amountLg: 20 },
        { name: "Computer", amountLg: 20 }
      ]
    },
    {
      id: "assembler",
      name: "Assembler",
      type: "assembly",
      description:
        "The Assembler is able to produce all components found in the game. \
            It has space for 2 Upgrade Modules and can be connected to the conveyor system.",
      icon: "placeholder.svg",
      dimension: [1, 1, 2],
      power: [1, 560],
      grids: [true, false], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 140 },
        { name: "Construction Component", amountLg: 80 },
        { name: "Motor", amountLg: 20 },
        { name: "Display", amountLg: 10 },
        { name: "Metal Grid", amountLg: 10 },
        { name: "Computer", amountLg: 160 }
      ]
    },
    {
      id: "battery",
      name: "Battery",
      type: "energy",
      description:
        "The Battery saves energy produced by Wind Turbines, Solar Panels and Reactors for later use.",
      icon: "placeholder.svg",
      dimension: [1, 1, 1],
      capacity: [3],
      powerOut: [12, "MWh"],
      grids: [true, true], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 80, amountSm: 25 },
        { name: "Construction Component", amountLg: 30, amountSm: 5 },
        { name: "Power Cell", amountLg: 80, amountSm: 20 },
        { name: "Computer", amountLg: 25, amountSm: 2 }
      ]
    },
    {
      id: "solarpanel",
      name: "Solar Panel",
      type: "energy",
      description: "The Solar Panel uses natural sunlight to produce power.",
      icon: "placeholder.svg",
      dimension: [1, 1, 1],
      powerOut: [120, "kWh"],
      grids: [true, true], // Large, small grid available
      components: [
        { name: "Steel Plate", amountLg: 4, amountSm: 2 },
        { name: "Construction Component", amountLg: 14, amountSm: 2 },
        { name: "Girder", amountLg: 12, amountSm: 4 },
        { name: "Computer", amountLg: 4, amountSm: 1 },
        { name: "Solar Cell", amountLg: 32, amountSm: 8 },
        { name: "Bulletproof Glass", amountLg: 4, amountSm: 1 }
      ]
    },
    {
      id: "windturbine",
      name: "Wind Turbine",
      type: "energy",
      description: "It's a wind turbine. No explanation needed.",
      icon: "placeholder.svg",
      dimension: [3, 3, 3],
      powerOut: [370, "kWh"],
      grids: [true, false], // Large, small grid available
      components: [
        { name: "Interior Plate", amountLg: 40 },
        { name: "Motor", amountLg: 8 },
        { name: "Construction Component", amountLg: 20 },
        { name: "Girder", amountLg: 24 },
        { name: "Computer", amountLg: 2 }
      ]
    }
  ];
  get getBuildingById() {
    return (id: string) => {
      return this.buildings.find(building => building.id === id);
    };
  }
  get getBuildingsByType() {
    return (type: string) => {
      return this.buildings.filter(building => building.type === type);
    };
  }
}
