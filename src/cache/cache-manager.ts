import type { Noticia } from '../models/noticia';
import type { Capitulo } from '../models/capitulo';
import type { Obra } from '../models/obra';
import type { VariableSistema } from '../models/variable-sistema';

class CacheManager {
  private noticiasCache: Map<string, Noticia> = new Map();
  private capitulosCache: Map<string, Capitulo> = new Map();
  private obrasCache: Map<string, Obra> = new Map();
  private variablesSistemaCache: Map<string, VariableSistema> = new Map();
  
  private noticiasListCache: Noticia[] | null = null;
  private capitulosListCache: Capitulo[] | null = null;
  private obrasListCache: Obra[] | null = null;

  // Noticias
  setNoticias(noticias: Noticia[]): void {
    this.noticiasListCache = noticias;
    noticias.forEach(noticia => {
      this.noticiasCache.set(noticia.url_busqueda, noticia);
    });
  }

  getNoticias(): Noticia[] | null {
    return this.noticiasListCache;
  }

  getNoticiaByUrl(url: string): Noticia | undefined {
    return this.noticiasCache.get(url);
  }

  // Capítulos
  setCapitulos(capitulos: Capitulo[]): void {
    this.capitulosListCache = capitulos;
    capitulos.forEach(capitulo => {
      this.capitulosCache.set(capitulo.url, capitulo);
    });
  }

  getCapitulos(): Capitulo[] | null {
    return this.capitulosListCache;
  }

  getCapituloByUrl(url: string): Capitulo | undefined {
    return this.capitulosCache.get(url);
  }

  getCapitulosByObraUrl(obraUrl: string): Capitulo[] {
    if (!this.capitulosListCache) return [];
    return this.capitulosListCache
      .filter(cap => cap.obra?.url === obraUrl)
      .sort((a, b) => a.numero_capitulo - b.numero_capitulo);
  }

  // Obras
  setObras(obras: Obra[]): void {
    this.obrasListCache = obras;
    obras.forEach(obra => {
      this.obrasCache.set(obra.url, obra);
    });
  }

  getObras(): Obra[] | null {
    return this.obrasListCache;
  }

  getObraByUrl(url: string): Obra | undefined {
    return this.obrasCache.get(url);
  }

  // Variables del Sistema
  setVariableSistema(variable: VariableSistema): void {
    this.variablesSistemaCache.set(variable.nombre, variable);
  }

  getVariableSistemaByNombre(nombre: string): VariableSistema | undefined {
    return this.variablesSistemaCache.get(nombre);
  }

  // Limpiar cache (útil para desarrollo)
  clear(): void {
    this.noticiasCache.clear();
    this.capitulosCache.clear();
    this.obrasCache.clear();
    this.variablesSistemaCache.clear();
    this.noticiasListCache = null;
    this.capitulosListCache = null;
    this.obrasListCache = null;
  }
}

// Singleton para mantener el cache durante el build
export const cacheManager = new CacheManager();
