import { Routes } from '@angular/router';

/**
 * Rutas limpias del portafolio (sin Hash #).
 * El fallback `404.html` configurado en GitHub Actions redirige estas rutas
 * hacia `index.html` para que funcionen al recargar o compartir enlaces directos.
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'perfil' },
  { path: 'perfil', children: [] },
  { path: 'habilidades', children: [] },
  { path: 'experiencia', children: [] },
  { path: 'proyectos', children: [] },
  { path: 'contacto', children: [] },
  { path: '**', redirectTo: 'perfil' },
];
