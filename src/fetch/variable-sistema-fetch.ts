import { VariableSistema } from '../models/variable-sistema';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';
import { cacheManager } from '../cache/cache-manager';

export class VariableSistemaFetch {
  static BASE_URL = API_BASE_ROUTES.systemVariables;

  static async getByNombre(nombre: string): Promise<VariableSistema | ApiError> {
    // Primero intentar obtener del caché
    const cached = cacheManager.getVariableSistemaByNombre(nombre);
    if (cached) {
      return cached;
    }

    // Si no está en caché, hacer fetch
    const response = await fetch(`${this.BASE_URL}${nombre}`);
    if (!response.ok) {
      throw new Error(`Error fetching variable de sistema: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    const variable = new VariableSistema(data);
    
    // Guardar en caché
    cacheManager.setVariableSistema(variable);
    
    return variable;
  }
}
