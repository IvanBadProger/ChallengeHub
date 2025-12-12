import { useState, useEffect } from 'react';
import type { Category, Challenge, ChallengeFilters, Difficulty } from '@/data/types';
import { useURLParams } from '@/shared';
import { ApiService } from '@/services/ApiService';
import { CategorySchema, DifficultySchema } from '@/data/schemas';

export function useChallengeFilter(initialChallenges: Challenge[]) {
  const [urlParams, updateUrlParams] = useURLParams();
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [loading, setLoading] = useState(false);

  const { data: urlDifficulty, success: hasUrlDifficulty } = DifficultySchema.safeParse(
    urlParams.get('difficulty')
  );
  const { data: urlCategory, success: hasUrlCategory } = CategorySchema.safeParse(
    urlParams.get('category')
  );
  const urlPage = urlParams.get('page');

  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | undefined>(
    hasUrlDifficulty ? urlDifficulty : undefined
  );
  const [activeCategory, setActiveCategory] = useState<Category | undefined>(
    hasUrlCategory ? urlCategory : undefined
  );
  const [activePage, setActivePage] = useState<number | undefined>(Number(urlPage) || undefined);

  useEffect(() => {
    const { data: urlDifficulty, success: hasDifficulty } = DifficultySchema.safeParse(
      urlParams.get('difficulty')
    );
    const { data: urlCategory, success: hasCategory } = CategorySchema.safeParse(
      urlParams.get('category')
    );
    const urlPage = urlParams.get('page');

    const difficulty = hasDifficulty ? urlDifficulty : undefined;
    const category = hasCategory ? urlCategory : undefined;
    const page = Number(urlPage) ?? undefined;

    setActiveDifficulty(difficulty);
    setActiveCategory(category);
    setActivePage(page);

    fetchFilteredChallenges(
      {
        difficulty,
        category,
        page,
      },
      false
    );
  }, [urlParams]);

  const updateCurrentURLParams = ({ category, difficulty, page }: ChallengeFilters) => {
    const newParams = new URLSearchParams();

    if (difficulty) newParams.set('difficulty', difficulty);
    if (category) newParams.set('category', category);
    if (page) newParams.set('page', page.toString());

    updateUrlParams(newParams, false);
  };

  const fetchFilteredChallenges = async (filters: ChallengeFilters, updateURL: boolean = true) => {
    setLoading(true);
    try {
      const data = await ApiService.fetchChallenges(filters);

      setChallenges(data.data);
      setActiveDifficulty(data.filters.difficulty);
      setActiveCategory(data.filters.category);
      setActivePage(data.page);
      setTotalPages(data.totalPages);
      setTotal(data.total);

      if (updateURL) {
        updateCurrentURLParams(filters);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDifficultyFilter = (difficulty: Difficulty | undefined) => {
    fetchFilteredChallenges({ difficulty, category: activeCategory });
  };

  const handleCategoryFilter = (category: Category | undefined) => {
    fetchFilteredChallenges({ difficulty: activeDifficulty, category });
  };

  const handlePageFilter = (page: number | undefined) => {
    fetchFilteredChallenges({ difficulty: activeDifficulty, category: activeCategory, page });
  };

  const resetFilters = () => {
    fetchFilteredChallenges({});
  };

  return {
    challenges,
    loading,
    activeDifficulty,
    activeCategory,
    activePage,
    totalPages,
    total,
    handleDifficultyFilter,
    handleCategoryFilter,
    handlePageFilter,
    resetFilters,
  };
}
