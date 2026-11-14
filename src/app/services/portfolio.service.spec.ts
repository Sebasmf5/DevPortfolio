import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
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
    expect(profile.habilidadesTecnicas).toContain('Spring Boot');
    expect(profile.habilidadesBlandas).toContain('Innovación');
  });

  it('should return the 5 catalog projects via Observable', async () => {
    const projects = await firstValueFrom(service.getProjects());
    expect(projects.length).toBe(5);
    expect(projects[0].estado).toBe('publicado');
  });
});
