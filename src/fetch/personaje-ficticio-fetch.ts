import { PersonajeFicticio } from '../models/personaje-ficticio';
import { API_BASE_URL } from '../constants/api';

export class PersonajeFicticioFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/personajes-ficticios`;

  static async getAll(): Promise<PersonajeFicticio[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching personajes ficticios: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new PersonajeFicticio(item));
  }

  static async getById(id: number): Promise<PersonajeFicticio> {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching personaje ficticio: ${response.statusText}`);
    }
    const data = await response.json();
    return new PersonajeFicticio(data);
  }
}