import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { SKILL_CATEGORIES } from '../interface/profile.interface';
import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioService);
  });

  it('should return profile data via Observable', async () => {
    const profile = await firstValueFrom(service.getProfile());
    expect(profile.nombre).toBe('Sebastián Morales Flórez');
    expect(profile.habilidadesTecnicas.some((t) => t.nombre === 'Spring Boot')).toBe(true);
    expect(profile.habilidadesBlandas.some((s) => s.nombre === 'Innovación')).toBe(true);
  });

  it('should return typed technical and soft skills via Observables', async () => {
    const technical = await firstValueFrom(service.getTechnicalSkills());
    const soft = await firstValueFrom(service.getSoftSkills());

    expect(technical.length).toBeGreaterThan(30);
    expect(technical.every((item) => SKILL_CATEGORIES.includes(item.categoria))).toBe(true);
    expect(soft.map((s) => s.nombre)).toEqual([
      'Innovación',
      'Creatividad',
      'Comunicación',
      'Proactividad',
      'Liderazgo',
    ]);
  });

  it('should return the 5 catalog projects via Observable', async () => {
    const projects = await firstValueFrom(service.getProjects());
    expect(projects.length).toBe(5);
    expect(projects[0].estado).toBe('publicado');
  });
});
