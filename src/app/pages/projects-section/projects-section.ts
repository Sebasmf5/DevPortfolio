import { Component, OnInit, computed, inject, signal } from '@angular/core';
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
import { PROJECTS_DATA } from '../../mock/projects.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente de la sección de Proyectos (`#proyectos`).
 * Consume el catálogo de 5 proyectos desde `PortfolioService.getProjects()` mediante Observables (RxJS).
 * Para agregar o activar un proyecto, basta con actualizar su entrada en `src/app/mock/projects.data.ts`.
 */
@Component({
  selector: 'app-projects-section',
  imports: [LucideAngularModule],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
})
export class ProjectsSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /** Catálogo reactivo de los 5 proyectos del portafolio. */
  protected readonly projects = signal<Project[]>(PROJECTS_DATA);

  /** Conteo reactivo de proyectos publicados frente al total del catálogo. */
  protected readonly publishedCount = computed(
    () => this.projects().filter((project) => project.estado !== 'proximamente').length,
  );

  /** Iconos de Lucide utilizados en las tarjetas de proyectos. */
  protected readonly icons = {
    folderGit: FolderGit2,
    code: Code2,
    externalLink: ExternalLink,
    check: CheckCircle2,
    clock: Clock,
    sparkles: Sparkles,
  };

  ngOnInit(): void {
    this.portfolioService.getProjects().subscribe((catalog) => {
      this.projects.set(catalog);
    });
  }

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
