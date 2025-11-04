import { Obra } from '../models/obra';
import { API_BASE_URL } from '../constants/api';

export class ObraFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/obras`;

  static async getAll(): Promise<Obra[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching obras: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new Obra(item));
  }

  static async getById(id: number): Promise<Obra> {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching obra: ${response.statusText}`);
    }
    const data = await response.json();
    return new Obra(data);
  }
}