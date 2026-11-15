import { Component, OnInit, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { FooterComponent } from './components/footer/footer';
import { NavbarComponent } from './components/navbar/navbar';
import { ProfileData } from './interface/profile.interface';
import { PROFILE_DATA } from './mock/profile.data';
import { ContactSectionComponent } from './pages/contact-section/contact-section';
import { ExperienceSectionComponent } from './pages/experience-section/experience-section';
import { ProfileSectionComponent } from './pages/profile-section/profile-section';
import { ProjectsSectionComponent } from './pages/projects-section/projects-section';
import { SkillsSectionComponent } from './pages/skills-section/skills-section';
import { PortfolioService } from './services/portfolio.service';

/**
 * Componente raíz de la aplicación.
 * Integra el layout principal (`app-navbar`, secciones modulares y `app-footer`),
 * consume el perfil mediante Observables (`PortfolioService`) y sincroniza las rutas limpias.
 */
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    ProfileSectionComponent,
    SkillsSectionComponent,
    ExperienceSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  /** Enrutador de Angular utilizado para sincronizar la navegación con el desplazamiento entre secciones. */
  private readonly router = inject(Router);

  /** Servicio reactivo del portafolio que expone los datos mediante Observables. */
  private readonly portfolioService = inject(PortfolioService);

  /** Señal reactiva con los datos generales del perfil del estudiante. */
  protected readonly profile = signal<ProfileData>(PROFILE_DATA);

  /**
   * Suscribe el desplazamiento suave de pantalla a los eventos de navegación de rutas limpias.
   */
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

  /**
   * Inicializa el componente raíz suscribiéndose al Observable del perfil profesional.
   */
  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile.set(data);
    });
  }
}
