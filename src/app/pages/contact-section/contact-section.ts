import { Component, OnInit, inject } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';
import { ProfileData } from '../../interface/profile.interface';
import { State } from '../../interface/state.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Componente contenedor de la sección de Contacto (`pages/contact-section`).
 *
 * Se utiliza para consumir `PortfolioService.getProfile()` mediante Observables
 * y pasar los datos de contacto y mensaje de cierre por `@Input()` al componente
 * presentacional `ContactComponent` (`components/contact`).
 *
 * @remarks
 * Sigue la arquitectura limpia de presentación vista en clase (Contenedor en `pages/` +
 * Organismo presentacional en `components/`).
 */
@Component({
  selector: 'app-contact-section',
  imports: [ContactComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSectionComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  /**
   * Datos de perfil y contacto obtenidos desde el Observable.
   * @type {ProfileData}
   */
  profile: ProfileData = PROFILE_DATA;

  /**
   * Estado actual de carga del contenedor.
   * @default 'init'
   */
  state: State = 'init';

  ngOnInit(): void {
    this.state = 'loading';
    this.portfolioService.getProfile().subscribe({
      next: (data) => {
        this.profile = data;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
