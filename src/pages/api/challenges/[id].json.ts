import type { APIRoute } from 'astro';
import type { Challenge, ChallengeResponseData } from '@/data/types';
import { challenges } from '@/data/challenges';

export const getChallengeById = (id: number): Challenge | undefined => {
  return challenges.find((challenge) => challenge.id === id);
};

export const GET: APIRoute = async ({ params }) => {
  const id = Number(params.id);

  try {
    const challenge = getChallengeById(id);

    if (!challenge) {
      const response: ChallengeResponseData = {
        success: false,
        error: 'Challenge not found',
      };

      return new Response(JSON.stringify(response), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response: ChallengeResponseData = {
      success: true,
      data: challenge,
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // 5 минут кэша
      },
    });
  } catch (error) {
    const response: ChallengeResponseData = {
      success: false,
      error: 'Internal server error',
    };
    return new Response(JSON.stringify(response), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
