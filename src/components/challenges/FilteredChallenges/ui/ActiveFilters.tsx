import Button from '../../../kit/Button';
import type { FilterButton } from '../types';

interface ActiveFiltersProps {
  activeDifficulty: string;
  activeCategory: string;
  difficultyFilters: FilterButton[];
  categoryFilters: FilterButton[];
  onReset: () => void;
}

export function ActiveFilters({
  activeDifficulty,
  activeCategory,
  difficultyFilters,
  categoryFilters,
  onReset
}: ActiveFiltersProps) {
  const hasActiveFilters = activeDifficulty !== 'all' || activeCategory !== 'all';

  if (!hasActiveFilters) return null;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="text-sm text-blue-800">
          Активные фильтры:
          {activeDifficulty !== 'all' && ` Сложность: ${difficultyFilters.find(f => f.filter === activeDifficulty)?.label}`}
          {activeCategory !== 'all' && ` Категория: ${categoryFilters.find(f => f.filter === activeCategory)?.label}`}
        </div>
        <Button
          onClick={onReset}
          variant="outline"
          size="sm"
          className="text-blue-600 border-blue-300 hover:bg-blue-100"
        >
          Сбросить фильтры
        </Button>
      </div>
    </div>
  );
}