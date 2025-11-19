import type { Challenge } from "../../../data/types";

export interface FilterButton {
  label: string;
  filter: Challenge['difficulty'] | Challenge['category'] | 'all';
}

export interface FilterState {
  difficulty: Challenge['difficulty'];
  category: Challenge['category'];
}
