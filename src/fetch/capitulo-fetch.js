import { Capitulo } from '../models/capitulo.js';
import { API_BASE_URL } from '../constants/api.js';

export class CapituloFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/capitulos`;

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => new Capitulo(item));
  }

  static async getBySlug(slug) {
    const response = await fetch(`${this.BASE_URL}/${slug}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulo: ${response.statusText}`);
    }
    const data = await response.json();
    return new Capitulo(data);
  }
}