import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsSectionComponent } from './projects-section';

describe('ProjectsSectionComponent', () => {
  let component: ProjectsSectionComponent;
  let fixture: ComponentFixture<ProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the projects section and render all 5 catalog projects', () => {
    expect(component).toBeTruthy();
    const element = fixture.nativeElement as HTMLElement;
    const cards = element.querySelectorAll('.project-card');
    expect(cards.length).toBe(5);
  });

  it('should render active demoUrl and repoUrl links for published projects', () => {
    const element = fixture.nativeElement as HTMLElement;
    const firstCard = element.querySelector('.project-card--featured') as HTMLElement;
    const links = Array.from(
      firstCard.querySelectorAll('a.project-card__link'),
    ) as HTMLAnchorElement[];

    expect(links.length).toBe(2);
    expect(links[0].getAttribute('href')).toBe('https://sebasmf.dev');
    expect(links[1].getAttribute('href')).toBe('https://github.com/Sebasmf5/DevPortfolio');
  });

  it('should render "Próximamente" badge and disabled actions for upcoming projects', () => {
    const element = fixture.nativeElement as HTMLElement;
    const upcomingCards = element.querySelectorAll('.project-card--upcoming');
    expect(upcomingCards.length).toBe(4);

    const firstUpcoming = upcomingCards[0] as HTMLElement;
    expect(firstUpcoming.textContent).toContain('Próximamente');

    const disabledActions = firstUpcoming.querySelectorAll('[aria-disabled="true"]');
    expect(disabledActions.length).toBe(2);
  });
});
