import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FooterComponent } from './footer';

describe('FooterComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the student name, institution and GitHub capsule link', async () => {
    const fixture = TestBed.createComponent(FooterComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.footer__name')?.textContent).toContain(
      'Sebastián Morales Flórez',
    );
    expect(compiled.querySelector('.footer__meta')?.textContent).toContain('UCEVA');
    expect(compiled.querySelector('.footer__github')?.getAttribute('href')).toBe(
      'https://github.com/Sebasmf5',
    );
  });
});
