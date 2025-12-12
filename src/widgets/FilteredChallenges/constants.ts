import { CATEGORY_LABELS } from '@/data/constants';
import type { FilterButton } from './types';
import type { Category } from '@/data/types';

export const DIFFICULTY_FILTERS: FilterButton[] = [
  { label: 'Все задания', filter: undefined },
  { label: 'Для начинающих', filter: 'beginner' },
  { label: 'Средний уровень', filter: 'intermediate' },
  { label: 'Продвинутые', filter: 'advanced' },
];

export const CATEGORY_FILTERS: FilterButton[] =
  (Object.keys(CATEGORY_LABELS) as Category[]).map((key) => ({
    filter: key,
    label: CATEGORY_LABELS[key]
  }));
