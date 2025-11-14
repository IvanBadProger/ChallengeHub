import { useState } from 'react';
import type { Challenge } from '../../data/types';
import ChallengeCard from './ChallengeCard';
import Button from '../ui/Button';

interface ChallengeFilterProps {
  initialChallenges: Challenge[];
  initialStats: {
    total: number;
    active: number;
    completed: number;
    upcoming: number;
  };
}

// Конфигурация кнопок фильтрации
const FILTER_BUTTONS = [
  {
    label: 'Все задания',
    filter: 'all',
  },
  {
    label: 'Активные',
    filter: 'active',
  },
  {
    label: 'Завершенные',
    filter: 'completed',
  },
  {
    label: 'Скоро',
    filter: 'upcoming',
  }
];

// Конфигурация статистики
const STATS_CONFIG = [
  {
    key: 'active' as const,
    label: 'Активные',
    color: 'bg-green-500',
  },
  {
    key: 'completed' as const,
    label: 'Завершенные',
    color: 'bg-gray-500',
  },
  {
    key: 'upcoming' as const,
    label: 'Скоро',
    color: 'bg-blue-500',
  },
  {
    key: 'total' as const,
    label: 'Всего',
    color: 'bg-purple-500',
  }
];

// Классы вынесены отдельно
const ACTIVE_CLASS = 'bg-purple-600 text-white hover:bg-purple-700';
const INACTIVE_CLASS = 'bg-gray-200 text-gray-700 hover:bg-gray-300';

export function ChallengeFilter({ initialChallenges, initialStats }: ChallengeFilterProps) {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);
  const [stats, setStats] = useState(initialStats); // Статистика с бэкенда
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const fetchFilteredChallenges = async (filter: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/challenges.json?status=${filter}`);
      const data = await response.json();

      setChallenges(data.data);
      setStats(data.stats); // Обновляем статистику с бэкенда
      setActiveFilter(filter);
    } catch (error) {
      console.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Кнопки фильтрации через конфиг */}
      <div className="flex flex-wrap gap-4 mb-8">
        {FILTER_BUTTONS.map(({ filter, label }) => (
          <Button
            key={filter}
            onClick={() => fetchFilteredChallenges(filter)}
            variant='outline'
            className={activeFilter === filter ? ACTIVE_CLASS : INACTIVE_CLASS}
          >
            {label}
          </Button>
        ))}
      </div>

      {/* Статистика через конфиг */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex flex-wrap gap-6 text-sm">
          {STATS_CONFIG.map(({ key, label, color }) => (
            <div key={key} className="flex items-center gap-2">
              <span className={`${color} w-3 h-3 rounded-full`}></span>
              <span>{label}: {stats[key]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Список заданий */}
      {loading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2 text-gray-600">Загрузка заданий...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(challenge => (
            <ChallengeCard
              key={challenge.id}
              challenge={challenge}
              showStatus={true}
            />
          ))}
        </div>
      )}

      {!loading && challenges.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">Задания не найдены</p>
          <Button
            onClick={() => fetchFilteredChallenges('all')}
            className="mt-4"
          >
            Показать все задания
          </Button>
        </div>
      )}
    </div>
  );
}