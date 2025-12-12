import { Button } from '@/components/kit/Button';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="text-center py-12 bg-neutral-50 rounded-lg">
      <p className="text-neutral-500 text-lg">Задания не найдены</p>
      <p className="text-neutral-500 text-sm mt-2">Попробуйте изменить параметры фильтрации</p>
      <Button onClick={onReset} className="mt-4">
        Показать все задания
      </Button>
    </div>
  );
}
