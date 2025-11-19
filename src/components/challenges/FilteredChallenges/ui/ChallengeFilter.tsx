import type { Challenge } from '../../../../data/types';
import { useChallengeFilter } from '../hooks/useChallengeFilter';
import { FilterButtons } from './FilterButtons';
import { ActiveFilters } from './ActiveFilters';
import { ChallengeGrid } from './ChallengeGrid';
import { EmptyState } from './EmptyState';
import { CATEGORY_FILTERS, DIFFICULTY_FILTERS } from '../constants';
import { Loader } from '../../../kit';

interface ChallengeFilterProps {
  initialChallenges: Challenge[];
}


export const ACTIVE_CLASS = 'bg-purple-600 text-white hover:bg-purple-700';
export const INACTIVE_CLASS = 'bg-gray-200 text-gray-700 hover:bg-gray-300';

export function ChallengeFilter({ initialChallenges }: ChallengeFilterProps) {
  const {
    challenges,
    loading,
    activeDifficulty,
    activeCategory,
    handleDifficultyFilter,
    handleCategoryFilter,
    resetFilters
  } = useChallengeFilter(initialChallenges);

  return (
    <div>
      {/* Фильтры по сложности */}
      <FilterButtons
        title="Уровень сложности"
        filters={DIFFICULTY_FILTERS}
        activeFilter={activeDifficulty}
        onFilterChange={handleDifficultyFilter}
        activeClass={ACTIVE_CLASS}
        inactiveClass={INACTIVE_CLASS}
      />

      {/* Фильтры по категориям */}
      <FilterButtons
        title="Категории"
        filters={CATEGORY_FILTERS}
        activeFilter={activeCategory}
        onFilterChange={handleCategoryFilter}
        activeClass={ACTIVE_CLASS}
        inactiveClass={INACTIVE_CLASS}
      />

      {/* Активные фильтры */}
      <ActiveFilters
        activeDifficulty={activeDifficulty}
        activeCategory={activeCategory}
        difficultyFilters={DIFFICULTY_FILTERS}
        categoryFilters={CATEGORY_FILTERS}
        onReset={resetFilters}
      />

      {/* Статистика */}
      <div className="mb-4 text-sm text-gray-600">
        Найдено заданий: {challenges.length}
      </div>

      {/* Контент */}
      {loading ? (
        <Loader />
      ) : challenges.length === 0 ? (
        <EmptyState onReset={resetFilters} />
      ) : (
        <ChallengeGrid challenges={challenges} />
      )}
    </div>
  );
}