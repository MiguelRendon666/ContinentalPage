import { Arco } from '../models/arco.js';
import { API_BASE_URL } from '../constants/api.js';

export class ArcoFetch {
  static BASE_URL = `${API_BASE_URL}/backend-api/page/arcos`;

  static async getAll() {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching arcos: ${response.statusText}`);
    }
    const data = await response.json();
    return data.map(item => new Arco(item));
  }

  static async getById(id) {
    const response = await fetch(`${this.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching arco: ${response.statusText}`);
    }
    const data = await response.json();
    return new Arco(data);
  }
}