export const SERVER_BASE_URL: string = 'http://localhost:5000';
export const API_SERVER_URL: string = `${SERVER_BASE_URL}/backend-api/page`;

export const API_BASE_ROUTES: Record<string, string> = {
  chapters: `${API_SERVER_URL}/capitulos/`,
  arcs: `${API_SERVER_URL}/arcos/`,
  books: `${API_SERVER_URL}/obras/`,
  news: `${API_SERVER_URL}/noticias/`,
  characters: `${API_SERVER_URL}/personajes-ficticios/`,
  systemVariables: `${API_SERVER_URL}/variables-sistema/`,
}