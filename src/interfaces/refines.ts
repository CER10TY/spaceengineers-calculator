export interface Material {
  [material: string]: {
    processTime: number;
    efficiency: number;
    consumption: number;
    production: number;
    productionTime: number;
    output: (string | number)[][];
  };
}

export interface Refines {
  [building: string]: Material;
}

export interface OutputInfo {
  material: string;
  inputRate: string;
  outputRate: string;
  output: (string | number)[][];
  outputEfficiency: (string | number)[][];
  outputTime: string;
}
