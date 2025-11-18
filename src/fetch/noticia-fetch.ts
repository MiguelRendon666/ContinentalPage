import { Noticia } from '../models/noticia';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';
import { cacheManager } from '../cache/cache-manager';

export class NoticiaFetch {
  static BASE_URL = API_BASE_ROUTES.news;

  static async getAll(): Promise<Noticia[] | ApiError> {
    // Verificar si ya está en caché
    const cached = cacheManager.getNoticias();
    if (cached) {
      return cached;
    }

    // Si no está en caché, hacer fetch
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching noticias: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    const noticias = data.map((item: any) => new Noticia(item));
    
    // Guardar en caché
    cacheManager.setNoticias(noticias);
    
    return noticias;
  }

  static async getByUrl(url: string): Promise<Noticia | ApiError> {
    // Primero intentar obtener del caché
    const cached = cacheManager.getNoticiaByUrl(url);
    if (cached) {
      return cached;
    }

    // Si no está en caché, asegurarse de que getAll() se haya llamado
    await this.getAll();
    
    // Intentar nuevamente del caché
    const cachedAfterGetAll = cacheManager.getNoticiaByUrl(url);
    if (cachedAfterGetAll) {
      return cachedAfterGetAll;
    }

    // Como último recurso, hacer fetch individual
    const response = await fetch(`${this.BASE_URL}/${url}`);
    if (!response.ok) {
      throw new Error(`Error fetching noticia: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new Noticia(data);
  }
}