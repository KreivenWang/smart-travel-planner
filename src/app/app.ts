import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Header } from '../components/header/header';
import { Chat } from '../components/chat/chat';
import { PostPlanGeneratedService } from '../services/post-plan-generated.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Header, Chat],
  providers: [PostPlanGeneratedService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('smart-travel-planner');
  constructor(private postPlanGeneratedService: PostPlanGeneratedService) {
  }
}
