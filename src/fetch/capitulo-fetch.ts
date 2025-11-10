import { Capitulo } from '../models/capitulo';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class CapituloFetch {
  static BASE_URL = API_BASE_ROUTES.chapters;

  static async getAll(): Promise<Capitulo[] | ApiError> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Capitulo(item));
  }

  static async getByUrl(url: string): Promise<Capitulo | ApiError> {
    const response = await fetch(`${this.BASE_URL}${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulo: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new Capitulo(data);
  }

  static async getByObraUrl(obra_url: string): Promise<Capitulo[] | ApiError> {
    const response = await fetch(`${this.BASE_URL}obra/${obra_url}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos by obra: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Capitulo(item));
  }
}