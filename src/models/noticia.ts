// Modelo para Noticia
export class Noticia {
  id: number;
  titulo: string;
  descripcion_larga: string;
  descripcion_corta: string;
  url_portada: string;
  texto_noticia: string;
  autor_id: number;
  titulo_seo: string;
  descripcion_seo: string;
  slug: string;
  keywords: string;
  canonical_url: string;
  no_index: boolean;
  no_follow: boolean;
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
  og_url: string;
  alt_text_image: string;
  schema_type: string;
  tags: string;
  social_sharing_enabled: boolean;
  seo_score: number;
  url_busqueda: string;

  constructor(data: any) {
    this.id = data.id;
    this.titulo = data.titulo;
    this.descripcion_larga = data.descripcion_larga;
    this.descripcion_corta = data.descripcion_corta;
    this.url_portada = data.url_portada;
    this.texto_noticia = data.texto_noticia;
    this.autor_id = data.autor_id;
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
    this.url_busqueda = data.url_busqueda;
  }
}

// Interfaz para mejor tipado
export interface INoticia {
  id: number;
  titulo: string;
  descripcion_larga: string;
  descripcion_corta: string;
  url_portada: string;
  texto_noticia: string;
  autor_id: number;
  titulo_seo: string;
  descripcion_seo: string;
  slug: string;
  keywords: string;
  canonical_url: string;
  no_index: boolean;
  no_follow: boolean;
  og_title: string;
  og_description: string;
  og_image: string;
  og_type: string;
  og_url: string;
  alt_text_image: string;
  schema_type: string;
  tags: string;
  social_sharing_enabled: boolean;
  seo_score: number;
  url_busqueda: string;
}