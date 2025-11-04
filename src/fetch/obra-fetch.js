import { Obra } from '../models/obra.js';
import { API_BASE_URL } from '../constants/api.js';

export class ObraFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/obras`;

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching obras: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => new Obra(item));
  }

  static async getById(id) {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching obra: ${response.statusText}`);
    }
    const data = await response.json();
    return new Obra(data);
  }
}