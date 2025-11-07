import { API_DEFAULT_OBRA } from './api.ts';

export const URL: Record<string, string> = {
  home: '/',
  chapters_default: `/capitulos/${API_DEFAULT_OBRA}`,
  chapter: '/capitulos/',
  news: '/noticias',
  new: '/noticias/',
  us: '/nosotros',
};