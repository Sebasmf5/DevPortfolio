/**
 * Estado de publicación de un proyecto dentro del catálogo.
 * - `publicado`: Proyecto activo con repositorio y aplicación desplegada verificables.
 * - `proximamente`: Espacio reservado para los proyectos adicionales del curso.
 */
export type ProjectStatus = 'publicado' | 'proximamente';

/**
 * Contrato tipado para cada proyecto del catálogo principal.
 * Agregar un proyecto consiste en añadir una entrada con esta estructura en `projects.data.ts`.
 */
export interface Project {
  /** Identificador numérico o slug único del proyecto (1 al 5). */
  id: number;
  /** Nombre del proyecto. */
  nombre: string;
  /** Descripción técnica clara del propósito del proyecto. */
  descripcion: string;
  /** Tecnologías, lenguajes y herramientas utilizadas. */
  tecnologias: string[];
  /** Principales características funcionales y arquitectónicas. */
  caracteristicas: string[];
  /** Enlace al repositorio independiente en GitHub. */
  repoUrl: string;
  /** Enlace a la aplicación desplegada y funcionando en GitHub Pages o dominio propio. */
  demoUrl: string;
  /** Ruta opcional a una imagen o vista previa del proyecto. */
  imagen?: string;
  /** Estado actual del proyecto en el catálogo. */
  estado?: ProjectStatus;
}
