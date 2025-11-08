import { Arco } from '../models/arco';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class ArcoFetch {
  static BASE_URL = API_BASE_ROUTES.arcs;

  static async getAll(): Promise<Arco[] | ApiError> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching arcos: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Arco(item));
  }

  static async getByUrl(url: string): Promise<Arco | ApiError> {
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching arco: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new Arco(data);
  }
}