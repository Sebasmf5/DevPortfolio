import { Component, OnInit, inject } from '@angular/core';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { Project } from '../../interface/project.interface';
import { State } from '../../interface/state.interface';
import { PROJECTS_DATA } from '../../mock/projects.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente contenedor de la sección de Proyectos (`pages/projects-section`).
 *
 * Se utiliza para consumir `PortfolioService.getProjects()` mediante Observables
 * y pasar el catálogo de 5 proyectos por `@Input()` al componente presentacional
 * `ProjectsComponent` (`components/projects`).
 *
 * @remarks
 * Sigue la arquitectura limpia de presentación vista en clase (Contenedor en `pages/` +
 * Organismo presentacional en `components/`).
 */
@Component({
  selector: 'app-projects-section',
  imports: [ProjectsComponent],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /**
   * Catálogo de los 5 proyectos obtenido desde el Observable.
   * @type {Project[]}
   */
  projects: Project[] = PROJECTS_DATA;

  /**
   * Estado actual de carga del contenedor.
   * @default 'init'
   */
  state: State = 'init';

  ngOnInit(): void {
    this.state = 'loading';
    this.portfolioService.getProjects().subscribe({
      next: (catalog) => {
        this.projects = catalog;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
