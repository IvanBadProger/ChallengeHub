import type { Filter } from '@/data/types';
import type { FilterButton } from '../types';
import { Button } from '@/components/kit/Button';

interface FilterButtonsProps<T extends string | undefined> {
  title: string;
  filters: FilterButton[];
  activeFilter: T;
  onFilterChange: (filter: T) => void;
  activeClass: string;
  inactiveClass: string;
}

export function FilterButtons<T extends Filter>({
  title,
  filters,
  activeFilter,
  onFilterChange,
  activeClass,
  inactiveClass,
}: FilterButtonsProps<T>) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}:</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ filter, label }) => (
          <Button
            key={filter || 'all'}
            onClick={() => onFilterChange(filter as T)}
            variant="outline"
            size="sm"
            className={activeFilter === filter ? activeClass : inactiveClass}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
