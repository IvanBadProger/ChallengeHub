import type { Challenge } from '../../../../data/types';
import ChallengeCard from '../../ChallengeCard';

interface ChallengeGridProps {
  challenges: Challenge[];
}

export function ChallengeGrid({ challenges }: ChallengeGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {challenges.map(challenge => (
        <ChallengeCard
          as={'article'}
          key={challenge.id}
          {...challenge}
        />
      ))}
    </div>
  );
}