import type { Challenge } from '@/data/types';
import { useChallengeFilter } from '../hooks/useChallengeFilter';
import { FilterButtons } from './FilterButtons';
import { EmptyState } from './EmptyState';
import { Button, Loader } from '@/components/kit';
import { CATEGORY_FILTERS, DIFFICULTY_FILTERS } from '../constants';
import { ChallengeGrid, Pagination } from '@/components';
import type { ReactNode } from 'react';

interface ChallengeFilterProps {
  initialChallenges: Challenge[];
}
export const ACTIVE_CLASS = 'bg-accent-600 text-white hover:bg-accent-700';
export const INACTIVE_CLASS = 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300';

export function ChallengeFilter({ initialChallenges }: ChallengeFilterProps) {
  const {
    challenges,
    loading,
    activeDifficulty,
    activeCategory,
    activePage,
    totalPages,
    total,
    handlePageFilter,
    handleDifficultyFilter,
    handleCategoryFilter,
    resetFilters,
  } = useChallengeFilter(initialChallenges);

  const pagination: ReactNode =
    activePage && totalPages > 1 && (
      <Pagination
        activePage={activePage}
        onPageChange={handlePageFilter}
        totalPages={totalPages} />
    )

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

      {(activeCategory || activeDifficulty) &&
        <Button
          onClick={resetFilters}
          variant="outline"
          size="sm"
        >
          Сбросить фильтры
        </Button>
      }

      {/* Статистика */}
      <div className="mb-4 text-sm text-neutral-700">Найдено заданий: {total}</div>

      {pagination}

      {/* Контент */}
      {loading ? (
        <Loader />
      ) : challenges.length === 0 ? (
        <EmptyState onReset={resetFilters} />
      ) : (
        <ChallengeGrid challenges={challenges} />
      )}

      {pagination}

    </div>
  );
}
