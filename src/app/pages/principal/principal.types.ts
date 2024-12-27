export interface TableData {
    rowTitle: string;
    withoutCardRequiered: boolean;
    cardRequiered: boolean;
}

export interface Category {
    idMenu: number;
    descripcion?: string;
    descripción?: string;
}

export interface Brand {
    idItem: number;
    nombreMarca: string;
    descripcion?: string;
    descripción?: string;
    imagen: any;
}
