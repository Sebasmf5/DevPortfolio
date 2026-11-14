import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly author = signal('Sebastián Morales Flórez');
  protected readonly role = signal('Estudiante de Ingeniería de Sistemas (2023-actualidad)');
}
