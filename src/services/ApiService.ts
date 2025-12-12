import type {
  Category,
  Challenge,
  ChallengeFilters,
  ChallengesMeta,
  ChallengesResponseData,
  Difficulty,
} from '@/data/types';

export class ApiService {
  protected static baseUrl: string = import.meta.env.DEV
    ? 'http://localhost:4321'
    : import.meta.env.SITE || '';

  public static async fetchMeta(): Promise<ChallengesMeta> {
    const url = `${this.baseUrl}/api/challenges/meta.json`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }

  public static async fetchChallenges({
    category,
    difficulty,
    page,
  }: Partial<ChallengeFilters> = {}): Promise<ChallengesResponseData> {
    const searchParams = new URLSearchParams();
    if (difficulty) searchParams.append('difficulty', difficulty);
    if (category) searchParams.append('category', category);
    if (page) searchParams.append('page', page.toString());

    const url = `${this.baseUrl}/api/challenges.json?${searchParams.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  public static async fetchChallenge(id: string): Promise<Challenge> {
    const url = `${this.baseUrl}/api/challenges/${id}.json`;

    const response = await fetch(url);
    const data = await response.json();

    return data.data;
  }

  protected static errorHandler() { }
}
