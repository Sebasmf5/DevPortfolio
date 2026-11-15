import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceSectionComponent } from './experience-section';

describe('ExperienceSectionComponent', () => {
  let component: ExperienceSectionComponent;
  let fixture: ComponentFixture<ExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the experience section component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Monitor role in Vicerrectoría de Bienestar Universitario and its 3 technical achievements', () => {
    const element = fixture.nativeElement as HTMLElement;
    const text = element.textContent ?? '';

    expect(text).toContain('Monitor en la Vicerrectoría de Bienestar Universitario');
    expect(text).toContain('préstamo de implementos integrando Google Apps Script y Google Sheets');
    expect(text).toContain('resultados de pruebas psicotécnicas');
    expect(text).toContain('sistema de inventario con semaforización para el área de enfermería');
  });

  it('should render Semillero Goslint experience and applied technology tags', () => {
    const element = fixture.nativeElement as HTMLElement;
    const cards = element.querySelectorAll('.experience-card');
    const tags = Array.from(element.querySelectorAll('.experience-card__tech-tag')).map((el) =>
      el.textContent?.trim(),
    );

    expect(cards.length).toBe(2);
    expect(element.textContent).toContain(
      'Integrante del Semillero de Programación Competitiva Goslint',
    );
    expect(tags).toContain('Node.js');
    expect(tags).toContain('Angular');
    expect(tags).toContain('CacheService');
  });
});
