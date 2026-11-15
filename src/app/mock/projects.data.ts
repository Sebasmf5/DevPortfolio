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
    nombre: 'TAP — Gestión de Asistencia, Certificados y Préstamos',
    descripcion:
      'Prototipo para la toma de asistencia rápida en eventos masivos y la gestión de inventarios y préstamos, con envío de certificados de participación y registro por QR. Nota: el código fuente y el despliegue con GitHub Actions se encuentran en la rama develop.',
    tecnologias: [
      'TypeScript',
      'React + Vite',
      'Node.js',
      'PostgreSQL',
      'GitHub Actions',
      'Vitest',
    ],
    caracteristicas: [
      'Toma de asistencia rápida mediante lectura de códigos QR en eventos masivos.',
      'Generación y envío automatizado de certificados de participación.',
      'Gestión de inventarios y control de préstamos de implementos.',
      'Despliegue continuo con GitHub Actions configurado en la rama develop bajo el subdominio tap.sebasmf.dev.',
    ],
    repoUrl: 'https://github.com/Sebasmf5/TAP/tree/develop',
    demoUrl: 'https://tap.sebasmf.dev/',
    estado: 'publicado',
  },
  {
    id: 3,
    nombre: 'Uceva Astro SSG & Angular SPA — Catálogo Tecnológico',
    descripcion:
      'Monorepo comparativo de arquitecturas de renderizado web que implementa un catálogo de hardware y gestión de datos (Intel, AMD Ryzen, Apple Mac, Productos y Usuarios) bajo dos paradigmas: Static Site Generation (SSG) con Astro y Single Page Application (SPA) con Angular.',
    tecnologias: ['Astro', 'Angular', 'TypeScript', 'Bootstrap 5', 'RxJS', 'GitHub Actions'],
    caracteristicas: [
      'Implementación dual SSG (Astro 5) y SPA (Angular Standalone) para contrastar generación estática frente a renderizado en cliente.',
      'Módulos tipados de procesadores Intel, AMD Ryzen, equipos Apple Mac, catálogo de productos y directorio de usuarios.',
      'Arquitectura modular en Angular con páginas contenedoras (pages/), tablas reutilizables (components/), servicios e interceptores.',
      'Pipeline CI/CD en GitHub Actions que compila y publica tanto Astro SSG como Angular SPA (/angular/) en GitHub Pages.',
    ],
    repoUrl: 'https://github.com/Sebasmf5/Uceva-Astro-Angular-SSG-SPA',
    demoUrl: 'https://sebasmf5.github.io/Uceva-Astro-Angular-SSG-SPA/',
    estado: 'publicado',
  },
  {
    id: 4,
    nombre: 'Angular Modules Template — Introducción a Angular',
    descripcion:
      'Aplicación introductoria desarrollada en Angular para explorar la organización de una aplicación mediante módulos y componentes.',
    tecnologias: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'GitHub Actions'],
    caracteristicas: [
      'Introducción a la estructura modular de Angular.',
      'Componentes organizados mediante módulos reutilizables.',
      'Actualización y publicación automatizada desde la rama develop.',
    ],
    repoUrl: 'https://github.com/Sebasmf5/Uceva-Angular-Parcial-Practico-I/tree/develop',
    demoUrl: 'https://sebasmf5.github.io/Uceva-Angular-Parcial-Practico-I/',
    estado: 'publicado',
  },
  {
    id: 5,
    nombre: 'UCEVA Storage Manager',
    descripcion:
      'Librería open-source para Angular 20 y TypeScript que encapsula LocalStorage y Cache Storage mediante una interfaz tipada, serialización JSON automática y manejo estandarizado de errores.',
    tecnologias: [
      'Angular 20',
      'TypeScript',
      'Jest',
      'Compodoc',
      'NPM',
      'GitHub Actions',
      'GitHub Pages',
    ],
    caracteristicas: [
      'API tipada con espacios de nombres por prefijo y serialización JSON automática.',
      'Separación estricta entre la API pública y la implementación interna, con errores StorageError estandarizados.',
      'Pruebas unitarias con Jest al 100% de cobertura y documentación técnica con Compodoc.',
      'Publicación en NPM mediante GitHub Actions y aplicación Showcase desplegada en GitHub Pages.',
    ],
    repoUrl: 'https://github.com/Sebasmf5/uceva-storage-manager',
    demoUrl: 'https://sebasmf5.github.io/uceva-storage-manager/',
    estado: 'publicado',
  },
];
