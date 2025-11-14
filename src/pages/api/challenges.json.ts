import type { APIRoute } from 'astro';
import { challenges } from '../../data/challenges';
import type { Challenge } from '../../data/types';

export const GET: APIRoute = async ({ url }) => {
  const status = url.searchParams.get('status');
  const difficulty = url.searchParams.get('difficulty');

  const currentDate = new Date();

  let filteredChallenges = challenges;

  // Фильтрация по статусу
  if (status === 'active') {
    filteredChallenges = challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(startDate.getTime() + challenge.duration * 24 * 60 * 60 * 1000);
      return currentDate >= startDate && currentDate <= endDate;
    });
  } else if (status === 'completed') {
    filteredChallenges = challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(startDate.getTime() + challenge.duration * 24 * 60 * 60 * 1000);
      return currentDate > endDate;
    });
  } else if (status === 'upcoming') {
    filteredChallenges = challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      return currentDate < startDate;
    });
  }

  // Фильтрация по сложности
  if (difficulty) {
    filteredChallenges = filteredChallenges.filter(challenge =>
      challenge.difficulty === difficulty
    );
  }

  // Вычисляем общую статистику (всегда по всем заданиям)
  const totalStats = {
    total: challenges.length,
    active: challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(startDate.getTime() + challenge.duration * 24 * 60 * 60 * 1000);
      return currentDate >= startDate && currentDate <= endDate;
    }).length,
    completed: challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      const endDate = new Date(startDate.getTime() + challenge.duration * 24 * 60 * 60 * 1000);
      return currentDate > endDate;
    }).length,
    upcoming: challenges.filter(challenge => {
      const startDate = new Date(challenge.startDate);
      return currentDate < startDate;
    }).length
  };


  const data: ChallengesResponseData = {
    success: true,
    data: filteredChallenges,
    total: filteredChallenges.length,
    stats: totalStats, // Добавляем статистику в ответ
    filters: { status, difficulty }
  }

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export interface ChallengesResponseData {
  success: boolean,
  data: Challenge[]
  total: number
  stats: {
    total: number
    completed: number
    active: number
    upcoming: number
  }
  filters: { status: string | null, difficulty: string | null }
}