export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'html' | 'css' | 'javascript' | 'project';
  duration: number; // в днях
  requirements: string[];
  tips: string[];
  resources: string[];
  startDate: string; // YYYY-MM-DD
  tech: string[];
  isActive?: boolean;
  isCompleted?: boolean;
  isUpcoming?: boolean;
}

export interface UserProgress {
  completedChallenges: number[];
  currentChallenge: number;
  streak: number;
}