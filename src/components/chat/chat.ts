import { TextareaModule } from 'primeng/textarea';
import { Component } from '@angular/core';
import { ChatMessage, chatQuickStarters } from '../../models/chat';
import { ChatBubble } from '../chat-bubble/chat-bubble';
import { generateTravelPlan, simulateStreamingResponse } from '../../models/mock-plan-generator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [ChatBubble,FormsModule, TextareaModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  messages: ChatMessage[] = [];
  quickStarters = chatQuickStarters;
  streamingMessage: ChatMessage = {
    type: 'ai',
    content: '',
    id: 'streaming',
    timestamp: new Date(),
  };
  inputValue = '';
  isGenerating = false;

  async handleSubmitAsync(e: Event) {
    e.preventDefault();
    if (!this.inputValue.trim() || this.isGenerating) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: this.inputValue.trim(),
      timestamp: new Date(),
    };

    this.messages = [...this.messages, userMessage];
    this.inputValue = '';
    this.isGenerating = true;
    this.streamingMessage.content = '';

    try {
      // Generate the travel plan
      const plan = await generateTravelPlan(this.inputValue.trim());

      // Create streaming response for the summary
      const summaryText = `我已经为您制定了详细的旅行计划！\n\n📍 **目的地推荐：** ${
        plan.destination
      }\n⏰ **行程天数：** ${plan.duration}天\n👥 **出行人数：** ${
        plan.travelers
      }\n💰 **预算范围：** ¥${plan.budget.toLocaleString()}\n\n${
        plan.summary
      }\n\n点击下方按钮查看完整的行程安排、预算分解和实用贴士！`;

      await simulateStreamingResponse(summaryText, (chunk) => {
        this.streamingMessage.content += chunk;
      });

      // Add final AI message
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: summaryText,
        timestamp: new Date(),
      };

      this.messages = [...this.messages, aiMessage];
      this.streamingMessage.content = '';

      // Notify parent component about the generated plan
      // this.onPlanGenerated(plan);
    } catch (error) {
      console.error('Error generating plan:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: '抱歉，生成旅行计划时遇到了问题，请稍后重试。',
        timestamp: new Date(),
      };
      this.messages = [...this.messages, errorMessage];
    } finally {
      this.messages = [...this.messages, this.streamingMessage];
      this.isGenerating = false;
      this.streamingMessage.content = '';
    }
  }
}
