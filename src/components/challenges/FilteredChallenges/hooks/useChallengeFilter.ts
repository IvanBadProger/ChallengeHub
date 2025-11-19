import { useState, useEffect } from 'react';
import type { Challenge } from '../../../data/types';
import { useURLParams } from './useURLParams';

export function useChallengeFilter(initialChallenges: Challenge[]) {
  const [urlParams, updateUrlParams] = useURLParams();
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [loading, setLoading] = useState(false);

  const urlDifficulty = urlParams.get('difficulty') || 'all';
  const urlCategory = urlParams.get('category') || 'all';

  const [activeDifficulty, setActiveDifficulty] = useState(urlDifficulty);
  const [activeCategory, setActiveCategory] = useState(urlCategory);

  useEffect(() => {
    const difficulty = urlParams.get('difficulty') || 'all';
    const category = urlParams.get('category') || 'all';

    setActiveDifficulty(difficulty);
    setActiveCategory(category);
    fetchFilteredChallenges(difficulty, category, false);
  }, [urlParams]);

  const updateURLParams = (difficulty: string, category: string) => {
    const newParams = new URLSearchParams();

    if (difficulty !== 'all') newParams.set('difficulty', difficulty);
    if (category !== 'all') newParams.set('category', category);

    updateUrlParams(newParams, false);
  };

  const fetchFilteredChallenges = async (
    difficulty: string,
    category: string,
    updateURL = true
  ) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (difficulty !== 'all') params.append('difficulty', difficulty);
      if (category !== 'all') params.append('category', category);

      const queryString = params.toString();
      const url = queryString ? `/api/challenges.json?${queryString}` : '/api/challenges.json';

      const response = await fetch(url);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch challenges');
      }

      setChallenges(data.data);
      setActiveDifficulty(difficulty);
      setActiveCategory(category);

      if (updateURL) {
        updateURLParams(difficulty, category);
      }
    } catch (error) {
      console.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDifficultyFilter = (difficulty: string) => {
    fetchFilteredChallenges(difficulty, activeCategory);
  };

  const handleCategoryFilter = (category: string) => {
    fetchFilteredChallenges(activeDifficulty, category);
  };

  const resetFilters = () => {
    fetchFilteredChallenges('all', 'all');
  };

  return {
    challenges,
    loading,
    activeDifficulty,
    activeCategory,
    handleDifficultyFilter,
    handleCategoryFilter,
    resetFilters
  };
}