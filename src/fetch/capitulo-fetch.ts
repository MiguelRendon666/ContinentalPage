import { Capitulo } from '../models/capitulo';
import { API_BASE_ROUTES } from '../constants/api';

export class CapituloFetch {
  static BASE_URL = API_BASE_ROUTES.chapters;

  static async getAll(): Promise<Capitulo[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new Capitulo(item));
  }

  static async getByUrl(url: string): Promise<Capitulo> {
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulo: ${response.statusText}`);
    }
    const data = await response.json();
    return new Capitulo(data);
  }

  static async getByObraUrl(obra_url: string): Promise<Capitulo[]> {
    const response = await fetch(`${API_BASE_ROUTES.books}/obra/${obra_url}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos by obra: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new Capitulo(item));
  }
}