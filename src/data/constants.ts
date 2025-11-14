export const APP_CONFIG = {
  CHALLENGE_DURATION: 3, // дня
  TOTAL_CHALLENGES: 7,
  START_DATE: '2026-01-01',
} as const;

export const DIFFICULTY_COLORS = {
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