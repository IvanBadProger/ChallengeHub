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
    <div className="flex items-center justify-center space-x-4 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(activePage - 1)}
        disabled={activePage <= 1}
        className="px-4"
        title="Предыдущая страница"
      >
        ←
      </Button>

      <div className="flex items-center space-x-2 text-sm text-neutral-500">
        <span>Страница</span>
        <span className="text-neutral-900 px-2 py-1 bg-secondary-100 rounded">
          {activePage}
        </span>
        <span>из</span>
        <span className="text-secondary-600">{totalPages}</span>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(activePage + 1)}
        disabled={activePage >= totalPages}
        className="px-4"
        title="Следующая страница"
      >
        →
      </Button>
    </div>
  );
};