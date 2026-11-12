import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// uma anotação e uma função especial
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('aula01');
}
