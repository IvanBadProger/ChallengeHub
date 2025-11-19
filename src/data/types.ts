export interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'html' | 'css' | 'javascript' | 'project';
  requirements: string[];
  tips: string[];
  resources: {
    title: string
    url: string
  }[];
  tech: string[];
}
