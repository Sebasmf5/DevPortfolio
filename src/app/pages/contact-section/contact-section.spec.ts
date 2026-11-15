import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSectionComponent } from './contact-section';

describe('ContactSectionComponent', () => {
  let component: ContactSectionComponent;
  let fixture: ComponentFixture<ContactSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the contact section and render the closing continuous learning message', () => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain(
      'Interés en el aprendizaje continuo y en superarme siempre.',
    );
  });

  it('should render the two conversion panels with GitHub, email, and LinkedIn links', () => {
    const element = fixture.nativeElement as HTMLElement;
    const panels = element.querySelectorAll('.contact-panel');
    expect(panels.length).toBe(2);

    const links = Array.from(element.querySelectorAll('a.contact-panel__cta')).map((a) =>
      a.getAttribute('href'),
    );
    expect(links).toContain('https://github.com/Sebasmf5');
    expect(links).toContain('mailto:contacto@sebasmf.dev');
    expect(links).toContain('https://www.linkedin.com/in/sebasmf5');
  });

  it('should render the institutional location in Tuluá — UCEVA', () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.textContent).toContain('Tuluá, Valle del Cauca, Colombia — UCEVA');
  });
});
