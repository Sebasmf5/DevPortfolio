import { Component, Input } from '@angular/core';
import {
  BarChart3,
  Binary,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  Cable,
  CircuitBoard,
  CloudCog,
  Cpu,
  Database,
  DatabaseZap,
  FileSpreadsheet,
  FlaskConical,
  GitCommitHorizontal,
  Hexagon,
  KeyRound,
  LUCIDE_ICONS,
  LayoutGrid,
  Lightbulb,
  Lock,
  LucideAngularModule,
  LucideIconProvider,
  MailCheck,
  Mic,
  Monitor,
  Network,
  Puzzle,
  QrCode,
  Radio,
  Rocket,
  ServerCog,
  Sparkles,
  Table2,
  Thermometer,
  Trophy,
  Users,
  Webhook,
  Wifi,
  Zap,
} from 'lucide-angular';
import {
  SKILL_CATEGORIES,
  SkillCategory,
  SoftSkillItem,
  TechnicalSkillItem,
} from '../../interface/profile.interface';

/** Mapa de iconos de Lucide registrados para habilidades técnicas sin marca y habilidades blandas. */
const SKILL_LUCIDE_ICONS = {
  BarChart3,
  Binary,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  Cable,
  CircuitBoard,
  CloudCog,
  Cpu,
  Database,
  DatabaseZap,
  FileSpreadsheet,
  FlaskConical,
  GitCommitHorizontal,
  Hexagon,
  KeyRound,
  LayoutGrid,
  Lightbulb,
  Lock,
  MailCheck,
  Mic,
  Monitor,
  Network,
  Puzzle,
  QrCode,
  Radio,
  Rocket,
  ServerCog,
  Sparkles,
  Table2,
  Thermometer,
  Trophy,
  Users,
  Webhook,
  Wifi,
  Zap,
};

/** Grupo de tecnologías por categoría para renderizado con subtítulo propio. */
export interface SkillCategoryGroup {
  /** Nombre de la categoría técnica agrupada. */
  categoria: SkillCategory;
  /** Lista de tecnologías pertenecientes a la categoría. */
  items: TechnicalSkillItem[];
}

/**
 * Componente presentacional de Habilidades Técnicas y Blandas (`app-skills`).
 *
 * Se utiliza para mostrar las tecnologías agrupadas por las 10 categorías de ingeniería
 * y las tarjetas de habilidades blandas con evidencia verificable.
 *
 * @remarks
 * Recibe `technicalSkills` y `softSkills` desde el contenedor `SkillsSectionComponent`
 * (`pages/skills-section`) mediante `@Input()`.
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño.
 *
 * @example
 * ```html
 * <app-skills [technicalSkills]="technicalSkills" [softSkills]="softSkills"></app-skills>
 * ```
 */
@Component({
  selector: 'app-skills',
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(SKILL_LUCIDE_ICONS),
    },
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  /**
   * Lista de conocimientos técnicos recibida desde la página contenedora.
   * @type {TechnicalSkillItem[]}
   */
  @Input() technicalSkills: TechnicalSkillItem[] = [];

  /**
   * Lista de habilidades blandas recibida desde la página contenedora.
   * @type {SoftSkillItem[]}
   */
  @Input() softSkills: SoftSkillItem[] = [];

  /**
   * Tecnologías agrupadas por las 10 categorías definidas.
   */
  get groupedTechnicalSkills(): SkillCategoryGroup[] {
    return SKILL_CATEGORIES.map((categoria) => ({
      categoria,
      items: this.technicalSkills.filter((item) => item.categoria === categoria),
    })).filter((group) => group.items.length > 0);
  }

  /**
   * Habilidades blandas visibles: filtra cualquier entrada con evidencia vacía
   * para garantizar que nunca se renderice una tarjeta incompleta.
   */
  get visibleSoftSkills(): SoftSkillItem[] {
    return this.softSkills.filter((item) => item.evidencia.trim().length > 0);
  }

  /**
   * Determina si el icono corresponde a una clase del paquete `devicon`.
   */
  isDevicon(iconName: string): boolean {
    return iconName.startsWith('devicon-');
  }
}
