// Modelo para PersonajeFicticio
export class PersonajeFicticio {
  constructor(data) {
    this.id = data.id;
    this.nombre = data.nombre;
    this.url_foto_perfil = data.url_foto_perfil;
    this.descripcion = data.descripcion;
  }
}