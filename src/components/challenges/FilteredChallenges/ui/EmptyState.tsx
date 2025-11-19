import Button from '../../../kit/Button';

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <div className="text-center py-12 bg-gray-50 rounded-lg">
      <p className="text-gray-500 text-lg">Задания не найдены</p>
      <p className="text-gray-500 text-sm mt-2">Попробуйте изменить параметры фильтрации</p>
      <Button
        onClick={onReset}
        className="mt-4"
      >
        Показать все задания
      </Button>
    </div>
  );
}