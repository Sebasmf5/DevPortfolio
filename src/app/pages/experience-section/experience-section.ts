import { Component, OnInit, inject, signal } from '@angular/core';
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  LucideAngularModule,
} from 'lucide-angular';
import { ExperienceItem } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente de la sección de Experiencia y Logros (`#experiencia`).
 * Consume `PortfolioService.getExperience()` mediante Observables (RxJS) y presenta
 * la trayectoria institucional en la Vicerrectoría de Bienestar Universitario y el Semillero Goslint.
 */
@Component({
  selector: 'app-experience-section',
  imports: [LucideAngularModule],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /** Lista reactiva de hitos de experiencia y logros técnicos. */
  protected readonly experienceItems = signal<ExperienceItem[]>(PROFILE_DATA.experiencia);

  /** Iconos de Lucide para encabezados, metadatos y logros verificables. */
  protected readonly icons = {
    briefcase: Briefcase,
    building: Building2,
    calendar: Calendar,
    check: CheckCircle2,
    award: Award,
  };

  ngOnInit(): void {
    this.portfolioService.getExperience().subscribe((items) => {
      this.experienceItems.set(items);
    });
  }
}
