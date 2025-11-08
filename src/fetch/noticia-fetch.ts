import { Noticia } from '../models/noticia';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class NoticiaFetch {
  static BASE_URL = API_BASE_ROUTES.news;

  static async getAll(): Promise<Noticia[] | ApiError> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching noticias: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Noticia(item));
  }

  static async getByUrl(url: string): Promise<Noticia | ApiError> {
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching noticia: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new Noticia(data);
  }
}