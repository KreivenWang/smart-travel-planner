import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ChatMessage } from '../../models/chat';

@Component({
  selector: 'app-chat-bubble',
  imports: [CommonModule],
  templateUrl: './chat-bubble.html',
  styleUrl: './chat-bubble.css',
})
export class ChatBubble {
  @Input() message: ChatMessage = {
    type: 'user',
    content: '',
    id: '',
    timestamp: new Date(),
  };

  @Input() isStreaming?: boolean;

  get isUser() {
    return this.message.type === 'user';
  }
}
