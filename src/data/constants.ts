import type { Challenge } from "./types";

export const DIFFICULTY_COLORS: Record<Challenge['difficulty'], string> = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800',
} as const;

export const CATEGORY_ICONS = {
  html: '🔧',
  css: '🎨',
  javascript: '⚡',
  project: '🚀',
} as const;

export const CATEGORY_LABELS = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  project: 'Проект'
} as const;


export const DIFFICULTY_LABELS: Record<Challenge['difficulty'], string> = {
  beginner: "Начинающий",
  intermediate: "Средний",
  advanced: "Продвинутый",
} as const