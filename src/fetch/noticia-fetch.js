import { Noticia } from '../models/noticia.js';
import { API_BASE_URL } from '../constants/api.js';

export class NoticiaFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/noticias`;

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching noticias: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => new Noticia(item));
  }

  static async getById(id) {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching noticia: ${response.statusText}`);
    }
    const data = await response.json();
    return new Noticia(data);
  }
}