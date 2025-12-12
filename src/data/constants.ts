import type { Category, Challenge } from './types';

export const DIFFICULTY_COLORS: Record<Challenge['difficulty'], string> = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
} as const;

export const CATEGORY_ICONS: Record<Category, string> = {
  algorithms: '🔧',
  layout: '🎨',
  project: '🚀',
} as const;

export const CATEGORY_LABELS: Record<Category, string> = {
  algorithms: 'Алгоритмы',
  layout: 'Верстка',
  project: 'Проект',
} as const;

export const DIFFICULTY_LABELS: Record<Challenge['difficulty'], string> = {
  beginner: 'Начинающий',
  intermediate: 'Средний',
  advanced: 'Продвинутый',
} as const;

export const SECTION_IDS: Record<string, string> = {
  hero: 'hero',
  tasks: 'tasks',
  ready: 'ready',
} as const;
