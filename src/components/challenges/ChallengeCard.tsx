import type { Challenge } from '../../data/types';
import { DIFFICULTY_COLORS, CATEGORY_ICONS } from '../../data/constants';
import Button from '../ui/Button';

interface ChallengeCardProps {
  challenge: Challenge;
  showStatus?: boolean;
}

export default function ChallengeCard({ challenge, showStatus = false }: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{CATEGORY_ICONS[challenge.category]}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${DIFFICULTY_COLORS[challenge.difficulty]}`}>
            {challenge.difficulty === 'beginner' ? 'Начинающий' :
              challenge.difficulty === 'intermediate' ? 'Средний' : 'Продвинутый'}
          </span>
        </div>

        {showStatus && (
          <div className="flex space-x-1">
            {challenge.isActive && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Активно
              </span>
            )}
            {challenge.isUpcoming && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Скоро
              </span>
            )}
            {challenge.isCompleted && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Завершено
              </span>
            )}
          </div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        #{challenge.id}. {challenge.title}
      </h3>

      <p className="text-gray-600 mb-4 flex-grow">{challenge.description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {challenge.tech.map((tech) => (
            <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-500">
          Длительность: {challenge.duration} дня • Старт: {' '}
          {new Date(challenge.startDate).toLocaleDateString('ru-RU')}
        </p>
      </div>

      <Button href={`/challenges/${challenge.id}`} variant="primary" className="w-full">
        Подробнее
      </Button>
    </div>
  );
}