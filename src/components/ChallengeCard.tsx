import type { Challenge } from '@/data/types';
import { Button, Card } from './kit';
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
        <div className="flex-shrink-0">
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              <CategoryBadge category={category} />
              <DifficultyBadge difficulty={difficulty} />
            </div>
          </div>
        </div>

        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-semibold text-neutral-900 mb-2 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h3>

          <p className="text-neutral-700 mb-4 flex-grow line-clamp-3">
            {description}
          </p>

          <div className="flex-shrink-0">
            <div className="flex flex-wrap gap-1 mb-4 max-h-20 overflow-hidden">
              {tech.map((techItem) => (
                <span
                  key={techItem}
                  className="bg-neutral-100 text-neutral-800 px-2 py-1 rounded text-xs truncate max-w-[120px]"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0">
          <Button href={INTERNAL_LINKS.challenge(id)} variant="primary" className="w-full">
            Подробнее
          </Button>
        </div>
      </div>
    </Card>
  );
}