import { z } from 'astro/zod';
import { number } from 'astro:schema';

export const DifficultySchema = z.enum(['beginner', 'intermediate', 'advanced']);
export const CategorySchema = z.enum(['algorithms', 'layout', 'project']);
export const TechnologiesSchema = z.string();
export const ResourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
});

export const ChallengeSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  difficulty: DifficultySchema,
  category: CategorySchema,
  requirements: z.array(z.string()),
  tips: z.array(z.string()),
  resources: z.array(ResourceSchema),
  tech: z.array(z.string()),
  solution: z.string().nullable(),
});

export const ChallengeFiltersSchema = z.object({
  category: CategorySchema.optional().catch(undefined),
  difficulty: DifficultySchema.optional().catch(undefined),
  page: z.number().optional().catch(undefined),
});

export const ChallengeResponseDataSchema = z.object({
  success: z.boolean(),
  data: ChallengeSchema.optional(),
  error: z.string().optional(),
});

export const ChallengesMetaSchema = z.object({
  total: z.number(),
  categories: z.array(CategorySchema),
  difficulties: z.array(DifficultySchema),
  technologies: z.array(TechnologiesSchema),
});

export const ChallengesResponseDataSchema = z.object({
  success: z.boolean(),
  data: z.array(ChallengeSchema),
  total: z.number(),
  filters: ChallengeFiltersSchema,
  page: z.number().positive(),
  perPage: z.number().positive(),
  totalPages: z.number().positive(),
});
