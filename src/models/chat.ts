export const chatQuickStarters = [
  '和家人去日本，预算2万，7天，想去东京看樱花',
  '情侣蜜月游，马尔代夫，10天，不限预算',
  '3个朋友穷游东南亚，每人5000元，15天',
  '亲子游新加坡，6天，每人8000元预算'
];

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}
