import type { Challenge } from '@/data/types';
import { Button, Card } from './kit';
import { CATEGORY_ICONS, DIFFICULTY_COLORS, DIFFICULTY_LABELS } from '@/data/constants';
import { INTERNAL_LINKS } from '@/data/config';
import { CategoryBadge, DifficultyBadge } from '@/widgets';

interface ChallengeCardProps extends Challenge {
  as?: React.ElementType;
}

export function ChallengeCard({
  category,
  difficulty,
  title,
  id,
  description,
  tech,
  as,
}: ChallengeCardProps) {
  return (
    <Card className="h-full flex flex-col" as={as}>
      <div className="flex flex-col h-full">
        {/* Верхняя часть - фиксированная высота */}
        <div className="flex-shrink-0">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
              <CategoryBadge category={category} />
              <DifficultyBadge difficulty={difficulty} />
            </div>
          </div>
        </div>

        {/* Средняя часть - растягивается на все доступное пространство */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            {title}
          </h3>

          <p className="text-neutral-700 mb-4 flex-grow">{description}</p>

          <div className="flex-shrink-0">
            <div className="flex flex-wrap gap-1 mb-4">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="bg-neutral-100 text-neutral-800 px-2 py-1 rounded text-xs"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть - фиксированная высота */}
        <div className="flex-shrink-0">
          <Button href={INTERNAL_LINKS.challenge(id)} variant="primary" className="w-full">
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
}
