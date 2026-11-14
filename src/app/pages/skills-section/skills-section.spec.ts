import { TestBed } from '@angular/core/testing';
import { SKILL_CATEGORIES } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { SkillsSectionComponent } from './skills-section';

describe('SkillsSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSectionComponent],
    }).compileComponents();
  });

  it('should ensure every technical skill item has a non-empty icon and a valid category', () => {
    expect(PROFILE_DATA.habilidadesTecnicas.length).toBeGreaterThan(0);

    for (const item of PROFILE_DATA.habilidadesTecnicas) {
      expect(item.nombre.trim().length).toBeGreaterThan(0);
      expect(item.icono.trim().length).toBeGreaterThan(0);
      expect(SKILL_CATEGORIES).toContain(item.categoria);
    }
  });

  it('should render the "Aprendiendo" badge instead of the decorative node only on items with estado "aprendiendo"', async () => {
    const fixture = TestBed.createComponent(SkillsSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    const learningItemsInData = PROFILE_DATA.habilidadesTecnicas.filter(
      (item) => item.estado === 'aprendiendo',
    );
    const renderedBadges = compiled.querySelectorAll('.tech-card__learning-badge');

    expect(learningItemsInData.map((i) => i.nombre)).toEqual(['TypeScript', 'Node.js', 'Express']);
    expect(renderedBadges.length).toBe(learningItemsInData.length);

    const techCards = Array.from(compiled.querySelectorAll('.tech-card'));
    for (const card of techCards) {
      const name = card.querySelector('.tech-card__name')?.textContent?.trim();
      const badge = card.querySelector('.tech-card__learning-badge');
      const node = card.querySelector('.tech-card__node');

      if (name === 'TypeScript' || name === 'Node.js' || name === 'Express') {
        expect(badge?.textContent?.trim()).toBe('Aprendiendo');
        expect(node).toBeNull();
      } else {
        expect(badge).toBeNull();
        expect(node).not.toBeNull();
      }
    }
  });

  it('should ensure every soft skill has a distinct icon and no rendered soft skill card has empty evidence', async () => {
    const fixture = TestBed.createComponent(SkillsSectionComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    // Verificar que cada habilidad blanda en datos tenga su propio icono único
    const icons = PROFILE_DATA.habilidadesBlandas.map((s) => s.icono);
    expect(new Set(icons).size).toBe(icons.length);

    // Verificar que ninguna tarjeta renderizada en el DOM tenga evidencia vacía
    const renderedSoftCards = Array.from(compiled.querySelectorAll('.soft-card'));
    expect(renderedSoftCards.length).toBeGreaterThan(0);

    for (const card of renderedSoftCards) {
      const title = card.querySelector('.soft-card__title')?.textContent?.trim() ?? '';
      const evidence = card.querySelector('.soft-card__evidence')?.textContent?.trim() ?? '';
      expect(title.length).toBeGreaterThan(0);
      expect(evidence.length).toBeGreaterThan(0);
    }

    // Como Liderazgo está vacío en datos, no debe mostrarse con evidencia vacía
    const renderedTitles = renderedSoftCards.map((c) =>
      c.querySelector('.soft-card__title')?.textContent?.trim(),
    );
    expect(renderedTitles).not.toContain('Liderazgo');
  });
});
