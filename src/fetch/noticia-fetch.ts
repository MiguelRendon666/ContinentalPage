import { Noticia } from '../models/noticia';
import { API_BASE_ROUTES } from '../constants/api';

export class NoticiaFetch {
  static BASE_URL = API_BASE_ROUTES.news;

  static async getAll(): Promise<Noticia[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching noticias: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new Noticia(item));
  }

  static async getByUrl(url: string): Promise<Noticia> {
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching noticia: ${response.statusText}`);
    }
    const data = await response.json();
    return new Noticia(data);
  }
}