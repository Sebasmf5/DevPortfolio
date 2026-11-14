import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BentoHighlight, ProfileData } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Sección de Perfil Profesional (Hero + Cuadrícula Bento).
 * Consume `PortfolioService` mediante Observables (RxJS) y presenta:
 * - Avatar con soporte para fotografía (`assets/images/profile.jpg`) y respaldo de iniciales (`SM`).
 * - Encabezado luminoso y resumen profesional.
 * - Cuadrícula Bento con los 4 pilares: Estudios, Distinción Andrés Bello, Semillero Goslint y Bienestar.
 */
@Component({
  selector: 'app-profile-section',
  imports: [RouterLink],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.scss',
})
export class ProfileSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /** Estado reactivo del perfil cargado desde el Observable del servicio. */
  protected readonly profile = signal<ProfileData>(PROFILE_DATA);

  /** Tarjetas destacadas de la cuadrícula Bento cargadas por Observable. */
  protected readonly bentoCards = signal<BentoHighlight[]>(PROFILE_DATA.bentoHighlights);

  /** Controla si la imagen de perfil falló al cargar para mostrar el avatar con iniciales. */
  protected readonly imageLoadFailed = signal<boolean>(false);

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((profileData) => {
      this.profile.set(profileData);
    });

    this.portfolioService.getBentoHighlights().subscribe((highlights) => {
      this.bentoCards.set(highlights);
    });
  }

  /**
   * Activa el avatar de respaldo con iniciales cuando el archivo de imagen aún no existe.
   */
  onAvatarError(): void {
    this.imageLoadFailed.set(true);
  }
}
