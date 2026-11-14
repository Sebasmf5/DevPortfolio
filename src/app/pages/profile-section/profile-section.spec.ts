import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProfileSectionComponent } from './profile-section';

describe('ProfileSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create and render student name, role and summary from PortfolioService Observable', async () => {
    const fixture = TestBed.createComponent(ProfileSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('#profile-heading')?.textContent).toContain(
      'Sebastián Morales Flórez',
    );
    expect(compiled.querySelector('.hero-stage__promise')?.textContent).toContain(
      'Estudiante de Ingeniería de Sistemas (2023-actualidad)',
    );
  });

  it('should render all 4 Bento highlight cards (Estudios, Distinción Andrés Bello, Goslint, Bienestar)', async () => {
    const fixture = TestBed.createComponent(ProfileSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const cards = compiled.querySelectorAll('.bento-card');
    expect(cards.length).toBe(4);

    const titles = Array.from(compiled.querySelectorAll('.bento-card__title')).map((el) =>
      el.textContent?.trim(),
    );
    expect(titles).toEqual([
      'Ingeniería de Sistemas',
      'Distinción Andrés Bello',
      'Semillero Goslint',
      'Monitor en Bienestar Universitario',
    ]);
  });

  it('should fall back to initials avatar SM when profile image fails to load', async () => {
    const fixture = TestBed.createComponent(ProfileSectionComponent);
    await fixture.whenStable();

    const component = fixture.componentInstance;
    component.onAvatarError();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-avatar__initials')?.textContent?.trim()).toBe('SM');
  });
});
