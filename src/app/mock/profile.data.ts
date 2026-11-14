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
  habilidadesTecnicas: [
    // Lenguajes
    { nombre: 'Java', categoria: 'Lenguajes', icono: 'devicon-java-plain', estado: 'base' },
    {
      nombre: 'JavaScript',
      categoria: 'Lenguajes',
      icono: 'devicon-javascript-plain',
      estado: 'base',
    },
    {
      nombre: 'TypeScript',
      categoria: 'Lenguajes',
      icono: 'devicon-typescript-plain',
      estado: 'aprendiendo',
    },
    { nombre: 'C', categoria: 'Lenguajes', icono: 'devicon-c-plain', estado: 'base' },
    { nombre: 'C++', categoria: 'Lenguajes', icono: 'devicon-cplusplus-plain', estado: 'base' },
    { nombre: 'Python', categoria: 'Lenguajes', icono: 'devicon-python-plain', estado: 'base' },
    {
      nombre: 'SQL',
      categoria: 'Lenguajes',
      icono: 'devicon-azuresqldatabase-plain',
      estado: 'base',
    },
    {
      nombre: 'Google Apps Script',
      categoria: 'Lenguajes',
      icono: 'devicon-googleappscript-plain',
      estado: 'base',
    },
    {
      nombre: 'Power Query (M)',
      categoria: 'Lenguajes',
      icono: 'file-spreadsheet',
      estado: 'base',
    },

    // Backend
    {
      nombre: 'Spring Boot',
      categoria: 'Backend',
      icono: 'devicon-spring-original',
      estado: 'base',
    },
    { nombre: 'API REST', categoria: 'Backend', icono: 'webhook', estado: 'base' },
    {
      nombre: 'Node.js',
      categoria: 'Backend',
      icono: 'devicon-nodejs-plain',
      estado: 'aprendiendo',
    },
    {
      nombre: 'Express',
      categoria: 'Backend',
      icono: 'devicon-express-original',
      estado: 'aprendiendo',
    },
    { nombre: 'WebSockets', categoria: 'Backend', icono: 'radio', estado: 'base' },
    { nombre: 'JWT', categoria: 'Backend', icono: 'devicon-jwt-plain', estado: 'base' },
    {
      nombre: 'JPA',
      categoria: 'Backend',
      icono: 'devicon-hibernate-plain',
      estado: 'base',
    },
    { nombre: 'Flyway', categoria: 'Backend', icono: 'devicon-flyway-plain', estado: 'base' },

    // Frontend
    {
      nombre: 'Angular',
      categoria: 'Frontend',
      icono: 'devicon-angular-plain',
      estado: 'base',
    },
    { nombre: 'HTML', categoria: 'Frontend', icono: 'devicon-html5-plain', estado: 'base' },
    { nombre: 'CSS', categoria: 'Frontend', icono: 'devicon-css3-plain', estado: 'base' },
    {
      nombre: 'Bootstrap 5',
      categoria: 'Frontend',
      icono: 'devicon-bootstrap-plain',
      estado: 'base',
    },
    {
      nombre: 'React + Vite',
      categoria: 'Frontend',
      icono: 'devicon-react-original',
      estado: 'base',
    },
    {
      nombre: 'Next.js',
      categoria: 'Frontend',
      icono: 'devicon-nextjs-plain',
      estado: 'base',
    },
    {
      nombre: 'Microfrontends',
      categoria: 'Frontend',
      icono: 'layout-grid',
      estado: 'base',
    },

    // Datos
    {
      nombre: 'PostgreSQL',
      categoria: 'Datos',
      icono: 'devicon-postgresql-plain',
      estado: 'base',
    },
    { nombre: 'Redis', categoria: 'Datos', icono: 'devicon-redis-plain', estado: 'base' },
    {
      nombre: 'RabbitMQ',
      categoria: 'Datos',
      icono: 'devicon-rabbitmq-original',
      estado: 'base',
    },
    {
      nombre: 'Google Sheets',
      categoria: 'Datos',
      icono: 'table-2',
      estado: 'base',
    },
    { nombre: 'Power BI', categoria: 'Datos', icono: 'bar-chart-3', estado: 'base' },

    // DevOps
    { nombre: 'Docker', categoria: 'DevOps', icono: 'devicon-docker-plain', estado: 'base' },
    { nombre: 'Dokploy', categoria: 'DevOps', icono: 'server-cog', estado: 'base' },
    { nombre: 'Render', categoria: 'DevOps', icono: 'cloud-cog', estado: 'base' },
    { nombre: 'Neon', categoria: 'DevOps', icono: 'database', estado: 'base' },
    {
      nombre: 'Git/GitHub Flow',
      categoria: 'DevOps',
      icono: 'devicon-git-plain',
      estado: 'base',
    },
    {
      nombre: 'Conventional Commits',
      categoria: 'DevOps',
      icono: 'git-commit-horizontal',
      estado: 'base',
    },
    {
      nombre: 'GitHub Actions y Pages',
      categoria: 'DevOps',
      icono: 'devicon-githubactions-plain',
      estado: 'base',
    },

    // IoT
    {
      nombre: 'ESP32-S3',
      categoria: 'IoT',
      icono: 'cpu',
      estado: 'base',
    },
    {
      nombre: 'PlatformIO',
      categoria: 'IoT',
      icono: 'devicon-embeddedc-plain',
      estado: 'base',
    },
    {
      nombre: 'MQTT (EMQX con TLS)',
      categoria: 'IoT',
      icono: 'wifi',
      estado: 'base',
    },
    { nombre: 'I2C', categoria: 'IoT', icono: 'cable', estado: 'base' },
    { nombre: 'UART', categoria: 'IoT', icono: 'binary', estado: 'base' },
    { nombre: 'GPIO', categoria: 'IoT', icono: 'circuit-board', estado: 'base' },
    { nombre: 'Sensor SHT31', categoria: 'IoT', icono: 'thermometer', estado: 'base' },
    { nombre: 'Pantalla OLED', categoria: 'IoT', icono: 'monitor', estado: 'base' },

    // Pruebas
    {
      nombre: 'JUnit 5',
      categoria: 'Pruebas',
      icono: 'devicon-junit-plain',
      estado: 'base',
    },
    { nombre: 'Mockito', categoria: 'Pruebas', icono: 'flask-conical', estado: 'base' },
    {
      nombre: 'Spring Boot Test',
      categoria: 'Pruebas',
      icono: 'devicon-spring-original',
      estado: 'base',
    },
    {
      nombre: 'Vitest',
      categoria: 'Pruebas',
      icono: 'devicon-vitest-plain',
      estado: 'base',
    },

    // Arquitectura
    {
      nombre: 'Clean/Hexagonal',
      categoria: 'Arquitectura',
      icono: 'hexagon',
      estado: 'base',
    },
    {
      nombre: 'Monolito modular',
      categoria: 'Arquitectura',
      icono: 'boxes',
      estado: 'base',
    },
    {
      nombre: 'Patrones de diseño (Builder, Adapter, Flyweight, Observer)',
      categoria: 'Arquitectura',
      icono: 'puzzle',
      estado: 'base',
    },
    {
      nombre: 'Sistemas distribuidos (CORBA, Java RMI)',
      categoria: 'Arquitectura',
      icono: 'network',
      estado: 'base',
    },

    // Automatización
    { nombre: 'CacheService', categoria: 'Automatización', icono: 'zap', estado: 'base' },
    { nombre: 'LockService', categoria: 'Automatización', icono: 'lock', estado: 'base' },
    {
      nombre: 'Correos automáticos',
      categoria: 'Automatización',
      icono: 'mail-check',
      estado: 'base',
    },
    {
      nombre: 'Formularios y registro por QR',
      categoria: 'Automatización',
      icono: 'qr-code',
      estado: 'base',
    },

    // Otros
    {
      nombre: 'Programación competitiva (ICPC, grafos, programación dinámica)',
      categoria: 'Otros',
      icono: 'trophy',
      estado: 'base',
    },
    {
      nombre: 'IA (curso Huawei: NLP y visión)',
      categoria: 'Otros',
      icono: 'brain-circuit',
      estado: 'base',
    },
    {
      nombre: 'Redacción científica',
      categoria: 'Otros',
      icono: 'book-open-check',
      estado: 'base',
    },
  ],
  habilidadesBlandas: [
    {
      nombre: 'Innovación',
      icono: 'lightbulb',
      evidencia:
        'Automaticé el préstamo de implementos en Bienestar con Apps Script y Sheets, antes manual.',
    },
    {
      nombre: 'Creatividad',
      icono: 'sparkles',
      evidencia: 'Formularios dinámicos y registro de asistencia por QR para eventos.',
    },
    {
      nombre: 'Comunicación',
      icono: 'mic',
      evidencia:
        'Moderador de un bloque del podcast de Pensamiento Computacional y autor de un artículo de divulgación sobre el juez virtual.',
    },
    {
      nombre: 'Proactividad',
      icono: 'rocket',
      evidencia: 'Detecté procesos manuales en Bienestar y los automaticé.',
    },
    {
      nombre: 'Liderazgo',
      icono: 'users',
      evidencia: '',
    },
  ],
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
    {
      id: 'semillero-goslint',
      role: 'Integrante del Semillero de Programación Competitiva Goslint',
      organization: 'Unidad Central del Valle del Cauca (UCEVA)',
      period: '2023 - Actualidad',
      summary:
        'Entrenamiento en algoritmia avanzada, estructuras de datos y divulgación académica en ciencias de la computación.',
      achievements: [
        'Participación en programación competitiva (ICPC), aplicando teoría de grafos y programación dinámica en C, C++ y Java.',
        'Autor de un artículo de divulgación científica sobre el juez virtual.',
        'Moderador de un bloque del podcast de Pensamiento Computacional.',
      ],
      technologies: ['C', 'C++', 'Java', 'Algoritmia ICPC', 'Grafos', 'Programación Dinámica'],
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
