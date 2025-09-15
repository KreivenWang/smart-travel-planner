import { Component, EventEmitter, Output, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { chatQuickStarters } from '../../models/chat';

@Component({
  selector: 'app-quick-start',
  imports: [ButtonModule],
  templateUrl: './quick-start.html',
  styleUrl: './quick-start.css',
})
export class QuickStart {
  quickStarters = chatQuickStarters;
  @Output() quickStart = new EventEmitter<string>();

  handleQuickStart(text: string) {
    this.quickStart.emit(text);
  }
}
