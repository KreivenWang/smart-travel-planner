import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from '../components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('smart-travel-planner');
}
