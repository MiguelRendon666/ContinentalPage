import { Obra } from '../models/obra';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class ObraFetch {
  static BASE_URL = API_BASE_ROUTES.books;

  static async getAll(): Promise<Obra[] | ApiError> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching obras: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Obra(item));
  }

  static async getByUrl(url: string): Promise<Obra | ApiError> {
    const response = await fetch(`${this.BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching obra: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new Obra(data);
  }
}