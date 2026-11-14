/**
 * Categorías válidas para agrupar los conocimientos técnicos con un subtítulo por grupo.
 */
export type SkillCategory =
  | 'Lenguajes'
  | 'Backend'
  | 'Frontend'
  | 'Datos'
  | 'DevOps'
  | 'IoT'
  | 'Pruebas'
  | 'Arquitectura'
  | 'Automatización'
  | 'Otros';

/** Lista ordenada de categorías técnicas para renderizado y validación en pruebas. */
export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  'Lenguajes',
  'Backend',
  'Frontend',
  'Datos',
  'DevOps',
  'IoT',
  'Pruebas',
  'Arquitectura',
  'Automatización',
  'Otros',
] as const;

/**
 * Estado opcional de aprendizaje de una habilidad técnica.
 */
export type SkillStatus = 'base' | 'aprendiendo';

/**
 * Estructura tipada de una habilidad técnica en `profile.data.ts`.
 */
export interface TechnicalSkillItem {
  /** Nombre de la tecnología, herramienta o concepto técnico. */
  nombre: string;
  /** Categoría a la que pertenece dentro de la sección de habilidades. */
  categoria: SkillCategory;
  /**
   * Icono asociado:
   * - Clase de Devicon cuando inicia con `devicon-` (ej. `devicon-java-plain`).
   * - Nombre de icono de `lucide-angular` para conceptos sin icono de marca (ej. `webhook`, `layers`).
   */
  icono: string;
  /** Estado de dominio ('base' | 'aprendiendo'). */
  estado?: SkillStatus;
}

/**
 * Estructura tipada de una habilidad blanda con su icono de Lucide y línea de evidencia.
 */
export interface SoftSkillItem {
  /** Nombre de la habilidad blanda. */
  nombre: string;
  /** Nombre del icono único de `lucide-angular` asignado a la habilidad. */
  icono: string;
  /** Evidencia concreta verificable (si está vacía, no se renderiza en la vista). */
  evidencia: string;
}

/**
 * Tarjeta informativa para la cuadrícula tipo Bento de la sección de perfil.
 */
export interface BentoHighlight {
  /** Identificador único de la tarjeta. */
  id: string;
  /** Etiqueta corta superior (eyebrow). */
  eyebrow: string;
  /** Título principal de la tarjeta. */
  description: string;
  /** Título visible de la tarjeta Bento. */
  title: string;
  /** Periodo o insignia técnica opcional. */
  badge: string;
}

/**
 * Elemento de experiencia o logro técnico verificable.
 */
export interface ExperienceItem {
  /** Identificador único del hito de experiencia. */
  id: string;
  /** Cargo o rol desempeñado. */
  role: string;
  /** Entidad o dependencia institucional. */
  organization: string;
  /** Periodo de ejecución. */
  period: string;
  /** Resumen general de la responsabilidad. */
  summary: string;
  /** Lista de logros técnicos concretos construidos en el rol. */
  achievements: string[];
  /** Tecnologías aplicadas en este rol. */
  technologies: string[];
}

/**
 * Enlaces y datos de contacto del estudiante.
 */
export interface ContactInfo {
  /** Nombre de usuario en GitHub. */
  githubUsername: string;
  /** URL completa del perfil de GitHub. */
  githubUrl: string;
  /** Correo electrónico (placeholder configurable). */
  email: string;
  /** URL de perfil de LinkedIn (placeholder configurable). */
  linkedinUrl: string;
  /** Ubicación o institución académica. */
  location: string;
}

/**
 * Estructura principal de los datos del perfil profesional del estudiante.
 */
export interface ProfileData {
  /** Nombre completo del estudiante. */
  nombre: string;
  /** Iniciales para el avatar de respaldo cuando no se carga fotografía. */
  iniciales: string;
  /** Ruta opcional de la fotografía de perfil en `public/assets/images/`. */
  avatarUrl?: string;
  /** Título o rol académico actual. */
  rol: string;
  /** Institución universitaria. */
  institucion: string;
  /** Periodo de estudios. */
  periodoEstudios: string;
  /** Resumen ejecutivo en primera persona con tono técnico y conciso. */
  resumen: string;
  /** Declaración de cierre sobre aprendizaje continuo. */
  mensajeCierre: string;
  /** Tarjetas destacadas tipo Bento para la sección de perfil. */
  bentoHighlights: BentoHighlight[];
  /** Lista tipada de conocimientos y tecnologías por categoría. */
  habilidadesTecnicas: TechnicalSkillItem[];
  /** Lista tipada de habilidades blandas con icono distinto y línea de evidencia. */
  habilidadesBlandas: SoftSkillItem[];
  /** Historial de experiencia en la Vicerrectoría de Bienestar Universitario y logros. */
  experiencia: ExperienceItem[];
  /** Información de contacto y enlaces externos. */
  contacto: ContactInfo;
}
