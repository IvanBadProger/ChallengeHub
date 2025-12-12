import { z } from 'astro/zod';
import type * as schemas from './schemas';

export type Difficulty = z.infer<typeof schemas.DifficultySchema>;
export type Category = z.infer<typeof schemas.CategorySchema>;
export type Technology = z.infer<typeof schemas.TechnologiesSchema>;
export type Challenge = z.infer<typeof schemas.ChallengeSchema>;
export type ChallengeFilters = z.infer<typeof schemas.ChallengeFiltersSchema>;
export type ChallengeResponseData = z.infer<typeof schemas.ChallengeResponseDataSchema>;
export type ChallengesMeta = z.infer<typeof schemas.ChallengesMetaSchema>;
export type ChallengesResponseData = z.infer<typeof schemas.ChallengesResponseDataSchema>;

export type Filter = Difficulty | Category | undefined;
export type ColorVariant = 'primary' | 'secondary' | 'accent';
export type Theme = 'light' | 'dark';
