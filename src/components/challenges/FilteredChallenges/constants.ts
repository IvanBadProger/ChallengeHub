import type { FilterButton } from "./types";

export const DIFFICULTY_FILTERS: FilterButton[] = [
  { label: 'Все задания', filter: 'all' },
  { label: 'Для начинающих', filter: 'beginner' },
  { label: 'Средний уровень', filter: 'intermediate' },
  { label: 'Продвинутые', filter: 'advanced' }
];

export const CATEGORY_FILTERS: FilterButton[] = [
  { label: 'HTML', filter: 'html' },
  { label: 'CSS', filter: 'css' },
  { label: 'JavaScript', filter: 'javascript' },
  { label: 'Проекты', filter: 'project' }
];
