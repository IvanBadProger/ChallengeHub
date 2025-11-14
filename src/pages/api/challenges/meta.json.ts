import type { APIRoute } from 'astro';
import { challenges } from '../../../data/challenges';

export const GET: APIRoute = async () => {
  const meta: ChallengesMeta = {
    total: challenges.length,
    categories: Array.from(new Set(challenges.map(c => c.category))),
    difficulties: Array.from(new Set(challenges.map(c => c.difficulty))),
    technologies: Array.from(new Set(challenges.flatMap(c => c.tech))),
  };

  return new Response(
    JSON.stringify({
      success: true,
      data: {
        ...meta
      }
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600' // 5 минут кэша + 10 минут stale
      },
    }
  );
};

export interface ChallengesMeta {
  total: number,
  categories: string[],
  difficulties: string[],
  technologies: string[],

}