import { Capitulo } from '../models/capitulo';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';
import { cacheManager } from '../cache/cache-manager';

export class CapituloFetch {
  static BASE_URL = API_BASE_ROUTES.chapters;

  static async getAll(): Promise<Capitulo[] | ApiError> {
    // Verificar si ya está en caché
    const cached = cacheManager.getCapitulos();
    if (cached) {
      return cached;
    }

    // Si no está en caché, hacer fetch
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    const capitulos = data.map((item: any) => new Capitulo(item));
    
    // Guardar en caché
    cacheManager.setCapitulos(capitulos);
    
    return capitulos;
  }

  static async getByUrl(url: string): Promise<Capitulo | ApiError> {
    // Primero intentar obtener del caché
    const cached = cacheManager.getCapituloByUrl(url);
    if (cached) {
      return cached;
    }

    // Si no está en caché, asegurarse de que getAll() se haya llamado
    await this.getAll();
    
    // Intentar nuevamente del caché
    const cachedAfterGetAll = cacheManager.getCapituloByUrl(url);
    if (cachedAfterGetAll) {
      return cachedAfterGetAll;
    }

    // Como último recurso, hacer fetch individual
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
    // Primero intentar obtener del caché
    const cached = cacheManager.getCapitulosByObraUrl(obra_url);
    if (cached.length > 0) {
      return cached;
    }

    // Si no está en caché, asegurarse de que getAll() se haya llamado
    const allCapitulos = await this.getAll();
    if ('error' in allCapitulos) {
      return allCapitulos;
    }

    // Intentar nuevamente del caché
    const cachedAfterGetAll = cacheManager.getCapitulosByObraUrl(obra_url);
    if (cachedAfterGetAll.length > 0) {
      return cachedAfterGetAll;
    }

    // Como último recurso, hacer fetch individual
    const response = await fetch(`${this.BASE_URL}obra/${obra_url}`);
    if (!response.ok) {
      throw new Error(`Error fetching capitulos by obra: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    const capitulos = data.map((item: any) => new Capitulo(item));
    return capitulos.sort((a: Capitulo, b: Capitulo) => a.numero_capitulo - b.numero_capitulo);
  }
}