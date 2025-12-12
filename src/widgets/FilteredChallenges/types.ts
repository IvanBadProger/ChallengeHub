import type { Challenge, Filter } from '@/data/types';

export interface FilterButton {
  label: string;
  filter: Filter;
}

export interface FilterState {
  difficulty: Challenge['difficulty'];
  category: Challenge['category'];
}
