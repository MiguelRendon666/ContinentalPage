import { PersonajeFicticio } from '../models/personaje-ficticio';
import { API_BASE_ROUTES } from '../constants/api';

export class PersonajeFicticioFetch {
  static BASE_URL = API_BASE_ROUTES.characters;

  static async getAll(): Promise<PersonajeFicticio[]> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching personajes ficticios: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map((item: any) => new PersonajeFicticio(item));
  }

  static async getByUrl(url: string): Promise<PersonajeFicticio> {
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching personaje ficticio: ${response.statusText}`);
    }
    const data = await response.json();
    return new PersonajeFicticio(data);
  }
}