import { Component, Input } from '@angular/core';
import {
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  FolderGit2,
  LucideAngularModule,
  Sparkles,
} from 'lucide-angular';
import { Project } from '../../interface/project.interface';

/**
 * Componente presentacional del Catálogo de Proyectos (`app-projects`).
 *
 * Se utiliza para renderizar las 5 tarjetas de proyectos con su estado (`Publicado` / `Próximamente`),
 * características principales, tecnologías y enlaces a `demoUrl` y `repoUrl`.
 *
 * @remarks
 * Recibe `projects` desde el contenedor `ProjectsSectionComponent` (`pages/projects-section`)
 * mediante `@Input()`.
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño.
 *
 * @example
 * ```html
 * <app-projects [projects]="projects"></app-projects>
 * ```
 */
@Component({
  selector: 'app-projects',
  imports: [LucideAngularModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  /**
   * Catálogo de los 5 proyectos recibido desde la página contenedora.
   * @type {Project[]}
   */
  @Input() projects: Project[] = [];

  /** Conteo de proyectos publicados frente al total del catálogo. */
  get publishedCount(): number {
    return this.projects.filter((project) => project.estado !== 'proximamente').length;
  }

  /** Iconos de Lucide utilizados en las tarjetas de proyectos. */
  protected readonly icons = {
    folderGit: FolderGit2,
    code: Code2,
    externalLink: ExternalLink,
    check: CheckCircle2,
    clock: Clock,
    sparkles: Sparkles,
  };

  /**
   * Determina si un proyecto se encuentra publicado y con enlaces activos.
   */
  protected isPublished(project: Project): boolean {
    return (
      project.estado !== 'proximamente' &&
      project.repoUrl.trim().length > 0 &&
      project.demoUrl.trim().length > 0
    );
  }

  /**
   * Formatea el índice numérico del proyecto con dos dígitos (ej. `01` a `05`).
   */
  protected formatProjectIndex(id: number): string {
    return id.toString().padStart(2, '0');
  }
}
