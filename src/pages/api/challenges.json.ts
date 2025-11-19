import type { APIRoute } from 'astro';
import { challenges } from '../../data/challenges';
import type { Challenge } from '../../data/types';
import type { ChallengesResponseData } from './types';

export const GET: APIRoute = async ({ url }) => {
  const difficulty = url.searchParams.get('difficulty');
  const category = url.searchParams.get('category');

  let filteredChallenges = [...challenges];

  // Фильтрация по сложности
  if (difficulty) {
    filteredChallenges = filteredChallenges.filter(challenge =>
      challenge.difficulty === difficulty
    );
  }

  // Фильтрация по категории
  if (category) {
    filteredChallenges = filteredChallenges.filter(challenge =>
      challenge.category === category
    );
  }

  const data: ChallengesResponseData = {
    success: true,
    data: filteredChallenges,
    total: filteredChallenges.length,
    filters: { difficulty, category }
  }

  return new Response(
    JSON.stringify(data),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};