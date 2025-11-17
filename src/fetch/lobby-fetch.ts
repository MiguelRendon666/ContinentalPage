import { Lobby } from '../models/lobby';
import { ApiError } from '../models/api-error';
import { API_BASE_ROUTES } from '../constants/api';

export class LobbyFetch {
  static BASE_URL = API_BASE_ROUTES.lobby;

  static async getAll(): Promise<Lobby[] | ApiError> {
    const response = await fetch(this.BASE_URL);
    if (!response.ok) {
      throw new Error(`Error fetching lobby: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      return new ApiError(data);
    }
    return data.map((item: any) => new Lobby(item));
  }
}
