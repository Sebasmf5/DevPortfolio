import { Component, OnInit, inject } from '@angular/core';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { ExperienceItem } from '../../interface/profile.interface';
import { State } from '../../interface/state.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente contenedor de la sección de Experiencia y Logros (`pages/experience-section`).
 *
 * Se utiliza para consumir `PortfolioService.getExperience()` mediante Observables
 * y pasar el listado por `@Input()` al componente presentacional `ExperienceComponent`
 * (`components/experience`).
 *
 * @remarks
 * Sigue la arquitectura limpia de presentación vista en clase (Contenedor en `pages/` +
 * Organismo presentacional en `components/`).
 */
@Component({
  selector: 'app-experience-section',
  imports: [ExperienceComponent],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /**
   * Listado de hitos de experiencia obtenido desde el Observable.
   * @type {ExperienceItem[]}
   */
  experienceItems: ExperienceItem[] = PROFILE_DATA.experiencia;

  /**
   * Estado actual de carga del contenedor.
   * @default 'init'
   */
  state: State = 'init';

  ngOnInit(): void {
    this.state = 'loading';
    this.portfolioService.getExperience().subscribe({
      next: (items) => {
        this.experienceItems = items;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
