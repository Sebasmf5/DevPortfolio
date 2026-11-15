import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  BentoHighlight,
  ExperienceItem,
  ProfileData,
  SoftSkillItem,
  TechnicalSkillItem,
} from '../interface/profile.interface';
import { Project } from '../interface/project.interface';
import { PROFILE_DATA } from '../mock/profile.data';
import { PROJECTS_DATA } from '../mock/projects.data';

/**
 * Servicio de acceso a los datos del portafolio mediante Observables (RxJS).
 * Desacopla los componentes de los archivos estáticos en `mock/`, permitiendo
 * consumir el perfil, habilidades, experiencia y proyectos de forma reactiva.
 */
@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  /**
   * Obtiene la información completa del perfil profesional como un `Observable`.
   */
  getProfile(): Observable<ProfileData> {
    return of(PROFILE_DATA);
  }

  /**
   * Obtiene las tarjetas destacadas tipo Bento del perfil como un `Observable`.
   */
  getBentoHighlights(): Observable<BentoHighlight[]> {
    return of(PROFILE_DATA.bentoHighlights);
  }

  /**
   * Obtiene el listado tipado de conocimientos técnicos y lenguajes como un `Observable`.
   */
  getTechnicalSkills(): Observable<TechnicalSkillItem[]> {
    return of(PROFILE_DATA.habilidadesTecnicas);
  }

  /**
   * Obtiene el listado tipado de habilidades blandas como un `Observable`.
   */
  getSoftSkills(): Observable<SoftSkillItem[]> {
    return of(PROFILE_DATA.habilidadesBlandas);
  }

  /**
   * Obtiene el listado de experiencia y logros como un `Observable`.
   */
  getExperience(): Observable<ExperienceItem[]> {
    return of(PROFILE_DATA.experiencia);
  }

  /**
   * Obtiene el catálogo completo de los 5 proyectos como un `Observable`.
   */
  getProjects(): Observable<Project[]> {
    return of(PROJECTS_DATA);
  }
}
