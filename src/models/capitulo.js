import { Arco } from './arco.js';
import { Obra } from './obra.js';

// Modelo para Capitulo
export class Capitulo {
  constructor(data) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.descripcion_larga = data.descripcion_larga;
    this.descripcion_corta = data.descripcion_corta;
    this.url_portada = data.url_portada;
    this.texto_capitulo = data.texto_capitulo;
    this.numero_capitulo = data.numero_capitulo;
    this.subarco = data.subarco ? new Arco(data.subarco) : null;
    this.obra = data.obra ? new Obra(data.obra) : null;
    this.titulo_seo = data.titulo_seo;
    this.descripcion_seo = data.descripcion_seo;
    this.slug = data.slug;
    this.keywords = data.keywords;
    this.canonical_url = data.canonical_url;
    this.no_index = data.no_index;
    this.no_follow = data.no_follow;
    this.og_title = data.og_title;
    this.og_description = data.og_description;
    this.og_image = data.og_image;
    this.og_type = data.og_type;
    this.og_url = data.og_url;
    this.alt_text_image = data.alt_text_image;
    this.schema_type = data.schema_type;
    this.tags = data.tags;
    this.social_sharing_enabled = data.social_sharing_enabled;
    this.seo_score = data.seo_score;
  }
}