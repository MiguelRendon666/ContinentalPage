import { Obra } from '../models/obra';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';
import { cacheManager } from '../cache/cache-manager';

export class ObraFetch {
  static BASE_URL = API_BASE_ROUTES.books;

  static async getAll(): Promise<Obra[] | ApiError> {
    // Verificar si ya está en caché
    const cached = cacheManager.getObras();
    if (cached) {
      return cached;
    }

    // Si no está en caché, hacer fetch
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching obras: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    const obras = data.map((item: any) => new Obra(item));
    
    // Guardar en caché
    cacheManager.setObras(obras);
    
    return obras;
  }

  static async getByUrl(url: string): Promise<Obra | ApiError> {
    // Primero intentar obtener del caché
    const cached = cacheManager.getObraByUrl(url);
    if (cached) {
      return cached;
    }

    // Si no está en caché, asegurarse de que getAll() se haya llamado
    await this.getAll();
    
    // Intentar nuevamente del caché
    const cachedAfterGetAll = cacheManager.getObraByUrl(url);
    if (cachedAfterGetAll) {
      return cachedAfterGetAll;
    }

    // Como último recurso, hacer fetch individual
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