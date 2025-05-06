export interface Student {
  id: string;
  name: string;
  coach: string;
  rating: number;
  goals_completed: number;
  goals_total: number;
  risk: string;
  last_contacted: string;
} 

export type InterventionType = 'email' | 'call' | 'meeting' | 'other';

export interface Intervention {
  id: string;
  student_id: string;
  type: InterventionType;
  notes: string;
  created_at: string;
  coach_name: string;
} 