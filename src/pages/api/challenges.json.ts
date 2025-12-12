import type { APIRoute } from 'astro';
import { challenges } from '@/data/challenges';
import type { ChallengesResponseData } from '@/data/types';
import { CategorySchema, DifficultySchema } from '@/data/schemas';

const PER_PAGE = 9;

export const GET: APIRoute = async ({ url }) => {
  const { data: difficulty } = DifficultySchema.safeParse(url.searchParams.get('difficulty'));
  const { data: category } = CategorySchema.safeParse(url.searchParams.get('category'));
  const page = Number(url.searchParams.get('page')) || 1;
  const perPage = PER_PAGE;

  let filteredChallenges = [...challenges];

  // Фильтрация по сложности
  if (difficulty) {
    filteredChallenges = filteredChallenges.filter(
      (challenge) => challenge.difficulty === difficulty
    );
  }

  // Фильтрация по категории
  if (category) {
    filteredChallenges = filteredChallenges.filter((challenge) => challenge.category === category);
  }

  const totalPages = Math.ceil(filteredChallenges.length / perPage);

  const data: ChallengesResponseData = {
    success: true,
    data: filteredChallenges.slice((page - 1) * PER_PAGE, PER_PAGE * page),
    total: filteredChallenges.length,
    filters: { difficulty, category },
    page,
    perPage,
    totalPages,
  };

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
