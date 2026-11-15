# Dev Portfolio — Catálogo Digital de Ingeniería

Portafolio profesional y catálogo centralizado de proyectos de ingeniería de software desarrollado para la asignatura **Arquitectura de Software** en la **Unidad Central del Valle del Cauca (UCEVA)**.

- **Autor:** Sebastián Morales Flórez (`@Sebasmf5`)
- **Programa:** Ingeniería de Sistemas (2023 – Actualidad) — UCEVA
- **Asignatura:** Arquitectura de Software — Corte III
- **Docente:** Jesus David Mejia Vergara
- **Sitio en producción (dominio propio):** [https://sebasmf.dev](https://sebasmf.dev)
- **URL alternativa en GitHub Pages:** [https://sebasmf5.github.io/DevPortfolio/](https://sebasmf5.github.io/DevPortfolio/)
- **Repositorio:** [https://github.com/Sebasmf5/DevPortfolio](https://github.com/Sebasmf5/DevPortfolio)

---

## 1. Propósito y Características Principales

Aplicación web *Single Page Application (SPA)* construida en **Angular 21** que actúa como punto de acceso central a la información académica, habilidades técnicas y blandas con evidencia verificable, experiencia institucional en la Vicerrectoría de Bienestar Universitario y el catálogo de **5 proyectos** desplegados con flujos automatizados de **GitHub Actions** y **GitHub Pages**.

- **Arquitectura Modular y Reactiva:** Componentes *standalone* desacoplados de los datos mediante interfaces estrictas (`src/app/interface/`), mocks tipados (`src/app/mock/`) y servicios reactivos basados en **RxJS Observables** (`PortfolioService`, `ThemeService`).
- **Sistema de Doble Tema (`dark` / `light`):** Tema oscuro de precisión inspirado en sistemas de ingeniería (*obsidian slate* `#05060f`, bordes *hairline* translúcidos y acentos *periwinkle* `#c2ccff`) y tema claro de alto contraste con cumplimiento **WCAG AA** (> 4.5:1), persistido en `localStorage` y sincronizado con `prefers-color-scheme`.
- **Iconografía Técnica y Accesibilidad:** Integración con `devicon` (monocromo azul hielo en reposo y color de marca original en `:hover` / `:focus-visible`) y `lucide-angular` para conceptos arquitectónicos y habilidades blandas, sin saltos de layout.
- **Rutas Limpias sin Hash (`#`):** Navegación HTML5 (`/perfil`, `/habilidades`, `/experiencia`, `/proyectos`, `/contacto`) respaldada por generación automática de `404.html` en el pipeline de despliegue.
- **Pipeline CI/CD Completo:** Verificación automática de formato y compilación (`npm run lint`), pruebas unitarias headless con Vitest (`npm test`), empaquetado de producción (`npm run build`), publicación en GitHub Pages y comprobación automática de disponibilidad (`HTTP 200`).

---

## 2. Arquitectura del Proyecto

```text
devPortfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Pipeline CI/CD (build, test, deploy y verificación HTTP 200)
├── public/
│   ├── CNAME                           # Dominio personalizado para GitHub Pages (sebasmf.dev)
│   └── assets/
│       └── images/                     # Fotografía opcional (profile.jpg) e imágenes de proyectos
└── src/
    ├── styles/
    │   ├── _tokens.scss                # Variables CSS semánticas para temas oscuro y claro
    │   └── _layout.scss                # Utilidades de contenedor, rejillas y superficies glass
    ├── styles.scss                     # Punto de entrada global de estilos e importación de Devicon
    └── app/
        ├── components/                     # Organismos presentacionales (@Input) y layout transversal
        │   ├── navbar/                     # Barra de navegación flotante con selector de tema
        │   ├── footer/                     # Pie de página institucional con enlaces rápidos
        │   ├── profile/                    # Organismo presentacional del Hero (2 columnas) + Bento
        │   ├── skills/                     # Organismo presentacional de tecnologías y blandas
        │   ├── experience/                 # Organismo presentacional de línea de tiempo y logros
        │   ├── projects/                   # Organismo presentacional del catálogo de 5 proyectos
        │   └── contact/                    # Organismo presentacional de paneles de conversión
        ├── interface/
        │   ├── profile.interface.ts        # Contratos tipados de perfil, habilidades y experiencia
        │   ├── project.interface.ts        # Contrato tipado Project para el catálogo de 5 proyectos
        │   ├── state.interface.ts          # Estado de carga del contenedor ('init' | 'loading' | 'success' | 'error')
        │   └── theme.interface.ts          # Tipos del modo de color ('dark' | 'light')
        ├── mock/
        │   ├── profile.data.ts             # Datos únicos del perfil, tecnologías, blandas y experiencia
        │   └── projects.data.ts            # Catálogo tipado de los 5 proyectos del curso
        ├── pages/                          # Páginas contenedoras (consumen Observables y gestionan State)
        │   ├── profile-section/            # Contenedor de Perfil -> inyecta PortfolioService y alimenta <app-profile>
        │   ├── skills-section/             # Contenedor de Habilidades -> inyecta PortfolioService y alimenta <app-skills>
        │   ├── experience-section/         # Contenedor de Experiencia -> inyecta PortfolioService y alimenta <app-experience>
        │   ├── projects-section/           # Contenedor de Proyectos -> inyecta PortfolioService y alimenta <app-projects>
        │   └── contact-section/            # Contenedor de Contacto -> inyecta PortfolioService y alimenta <app-contact>
        └── services/
            ├── portfolio.service.ts    # Servicio reactivo con Observables (RxJS)
            └── theme.service.ts        # Gestión reactiva del tema con BehaviorSubject y Signals
```

---

## 3. Catálogo de los 5 Proyectos y Esquema Multi-Proyecto

| # | Proyecto | Estado | Dominio / URL de Despliegue | Repositorio |
| :-: | :--- | :---: | :--- | :--- |
| **01** | **Dev Portfolio — Catálogo Digital de Ingeniería** | `Publicado` | [https://sebasmf.dev](https://sebasmf.dev) | [Sebasmf5/DevPortfolio](https://github.com/Sebasmf5/DevPortfolio) |
| **02** | **TAP — Gestión de Asistencia, Certificados y Préstamos** *(Despliegue con GitHub Actions en la rama `develop`)* | `Publicado` | [https://tap.sebasmf.dev/](https://tap.sebasmf.dev/) | [Sebasmf5/TAP (rama `develop`)](https://github.com/Sebasmf5/TAP/tree/develop) |
| **03** | **Uceva Astro SSG & Angular SPA — Catálogo Tecnológico** *(Astro en raíz y Angular en `/angular/`)* | `Publicado` | [https://sebasmf5.github.io/Uceva-Astro-Angular-SSG-SPA/](https://sebasmf5.github.io/Uceva-Astro-Angular-SSG-SPA/) | [Sebasmf5/Uceva-Astro-Angular-SSG-SPA](https://github.com/Sebasmf5/Uceva-Astro-Angular-SSG-SPA) |
| **04** | **Angular Modules Template — Introducción a Angular** *(rama `develop`)* | `Publicado` | [https://sebasmf5.github.io/Uceva-Angular-Parcial-Practico-I/](https://sebasmf5.github.io/Uceva-Angular-Parcial-Practico-I/) | [Sebasmf5/Uceva-Angular-Parcial-Practico-I (rama `develop`)](https://github.com/Sebasmf5/Uceva-Angular-Parcial-Practico-I/tree/develop) |
| **05** | **UCEVA Storage Manager** *(librería open-source para Angular 20)* | `Publicado` | [https://sebasmf5.github.io/uceva-storage-manager/](https://sebasmf5.github.io/uceva-storage-manager/) | [Sebasmf5/uceva-storage-manager](https://github.com/Sebasmf5/uceva-storage-manager) |

### ¿Cómo activar o agregar un proyecto en 1 paso?

Edita únicamente [`src/app/mock/projects.data.ts`](src/app/mock/projects.data.ts) actualizando el objeto correspondiente con la interfaz [`Project`](src/app/interface/project.interface.ts):

```ts
{
  id: 2,
  nombre: 'Nombre del Proyecto 2',
  descripcion: 'Descripción clara de qué hace la aplicación y qué problema resuelve.',
  tecnologias: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
  caracteristicas: [
    'Característica principal 1',
    'Característica principal 2',
    'Despliegue continuo con GitHub Actions y GitHub Pages',
  ],
  repoUrl: 'https://github.com/Sebasmf5/nombre-repositorio',
  demoUrl: 'https://subdominio.sebasmf.dev',
  estado: 'publicado',
}
```

Al cambiar `estado` a `'publicado'` y definir `repoUrl` y `demoUrl` con URLs `https://` válidas, la tarjeta activa automáticamente los botones **Aplicación en vivo** y **Repositorio GitHub** y es validada por la suite de pruebas [`projects.data.spec.ts`](src/app/mock/projects.data.spec.ts).

### ¿Cómo colocar la fotografía de perfil?

Guarda tu fotografía en `public/assets/images/profile.jpg`. Si el archivo aún no existe o falla su carga, el componente [`ProfileSectionComponent`](src/app/pages/profile-section/profile-section.ts) muestra automáticamente el monograma **`SM`** sin mostrar imágenes rotas.

---

## 4. Requisitos e Instalación Local

- **Node.js:** `>= 20.19.0` (recomendado `v24.x` LTS, mismo entorno del workflow de GitHub Actions)
- **npm:** `>= 10.x`

```bash
# 1. Clonar el repositorio
git clone https://github.com/Sebasmf5/DevPortfolio.git
cd DevPortfolio

# 2. Instalar dependencias exactas del lockfile
npm ci

# 3. Iniciar servidor de desarrollo en http://localhost:4200
npm start
```

### Scripts de Calidad, Pruebas y Construcción

| Comando | Descripción |
| :--- | :--- |
| `npm start` | Inicia el servidor de desarrollo de Angular con recarga en vivo. |
| `npm run format` | Formatea todos los archivos `.ts`, `.html` y `.scss` con Prettier. |
| `npm run lint` | Verifica tipos con el compilador de Angular (`ngc --noEmit`) y estilo con Prettier. |
| `npm test` | Ejecuta las **27 pruebas unitarias** (11 archivos `.spec.ts`) en modo headless con Vitest. |
| `npm run build` | Genera el empaquetado optimizado de producción en `dist/devPortfolio/browser`. |

---

## 5. Flujo CI/CD con GitHub Actions y GitHub Pages

El archivo [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) automatiza todo el ciclo de integración y entrega continua:

1. **Activación (`on`):**
   - `push` y `pull_request` hacia las ramas `dev` y `main`.
   - `workflow_dispatch` manual con selector `deploy_target` (`custom_domain` o `github_io`).
2. **Job `build`:**
   - Descarga el repositorio (`actions/checkout@v4`) e instala Node.js 24 con caché de `npm`.
   - Ejecuta `npm ci`, `npm run lint` y `npm test`.
   - Construye la aplicación en modo producción:
     - Por defecto (`custom_domain`): `npm run build -- --configuration production --base-href "/"` conservando `public/CNAME` (`sebasmf.dev`).
     - Si se define la variable de repositorio `USE_GITHUB_IO=true` o se elige `github_io` manualmente: `npm run build -- --configuration production --base-href "/DevPortfolio/"` y remueve `CNAME` del artefacto.
   - Copia `index.html` a `404.html` para soportar rutas limpias SPA en GitHub Pages.
   - Empaqueta `dist/devPortfolio/browser` con `actions/upload-pages-artifact@v3`.
3. **Job `deploy`:**
   - En eventos `push` (o ejecución manual), publica el artefacto en el entorno `github-pages` usando `actions/deploy-pages@v4`.
4. **Job `verify`:**
   - Realiza hasta 12 intentos con `curl` contra la URL publicada y verifica que responda **`HTTP 200`** antes de dar por exitoso el pipeline.

---

## 6. Configuración DNS en Name.com para `sebasmf.dev`

1. En **GitHub** → **Settings** → **Pages**:
   - En **Build and deployment**, selecciona **Source: GitHub Actions**.
   - En **Custom domain**, ingresa `sebasmf.dev` y guarda.
2. En **Name.com** → **Manage DNS Records** de `sebasmf.dev`:
   - Crea los **4 registros `A`** para el host raíz (`@`) apuntando a las IPs oficiales de GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Crea un registro **`CNAME`** para el host `www` apuntando a `sebasmf5.github.io`.
   - Para el **Proyecto 2 en subdominio** (`<subdominio>.sebasmf.dev`), crea un registro **`CNAME`** adicional con host `<subdominio>` apuntando a `sebasmf5.github.io` e incluye un archivo `public/CNAME` con `<subdominio>.sebasmf.dev` en ese repositorio.
3. Una vez propagado el DNS, marca la casilla **Enforce HTTPS** en **GitHub → Settings → Pages**.
