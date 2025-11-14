import type { APIRoute } from 'astro';
import { getChallengeById } from '../../../data/challenges';
import type { Challenge } from '../../../data/types';

export const GET: APIRoute = async ({ params }) => {
  const id = Number(params.id);

  try {
    const challenge = getChallengeById(id);

    if (!challenge) {
      const response: ChallengeResponseData = {
        success: false,
        error: 'Challenge not found',
      }

      return new Response(
        JSON.stringify(response),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const response: ChallengeResponseData = {
      success: true,
      data: challenge,
    }

    return new Response(
      JSON.stringify(response),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // 5 минут кэша
        },
      }
    );
  } catch (error) {
    const response: ChallengeResponseData = {
      success: false,
      error: 'Internal server error',
    }
    return new Response(
      JSON.stringify(response),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export interface ChallengeResponseData {
  success: boolean;
  data?: Challenge;
  error?: string;
}