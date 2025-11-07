// Modelo para Obra
export class Obra {
  id: number;
  nombre: string;
  descripcion: string;
  url: string;

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.descripcion = data.descripcion;
    this.url = data.url;
  }
}

// Interfaz para mejor tipado
export interface IObra {
  id: number;
  nombre: string;
  descripcion: string;
  url: string;
}