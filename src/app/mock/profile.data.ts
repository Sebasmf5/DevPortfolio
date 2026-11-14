import { ProfileData } from '../interface/profile.interface';

/**
 * Datos tipados del perfil profesional de Sebastián Morales Flórez.
 * Fuente única de verdad para las secciones de Perfil, Habilidades, Experiencia y Contacto.
 */
export const PROFILE_DATA: ProfileData = {
  nombre: 'Sebastián Morales Flórez',
  iniciales: 'SM',
  avatarUrl: 'assets/images/profile.jpg',
  rol: 'Estudiante de Ingeniería de Sistemas (2023-actualidad)',
  institucion: 'Unidad Central del Valle del Cauca (UCEVA)',
  periodoEstudios: '2023 - Actualidad',
  resumen:
    'Estudiante de Ingeniería de Sistemas enfocado en el desarrollo de software estructurado, automatización de procesos institucionales y construcción de aplicaciones web con arquitectura limpia.',
  mensajeCierre: 'Interés en el aprendizaje continuo y en superarme siempre.',
  bentoHighlights: [
    {
      id: 'estudios',
      eyebrow: 'Formación académica',
      title: 'Ingeniería de Sistemas',
      description:
        'Estudiante activo en la Unidad Central del Valle del Cauca (UCEVA), con enfoque en arquitectura de software, estructuras de datos y desarrollo web.',
      badge: '2023 - Actualidad',
    },
    {
      id: 'distincion',
      eyebrow: 'Reconocimiento nacional',
      title: 'Distinción Andrés Bello',
      description:
        'Reconocimiento otorgado por obtener el 4.º mejor puntaje en las pruebas de Estado ICFES.',
      badge: 'ICFES 2022',
    },
    {
      id: 'goslint',
      eyebrow: 'Algoritmia y resolución de problemas',
      title: 'Semillero Goslint',
      description:
        'Integrante del semillero de programación competitiva Goslint, fortaleciendo el diseño de algoritmos eficientes en C, C++ y Java.',
      badge: 'Programación Competitiva',
    },
    {
      id: 'bienestar',
      eyebrow: 'Impacto institucional',
      title: 'Monitor en Bienestar Universitario',
      description:
        'Desarrollo de soluciones de automatización con Apps Script y sistemas de inventario con semaforización en Node.js y Angular.',
      badge: 'Vicerrectoría UCEVA',
    },
  ],
  habilidadesTecnicas: ['API REST', 'Spring Boot', 'JavaScript', 'HTML', 'CSS', 'C', 'C++', 'Java'],
  habilidadesBlandas: ['Innovación', 'Creatividad', 'Comunicación', 'Liderazgo', 'Proactividad'],
  experiencia: [
    {
      id: 'monitor-bienestar',
      role: 'Monitor en la Vicerrectoría de Bienestar Universitario',
      organization: 'Unidad Central del Valle del Cauca (UCEVA)',
      period: 'Actualidad',
      summary:
        'Diseño, desarrollo y automatización de herramientas digitales para optimizar procesos internos del área de Bienestar Universitario.',
      achievements: [
        'Automaticé el préstamo de implementos integrando Google Apps Script y Google Sheets, con envío de correos automáticos, optimización mediante CacheService e interfaz responsive.',
        'Automaticé la generación y procesamiento de resultados de pruebas psicotécnicas.',
        'Desarrollo un sistema de inventario con semaforización para el área de enfermería utilizando Node.js y Angular bajo principios de arquitectura limpia y patrones de diseño.',
      ],
      technologies: [
        'Node.js',
        'Angular',
        'Google Apps Script',
        'Google Sheets',
        'CacheService',
        'Arquitectura Limpia',
        'Patrones de Diseño',
      ],
    },
  ],
  contacto: {
    githubUsername: 'Sebasmf5',
    githubUrl: 'https://github.com/Sebasmf5',
    email: 'contacto@sebasmf.dev',
    linkedinUrl: 'https://www.linkedin.com/in/sebasmf5',
    location: 'Tuluá, Valle del Cauca, Colombia — UCEVA',
  },
};
