// Modelo para PersonajeFicticio
export class PersonajeFicticio {
  id: number;
  nombre: string;
  url_foto_perfil: string;
  descripcion: string;

  constructor(data: any) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.url_foto_perfil = data.url_foto_perfil;
    this.descripcion = data.descripcion;
  }
}

// Interfaz para mejor tipado
export interface IPersonajeFicticio {
  id: number;
  nombre: string;
  url_foto_perfil: string;
  descripcion: string;
}