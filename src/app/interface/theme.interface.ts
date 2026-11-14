/**
 * Modos de tema visual soportados por el portafolio.
 * - `dark`: Inspirado en AuthKit (luminous circuit theater, #05060f).
 * - `light`: Tema claro técnico con contraste WCAG AA verificado.
 */
export type ThemeMode = 'dark' | 'light';

/**
 * Representa un elemento de navegación hacia una sección del portafolio.
 * Utiliza rutas limpias de Angular Router sin Hash (#).
 */
export interface NavItem {
  /** Identificador único de la sección (coincide con el id del elemento DOM). */
  id: string;
  /** Etiqueta visible en la barra de navegación. */
  label: string;
  /** Ruta de Angular Router asociada (ej. '/proyectos'). */
  route: string;
}
