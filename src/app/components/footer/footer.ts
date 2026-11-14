import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileData } from '../../interface/profile.interface';
import { PROFILE_DATA } from '../../mock/profile.data';
import { PortfolioService } from '../../services/portfolio.service';

/**
 * Pie de página técnico minimalista con reglas que se desvanecen (inspirado en DESIGN.md).
 * Consume la información del estudiante mediante el Observable `PortfolioService.getProfile()`.
 */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent implements OnInit {
  private readonly portfolioService = inject(PortfolioService);

  protected readonly profile = signal<ProfileData>(PROFILE_DATA);
  protected readonly currentYear = signal(new Date().getFullYear());

  ngOnInit(): void {
    this.portfolioService.getProfile().subscribe((data) => {
      this.profile.set(data);
    });
  }
}
