/**
 * Tarjeta informativa para la cuadrícula tipo Bento de la sección de perfil.
 */
export interface BentoHighlight {
  /** Identificador único de la tarjeta. */
  id: string;
  /** Etiqueta corta superior (eyebrow). */
  eyebrow: string;
  /** Título principal de la tarjeta. */
  title: string;
  /** Descripción concisa del logro o área. */
  description: string;
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
  /** Lista de conocimientos y tecnologías técnicas que maneja. */
  habilidadesTecnicas: string[];
  /** Lista de habilidades blandas (soft skills). */
  habilidadesBlandas: string[];
  /** Historial de experiencia en la Vicerrectoría de Bienestar Universitario y logros. */
  experiencia: ExperienceItem[];
  /** Información de contacto y enlaces externos. */
  contacto: ContactInfo;
}
