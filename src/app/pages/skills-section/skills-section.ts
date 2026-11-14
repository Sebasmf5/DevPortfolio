import { Component, OnInit, inject } from '@angular/core';
import { SkillsComponent } from '../../components/skills/skills.component';
import { SoftSkillItem, TechnicalSkillItem } from '../../interface/profile.interface';
import { State } from '../../interface/state.interface';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente contenedor de la sección de Habilidades (`pages/skills-section`).
 *
 * Se utiliza para consumir los Observables de habilidades técnicas y blandas desde
 * `PortfolioService` y enviarlos mediante `@Input()` al componente presentacional
 * `SkillsComponent` (`components/skills`).
 *
 * @remarks
 * Sigue la arquitectura limpia de presentación vista en clase (Contenedor en `pages/` +
 * Organismo presentacional en `components/`).
 */
@Component({
  selector: 'app-skills-section',
  imports: [SkillsComponent],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /**
   * Lista de conocimientos técnicos obtenida desde el Observable.
   * @type {TechnicalSkillItem[]}
   */
  technicalSkills: TechnicalSkillItem[] = [];

  /**
   * Lista de habilidades blandas obtenida desde el Observable.
   * @type {SoftSkillItem[]}
   */
  softSkills: SoftSkillItem[] = [];

  /**
   * Estado actual de carga del contenedor.
   * @default 'init'
   */
  state: State = 'init';

  ngOnInit(): void {
    this.state = 'loading';
    this.portfolioService.getTechnicalSkills().subscribe({
      next: (skills) => {
        this.technicalSkills = skills;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });

    this.portfolioService.getSoftSkills().subscribe({
      next: (skills) => {
        this.softSkills = skills;
      },
    });
  }
}
