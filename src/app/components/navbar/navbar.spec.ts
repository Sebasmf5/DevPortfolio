import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { THEME_STORAGE_KEY, ThemeService } from '../../services/theme.service';
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    localStorage.clear();
    localStorage.setItem(THEME_STORAGE_KEY, 'dark');

    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the navbar and render all 5 portfolio section links', async () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const links = Array.from(compiled.querySelectorAll('.navbar__link')).map((el) =>
      el.textContent?.trim(),
    );
    expect(links).toEqual(['Perfil', 'Habilidades', 'Experiencia', 'Proyectos', 'Contacto']);
  });

  it('should toggle the theme when clicking the theme button', async () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const themeService = TestBed.inject(ThemeService);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const toggleBtn = compiled.querySelector('.navbar__theme-toggle') as HTMLButtonElement;
    expect(themeService.theme()).toBe('dark');

    toggleBtn.click();
    fixture.detectChanges();

    expect(themeService.theme()).toBe('light');
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe('light');
  });
});
