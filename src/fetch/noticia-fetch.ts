import { Noticia } from '../models/noticia';
import { API_BASE_URL } from '../constants/api';

export class NoticiaFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/noticias`;

  static async getAll(): Promise<Noticia[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching noticias: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new Noticia(item));
  }

  static async getById(id: number): Promise<Noticia> {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching noticia: ${response.statusText}`);
    }
    const data = await response.json();
    return new Noticia(data);
  }
}