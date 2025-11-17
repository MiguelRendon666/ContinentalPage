// Modelo para Lobby
export class Lobby {
  created_at: string;
  descripcion_corta: string;
  descripcion_larga: string;
  tipo: string;
  titulo: string;
  url_busqueda: string;
  url_portada: string;

  constructor(data: any) {
    this.created_at = data.created_at;
    this.descripcion_corta = data.descripcion_corta;
    this.descripcion_larga = data.descripcion_larga;
    this.tipo = data.tipo;
    this.titulo = data.titulo;
    this.url_busqueda = data.url_busqueda;
    this.url_portada = data.url_portada;
  }
}

// Interfaz para mejor tipado
export interface ILobby {
  created_at: string;
  descripcion_corta: string;
  descripcion_larga: string;
  tipo: string;
  titulo: string;
  url_busqueda: string;
  url_portada: string;
}
