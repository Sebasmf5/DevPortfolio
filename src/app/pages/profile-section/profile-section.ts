import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ProfileComponent } from '../../components/profile/profile.component';
import { BentoHighlight, ProfileData } from '../../interface/profile.interface';
import { State } from '../../interface/state.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente contenedor de la sección de Perfil Profesional (`pages/profile-section`).
 *
 * Se utiliza para gestionar la obtención de los datos del perfil y las tarjetas Bento
 * mediante Observables y pasarlos por `@Input()` al componente presentacional `ProfileComponent`
 * (`components/profile`).
 *
 * @remarks
 * Sigue la arquitectura limpia de presentación vista en clase (Contenedor en `pages/` +
 * Organismo presentacional en `components/`).
 */
@Component({
  selector: 'app-profile-section',
  imports: [ProfileComponent],
  templateUrl: './profile-section.html',
  styleUrl: './profile-section.scss',
})
export class ProfileSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  @ViewChild(ProfileComponent) private profileComponent?: ProfileComponent;

  /**
   * Datos del perfil profesional obtenidos desde el Observable del servicio.
   * @type {ProfileData}
   */
  profile: ProfileData = PROFILE_DATA;

  /**
   * Listado de tarjetas Bento obtenidas desde el Observable del servicio.
   * @type {BentoHighlight[]}
   */
  bentoCards: BentoHighlight[] = PROFILE_DATA.bentoHighlights;

  /**
   * Estado actual de carga del contenedor.
   * @default 'init'
   */
  state: State = 'init';

  ngOnInit(): void {
    this.state = 'loading';
    this.portfolioService.getProfile().subscribe({
      next: (profileData) => {
        this.profile = profileData;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });

    this.portfolioService.getBentoHighlights().subscribe({
      next: (highlights) => {
        this.bentoCards = highlights;
      },
    });
  }

  /**
   * Delega el manejo de error de carga de fotografía al componente presentacional `ProfileComponent`.
   */
  onAvatarError(): void {
    this.profileComponent?.onAvatarError(false);
  }
}
