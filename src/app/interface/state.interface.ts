/**
 * Representa los posibles estados de carga de un componente contenedor (`Page`).
 *
 * @remarks
 * Sigue el estándar del taller de Arquitectura de Software (UCEVA):
 * - `'init'`: Estado inicial antes de disparar la suscripción al Observable.
 * - `'loading'`: Cargando datos desde el servicio.
 * - `'success'`: Datos recibidos y listos para enviarse por `@Input()` al componente presentacional.
 * - `'error'`: Fallo al obtener los datos.
 */
export type State = 'init' | 'loading' | 'success' | 'error';
