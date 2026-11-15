import { Component, Input } from '@angular/core';
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

/**
 * Componente presentacional de Contacto (`app-contact`).
 *
 * Se utiliza para mostrar el mensaje de cierre y los dos paneles de conversión
 * (GitHub y canales de contacto directo).
 *
 * @remarks
 * Recibe `profile` desde el contenedor `ContactSectionComponent` (`pages/contact-section`)
 * mediante `@Input()`.
 * Forma parte de la capa de presentación como un **organismo** dentro del sistema de diseño.
 *
 * @example
 * ```html
 * <app-contact [profile]="profile"></app-contact>
 * ```
 */
@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  /**
   * Datos del perfil y enlaces de contacto recibidos desde la página contenedora.
   * @type {ProfileData}
   */
  @Input() profile: ProfileData = PROFILE_DATA;

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
}
