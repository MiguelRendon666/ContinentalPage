import { VariableSistema } from '../models/variable-sistema';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class VariableSistemaFetch {
  static BASE_URL = API_BASE_ROUTES.systemVariables;

  static async getByNombre(nombre: string): Promise<VariableSistema | ApiError> {
    const response = await fetch(`${this.BASE_URL}/${nombre}`);
    if (!response.ok) {
      throw new Error(`Error fetching variable de sistema: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return new VariableSistema(data);
  }
}
