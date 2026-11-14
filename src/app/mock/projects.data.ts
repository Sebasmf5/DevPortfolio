import { Project } from '../interface/project.interface';

/**
 * Catálogo tipado de los 5 proyectos solicitados en la actividad "Dev Portfolio Project".
 * Para publicar cualquiera de los proyectos 2 a 5, basta con actualizar su entrada
 * y cambiar `estado` a `'publicado'`.
 */
export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    nombre: 'Dev Portfolio — Catálogo Digital de Ingeniería',
    descripcion:
      'Portafolio digital centralizado desarrollado en Angular para presentar proyectos académicos y profesionales con integración y despliegue continuo (CI/CD) mediante GitHub Actions y GitHub Pages.',
    tecnologias: ['Angular', 'TypeScript', 'SCSS', 'Signals', 'GitHub Actions', 'Vitest'],
    caracteristicas: [
      'Sistema de doble tema (oscuro inspirado en AuthKit y claro con contraste AA) persistido en localStorage.',
      'Arquitectura modular standalone con datos tipados y navegación limpia sin Hash (#).',
      'Pipeline CI/CD automatizado con linter, pruebas unitarias headless, build de producción, fallback SPA 404.html y verificación HTTP 200.',
    ],
    repoUrl: 'https://github.com/Sebasmf5/DevPortfolio',
    demoUrl: 'https://sebasmf.dev',
    estado: 'publicado',
  },
  {
    id: 2,
    nombre: 'Proyecto 2 — Próximamente',
    descripcion:
      'Aplicación funcional en preparación para el catálogo del curso de Arquitectura de Software, con repositorio independiente y despliegue automatizado en GitHub Pages.',
    tecnologias: ['Angular', 'TypeScript', 'GitHub Actions'],
    caracteristicas: [
      'Repositorio independiente con flujo de trabajo CI/CD.',
      'Construcción y publicación automatizada en GitHub Pages.',
      'Verificación automática de disponibilidad tras el despliegue.',
    ],
    repoUrl: '',
    demoUrl: '',
    estado: 'proximamente',
  },
  {
    id: 3,
    nombre: 'Proyecto 3 — Próximamente',
    descripcion:
      'Aplicación funcional en preparación para el catálogo del curso de Arquitectura de Software, con repositorio independiente y despliegue automatizado en GitHub Pages.',
    tecnologias: ['Angular', 'TypeScript', 'GitHub Actions'],
    caracteristicas: [
      'Repositorio independiente con flujo de trabajo CI/CD.',
      'Construcción y publicación automatizada en GitHub Pages.',
      'Verificación automática de disponibilidad tras el despliegue.',
    ],
    repoUrl: '',
    demoUrl: '',
    estado: 'proximamente',
  },
  {
    id: 4,
    nombre: 'Proyecto 4 — Próximamente',
    descripcion:
      'Aplicación funcional en preparación para el catálogo del curso de Arquitectura de Software, con repositorio independiente y despliegue automatizado en GitHub Pages.',
    tecnologias: ['Angular', 'TypeScript', 'GitHub Actions'],
    caracteristicas: [
      'Repositorio independiente con flujo de trabajo CI/CD.',
      'Construcción y publicación automatizada en GitHub Pages.',
      'Verificación automática de disponibilidad tras el despliegue.',
    ],
    repoUrl: '',
    demoUrl: '',
    estado: 'proximamente',
  },
  {
    id: 5,
    nombre: 'Proyecto 5 — Próximamente',
    descripcion:
      'Aplicación funcional en preparación para el catálogo del curso de Arquitectura de Software, con repositorio independiente y despliegue automatizado en GitHub Pages.',
    tecnologias: ['Angular', 'TypeScript', 'GitHub Actions'],
    caracteristicas: [
      'Repositorio independiente con flujo de trabajo CI/CD.',
      'Construcción y publicación automatizada en GitHub Pages.',
      'Verificación automática de disponibilidad tras el despliegue.',
    ],
    repoUrl: '',
    demoUrl: '',
    estado: 'proximamente',
  },
];
