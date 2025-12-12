import type { Category, Difficulty } from '@/data/types';
import { Button } from '@/components/kit/Button';
import type { FilterButton } from '../types';

interface ActiveFiltersProps {
  activeDifficulty?: Difficulty;
  activeCategory?: Category;
  difficultyFilters: FilterButton[];
  categoryFilters: FilterButton[];
  onReset: () => void;
}

export function ActiveFilters({
  activeDifficulty,
  activeCategory,
  difficultyFilters,
  categoryFilters,
  onReset,
}: ActiveFiltersProps) {
  const hasActiveFilters = activeDifficulty || activeCategory;

  if (!hasActiveFilters) return null;

  return (
    <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-primary-800">
          Активные фильтры:
          {activeDifficulty &&
            ` Сложность: ${difficultyFilters.find((f) => f.filter === activeDifficulty)?.label}`}
          {activeCategory &&
            ` Категория: ${categoryFilters.find((f) => f.filter === activeCategory)?.label}`}
        </div>
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="text-primary-600 border-primary-300 hover:bg-primary-100"
        >
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
}
