import { Button } from "@/components/kit";

interface PaginationProps {
  totalPages: number;
  activePage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  activePage,
  totalPages,
  onPageChange
}: PaginationProps) => {
  if (!activePage || totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(activePage - 1)}
        disabled={activePage <= 1}
        className="px-3 sm:px-4"
        title="Предыдущая страница"
        aria-label="Предыдущая страница"
      >
        ←
      </Button>

      <div className="flex items-center gap-1 sm:gap-2 text-sm">
        <div className="sm:hidden">
          <span className="text-neutral-900 px-2 py-1 bg-secondary-100 rounded">
            {activePage}/{totalPages}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-neutral-500">
          <span>Страница</span>
          <span className="text-neutral-900 px-2 py-1 bg-secondary-100 rounded">
            {activePage}
          </span>
          <span>из</span>
          <span className="text-secondary-600">{totalPages}</span>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(activePage + 1)}
        disabled={activePage >= totalPages}
        className="px-3 sm:px-4"
        title="Следующая страница"
        aria-label="Следующая страница"
      >
        →
      </Button>
    </div>
  );
};