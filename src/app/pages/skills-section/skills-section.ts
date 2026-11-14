import { Component, OnInit, computed, inject, signal } from '@angular/core';
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
import { PortfolioService } from '../../services/portfolio.service';

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
  categoria: SkillCategory;
  items: TechnicalSkillItem[];
}

/**
 * Sección de Habilidades Técnicas y Blandas (`#habilidades`).
 * - Consume `PortfolioService` mediante Observables.
 * - Agrupa las tecnologías por categoría con subtítulos de contraste AA.
 * - Renderiza iconos de Devicon (monocromo azul hielo; color original en hover) o Lucide Angular.
 * - Muestra la etiqueta "Aprendiendo" en lugar del punto decorativo únicamente cuando `estado === 'aprendiendo'`.
 * - Omite tarjetas de habilidades blandas cuya evidencia esté vacía.
 */
@Component({
  selector: 'app-skills-section',
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(SKILL_LUCIDE_ICONS),
    },
  ],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /** Lista completa de conocimientos técnicos recibida del Observable. */
  protected readonly technicalSkills = signal<TechnicalSkillItem[]>([]);

  /** Lista completa de habilidades blandas recibida del Observable. */
  protected readonly softSkills = signal<SoftSkillItem[]>([]);

  /** Tecnologías agrupadas por las 10 categorías definidas. */
  protected readonly groupedTechnicalSkills = computed<SkillCategoryGroup[]>(() => {
    const all = this.technicalSkills();
    return SKILL_CATEGORIES.map((categoria) => ({
      categoria,
      items: all.filter((item) => item.categoria === categoria),
    })).filter((group) => group.items.length > 0);
  });

  /**
   * Habilidades blandas visibles: filtra cualquier entrada con evidencia vacía
   * para garantizar que nunca se renderice una tarjeta incompleta.
   */
  protected readonly visibleSoftSkills = computed<SoftSkillItem[]>(() =>
    this.softSkills().filter((item) => item.evidencia.trim().length > 0),
  );

  ngOnInit(): void {
    this.portfolioService.getTechnicalSkills().subscribe((skills) => {
      this.technicalSkills.set(skills);
    });

    this.portfolioService.getSoftSkills().subscribe((skills) => {
      this.softSkills.set(skills);
    });
  }

  /**
   * Determina si el icono corresponde a una clase del paquete `devicon`.
   */
  isDevicon(iconName: string): boolean {
    return iconName.startsWith('devicon-');
  }
}
