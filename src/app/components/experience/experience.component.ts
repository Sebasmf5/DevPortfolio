import { Component, Input } from '@angular/core';
import {
  Award,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  LucideAngularModule,
} from 'lucide-angular';
import { ExperienceItem } from '../../interface/profile.interface';

/**
 * Componente presentacional de Experiencia y Logros (`app-experience`).
 *
 * Se utiliza para mostrar la línea de tiempo con los roles, logros técnicos verificables
 * y tecnologías aplicadas.
 *
 * @remarks
 * Recibe `experienceItems` desde el contenedor `ExperienceSectionComponent`
 * (`pages/experience-section`) mediante `@Input()`.
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño.
 *
 * @example
 * ```html
 * <app-experience [experienceItems]="experienceItems"></app-experience>
 * ```
 */
@Component({
  selector: 'app-experience',
  imports: [LucideAngularModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  /**
   * Listado de hitos de experiencia recibido desde la página contenedora.
   * @type {ExperienceItem[]}
   */
  @Input() experienceItems: ExperienceItem[] = [];

  /** Iconos de Lucide para encabezados, metadatos y logros verificables. */
  protected readonly icons = {
    briefcase: Briefcase,
    building: Building2,
    calendar: Calendar,
    check: CheckCircle2,
    award: Award,
  };
}
