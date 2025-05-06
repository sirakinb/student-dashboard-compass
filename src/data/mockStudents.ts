
export type RiskLevel = 'On Track' | 'Needs Attention' | 'At Risk';

export interface Student {
  id: string;
  name: string;
  coachName: string;
  interviewRating: number; // 1-5 stars
  monthlyGoalProgress: {
    completed: number;
    total: number;
  };
  risk: RiskLevel;
}

export const mockStudents: Student[] = [
  {
    id: '1',
    name: 'John Smith',
    coachName: 'Alex Johnson',
    interviewRating: 4,
    monthlyGoalProgress: {
      completed: 8,
      total: 10,
    },
    risk: 'On Track',
  },
  {
    id: '2',
    name: 'Emma Davis',
    coachName: 'Maria Garcia',
    interviewRating: 3,
    monthlyGoalProgress: {
      completed: 5,
      total: 10,
    },
    risk: 'Needs Attention',
  },
  {
    id: '3',
    name: 'Michael Wilson',
    coachName: 'Alex Johnson',
    interviewRating: 2,
    monthlyGoalProgress: {
      completed: 3,
      total: 10,
    },
    risk: 'At Risk',
  },
  {
    id: '4',
    name: 'Sophia Brown',
    coachName: 'David Lee',
    interviewRating: 5,
    monthlyGoalProgress: {
      completed: 9,
      total: 10,
    },
    risk: 'On Track',
  },
  {
    id: '5',
    name: 'James Taylor',
    coachName: 'Maria Garcia',
    interviewRating: 2,
    monthlyGoalProgress: {
      completed: 4,
      total: 10,
    },
    risk: 'Needs Attention',
  },
  {
    id: '6',
    name: 'Olivia Martinez',
    coachName: 'Alex Johnson',
    interviewRating: 1,
    monthlyGoalProgress: {
      completed: 2,
      total: 10,
    },
    risk: 'At Risk',
  },
  {
    id: '7',
    name: 'Daniel Anderson',
    coachName: 'David Lee',
    interviewRating: 4,
    monthlyGoalProgress: {
      completed: 7,
      total: 10,
    },
    risk: 'On Track',
  },
  {
    id: '8',
    name: 'Ava Thomas',
    coachName: 'Maria Garcia',
    interviewRating: 3,
    monthlyGoalProgress: {
      completed: 5,
      total: 10,
    },
    risk: 'Needs Attention',
  },
  {
    id: '9',
    name: 'William Jackson',
    coachName: 'Alex Johnson',
    interviewRating: 2,
    monthlyGoalProgress: {
      completed: 1,
      total: 10,
    },
    risk: 'At Risk',
  },
  {
    id: '10',
    name: 'Isabella White',
    coachName: 'David Lee',
    interviewRating: 5,
    monthlyGoalProgress: {
      completed: 10,
      total: 10,
    },
    risk: 'On Track',
  },
];
