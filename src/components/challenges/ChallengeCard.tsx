import type { Challenge } from '../../data/types';
import { DIFFICULTY_COLORS, CATEGORY_ICONS, DIFFICULTY_LABELS } from '../../data/constants';
import Button from '../kit/Button';
import Card from '../kit/Card';

interface ChallengeCardProps extends Challenge {
  as?: React.ElementType;
}

export default function ChallengeCard({
  category,
  difficulty,
  title,
  id,
  description,
  tech,
  as
}: ChallengeCardProps) {
  return (
    <Card className="h-full flex flex-col" as={as}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${DIFFICULTY_COLORS[difficulty]}`}>
            {DIFFICULTY_LABELS[difficulty]}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        #{id}. {title}
      </h3>

      <p className="text-gray-600 mb-4 flex-grow">{description}</p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {tech.map((techItem) => (
            <span key={techItem} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {techItem}
            </span>
          ))}
        </div>
      </div>

      <Button href={`/challenges/${id}`} variant="primary" className="w-full">
        Подробнее
      </Button>
    </Card>
  );
}