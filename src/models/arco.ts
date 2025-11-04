// Modelo para Arco
export class Arco {
  id: number;
  nombre: string;
  es_subarco: boolean;

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.es_subarco = data.es_subarco;
  }
}

// Interfaz para mejor tipado
export interface IArco {
  id: number;
  nombre: string;
  es_subarco: boolean;
}