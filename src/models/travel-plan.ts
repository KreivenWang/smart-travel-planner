export interface TravelPlan {
  id: string;
  title: string;
  destination: string;
  duration: number;
  budget: number;
  travelers: string;
  summary: string;
  recommendations: string[];
  itinerary: DayItinerary[];
  budgetBreakdown: BudgetBreakdown;
  tips: string[];
  createdAt: Date;
  userQuery: string;
  coverImage: string;
}

export interface DayItinerary {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
  transport: string;
  highlights: string[];
}

export interface BudgetBreakdown {
  transportation: number;
  accommodation: number;
  food: number;
  activities: number;
  shopping: number;
  total: number;
}
