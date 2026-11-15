import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ThemeMode } from '../interface/theme.interface';

/** Clave de almacenamiento local para recordar la preferencia de tema del usuario. */
export const THEME_STORAGE_KEY = 'sebasmf-portfolio-theme';

/**
 * Servicio reactivo que gestiona el tema visual (claro/oscuro) exponiendo tanto
 * `Observable<ThemeMode>` (RxJS) como Signals de Angular.
 * - Detecta por defecto `prefers-color-scheme` del sistema operativo si no hay elección guardada.
 * - Persiste la preferencia en `localStorage`.
 * - Sincroniza el atributo `data-theme` en el elemento `<html>` para activar los tokens CSS.
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  /** Referencia al documento DOM inyectado por Angular para manipular `data-theme`. */
  private readonly document = inject(DOCUMENT);

  /** Sujeto reactivo interno que almacena y emite el modo de tema actual. */
  private readonly themeSubject = new BehaviorSubject<ThemeMode>(this.resolveInitialTheme());

  /** Flujo reactivo RxJS con el modo de tema activo ('dark' | 'light'). */
  readonly theme$: Observable<ThemeMode> = this.themeSubject.asObservable();

  /** Signal reactivo con el tema activo ('dark' | 'light'). */
  readonly theme = signal<ThemeMode>(this.themeSubject.value);

  /** Signal computado que indica si el tema oscuro está activo. */
  readonly isDark = computed(() => this.theme() === 'dark');

  /**
   * Inicializa el tema en el DOM y registra un efecto reactivo para sincronizar cambios posteriores.
   */
  constructor() {
    this.applyThemeToDom(this.theme());

    effect(() => {
      const currentTheme = this.theme();
      this.applyThemeToDom(currentTheme);
      this.persistTheme(currentTheme);
    });
  }

  /**
   * Retorna el flujo `Observable` del tema actual.
   */
  getTheme(): Observable<ThemeMode> {
    return this.theme$;
  }

  /**
   * Alterna entre el tema claro y el tema oscuro, emitiendo el nuevo estado por `Observable`.
   */
  toggleTheme(): Observable<ThemeMode> {
    const nextTheme: ThemeMode = this.theme() === 'dark' ? 'light' : 'dark';
    return this.setTheme(nextTheme);
  }

  /**
   * Establece explícitamente un modo de tema y lo sincroniza con RxJS, Signals, DOM y `localStorage`.
   */
  setTheme(mode: ThemeMode): Observable<ThemeMode> {
    this.theme.set(mode);
    this.themeSubject.next(mode);
    this.applyThemeToDom(mode);
    this.persistTheme(mode);
    return of(mode);
  }

  /**
   * Determina el tema inicial priorizando `localStorage` y luego `prefers-color-scheme`.
   */
  private resolveInitialTheme(): ThemeMode {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY);
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch {
      // Ignorar errores de acceso a localStorage en entornos restringidos
    }

    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      return prefersLight ? 'light' : 'dark';
    }

    return 'dark';
  }

  /**
   * Aplica el atributo `data-theme` sobre el elemento raíz `<html>`.
   */
  private applyThemeToDom(mode: ThemeMode): void {
    this.document.documentElement.setAttribute('data-theme', mode);
  }

  /**
   * Guarda el tema seleccionado en `localStorage`.
   */
  private persistTheme(mode: ThemeMode): void {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }
}
