import { Component, Input, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Award, Code2, GraduationCap, LucideAngularModule, MapPin, Sparkles } from 'lucide-angular';
import { BentoHighlight, ProfileData } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';

/**
 * Formatos soportados automáticamente para la fotografía de perfil en `public/assets/images/`.
 */
const AVATAR_CANDIDATE_PATHS: readonly string[] = [
  'assets/images/profile.jpg',
  'assets/images/profile.jpeg',
  'assets/images/profile.png',
  'assets/images/profile.webp',
] as const;

/**
 * Componente presentacional del Perfil Profesional (`app-profile`).
 *
 * Se utiliza para renderizar el escenario Hero en 2 columnas (información + retrato enmarcado)
 * y la cuadrícula Bento de pilares académicos.
 *
 * @remarks
 * Este componente recibe los datos desde el contenedor `ProfileSectionComponent` (`pages/profile-section`)
 * a través de los Inputs `profile` y `bentoCards`.
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño.
 *
 * @example
 * ```html
 * <app-profile [profile]="profile" [bentoCards]="bentoCards"></app-profile>
 * ```
 */
@Component({
  selector: 'app-profile',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  /**
   * Datos generales del perfil profesional recibidos desde la página contenedora.
   * @type {ProfileData}
   */
  @Input() profile: ProfileData = PROFILE_DATA;

  /**
   * Tarjetas destacadas para la cuadrícula Bento recibidas desde la página contenedora.
   * @type {BentoHighlight[]}
   */
  @Input() bentoCards: BentoHighlight[] = PROFILE_DATA.bentoHighlights;

  /** Índice del formato de imagen actual que se intenta cargar. */
  protected readonly avatarCandidateIndex = signal<number>(0);

  /** Controla si la imagen de perfil falló al cargar para mostrar el avatar con iniciales. */
  protected readonly imageLoadFailed = signal<boolean>(false);

  /** URL activa de la fotografía de perfil según los candidatos soportados. */
  protected readonly resolvedAvatarUrl = computed<string>(() => {
    const idx = this.avatarCandidateIndex();
    if (idx === 0 && this.profile.avatarUrl) {
      return this.profile.avatarUrl;
    }
    return AVATAR_CANDIDATE_PATHS[idx] ?? '';
  });

  /** Iconos de Lucide para los metadatos rápidos del Hero y marco de retrato. */
  protected readonly icons = {
    graduationCap: GraduationCap,
    mapPin: MapPin,
    award: Award,
    code: Code2,
    sparkles: Sparkles,
  };

  /**
   * Si el archivo actual no existe, prueba el siguiente formato soportado (`jpg` -> `jpeg` -> `png` -> `webp`)
   * o activa el respaldo con iniciales (`SM`).
   */
  onAvatarError(tryNextCandidate = false): void {
    const nextIndex = this.avatarCandidateIndex() + 1;
    if (tryNextCandidate && nextIndex < AVATAR_CANDIDATE_PATHS.length) {
      this.avatarCandidateIndex.set(nextIndex);
      return;
    }
    this.imageLoadFailed.set(true);
  }
}
