import Button from '../../../kit/Button';
import type { FilterButton } from '../types';

interface FilterButtonsProps {
  title: string;
  filters: FilterButton[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  activeClass: string;
  inactiveClass: string;
}

export function FilterButtons({
  title,
  filters,
  activeFilter,
  onFilterChange,
  activeClass,
  inactiveClass
}: FilterButtonsProps) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}:</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ filter, label }) => (
          <Button
            key={filter}
            onClick={() => onFilterChange(filter)}
            variant='outline'
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