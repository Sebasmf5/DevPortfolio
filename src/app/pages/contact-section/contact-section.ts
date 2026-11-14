import { Component, OnInit, inject, signal } from '@angular/core';
import {
  ArrowUpRight,
  Code2,
  Compass,
  LucideAngularModule,
  Mail,
  MapPin,
  Share2,
  Sparkles,
} from 'lucide-angular';
import { ProfileData } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente de la sección de Contacto (`#contacto`).
 * Sigue el patrón "Illustrated closing choice" del sistema de diseño (dos paneles de conversión)
 * y consume `PortfolioService.getProfile()` mediante Observables (RxJS).
 */
@Component({
  selector: 'app-contact-section',
  imports: [LucideAngularModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /** Estado reactivo con los datos de perfil y contacto. */
  protected readonly profile = signal<ProfileData>(PROFILE_DATA);

  /** Iconos de Lucide para los paneles de conversión y enlaces de contacto. */
  protected readonly icons = {
    code: Code2,
    mail: Mail,
    share: Share2,
    mapPin: MapPin,
    arrowUpRight: ArrowUpRight,
    sparkles: Sparkles,
    compass: Compass,
  };

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile.set(data);
    });
  }
}
