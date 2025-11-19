import type { Challenge } from "../../data/types";

export interface ChallengeResponseData {
  success: boolean;
  data?: Challenge;
  error?: string;
}

export interface ChallengesMeta {
  total: number,
  categories: string[],
  difficulties: string[],
  technologies: string[],
}

export interface ChallengesResponseData {
  success: boolean,
  data: Challenge[]
  total: number
  filters: { category: string | null, difficulty: string | null }
}