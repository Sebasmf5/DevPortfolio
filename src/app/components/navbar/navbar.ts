import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileData } from '../../interface/profile.interface';
import { NavItem } from '../../interface/theme.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';
import { ThemeService } from '../../services/theme.service';

/**
 * Barra de navegación superior inspirada en AuthKit (Sparse navigation).
 * Consume los datos del perfil mediante Observables desde `PortfolioService`,
 * permite navegar entre secciones usando rutas limpias de Angular Router (sin Hash #)
 * y alterna entre el tema claro y oscuro con persistencia.
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  /** Servicio reactivo encargado de gestionar el tema claro y oscuro de la aplicación. */
  protected readonly themeService = inject(ThemeService);

  /** Servicio reactivo utilizado para consultar los datos del perfil del estudiante. */
  private readonly portfolioService = inject(PortfolioService);

  /** Señal reactiva con la información del perfil mostrada en la barra superior. */
  protected readonly profile = signal<ProfileData>(PROFILE_DATA);

  /** Controla el estado abierto o cerrado del menú desplegable en dispositivos móviles. */
  protected readonly mobileMenuOpen = signal(false);

  /** Secciones claras del portafolio con rutas HTML5 sin Hash (#). */
  protected readonly navItems = signal<NavItem[]>([
    { id: 'perfil', label: 'Perfil', route: '/perfil' },
    { id: 'habilidades', label: 'Habilidades', route: '/habilidades' },
    { id: 'experiencia', label: 'Experiencia', route: '/experiencia' },
    { id: 'proyectos', label: 'Proyectos', route: '/proyectos' },
    { id: 'contacto', label: 'Contacto', route: '/contacto' },
  ]);

  /**
   * Inicializa la barra de navegación suscribiéndose al Observable del perfil profesional.
   */
  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile.set(data);
    });
  }

  /**
   * Alterna el tema claro/oscuro suscribiéndose al Observable del servicio.
   */
  toggleTheme(): void {
    this.themeService.toggleTheme().subscribe();
  }

  /**
   * Alterna la visibilidad del menú de navegación en dispositivos móviles.
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen.update((open) => !open);
  }

  /**
   * Cierra el menú móvil y desplaza suavemente la vista hacia la sección seleccionada.
   */
  onNavigateSection(sectionId: string): void {
    this.mobileMenuOpen.set(false);
    if (typeof document !== 'undefined') {
      const target = document.getElementById(sectionId);
      if (target && typeof target.scrollIntoView === 'function') {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
