export interface Building {
    id: string;
    name?: string;
    type?: string;
    description?: string;
    icon?: string;
    dimension?: number[];
    power?: number[];
    capacity?: number[];
    powerOut?: (number|string)[];
    grids?: boolean[];
    components?: Component[];
}

export interface Component {
    name: string;
    amountLg?: number;
    amountSm?: number;
}