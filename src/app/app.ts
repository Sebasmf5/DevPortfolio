import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProfileData } from './interface/profile.interface';
import { PROFILE_DATA } from './mock/profile.data';
import { PortfolioService } from './services/portfolio.service';

/**
 * Componente raíz de la aplicación.
 * Integra el layout principal (`app-navbar`, contenedor de capítulos y `app-footer`),
 * consume el perfil mediante Observables (`PortfolioService`) y sincroniza las rutas limpias.
 */
@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly portfolioService = inject(PortfolioService);

  protected readonly profile = signal<ProfileData>(PROFILE_DATA);

  constructor() {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        const segment = event.urlAfterRedirects.replace(/^\//, '').split('/')[0];
        if (segment && typeof document !== 'undefined') {
          const element = document.getElementById(segment);
          if (element && typeof element.scrollIntoView === 'function') {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
  }

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile.set(data);
    });
  }
}
