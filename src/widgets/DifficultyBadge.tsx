import React from 'react';
import type { Challenge } from '@/data/types';
import { DIFFICULTY_LABELS } from '@/data/constants';
import { INTERNAL_LINKS } from '@/data/config';
import { Badge, type BadgeVariant } from '@/components/kit';

interface DifficultyBadgeProps {
  difficulty: Challenge['difficulty'];
  clickable?: boolean;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({
  difficulty,
  clickable = true,
  className = '',
}) => {
  const label = DIFFICULTY_LABELS[difficulty];
  const href = INTERNAL_LINKS.challengesByDifficulty(difficulty);

  // Простой маппинг без сложной логики
  const getVariant = (): BadgeVariant => {
    switch (difficulty) {
      case 'beginner':
        return 'accent';
      case 'intermediate':
        return 'primary';
      case 'advanced':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  const badgeProps = {
    variant: getVariant(),
    className,
    children: label,
  };

  if (clickable) {
    return <Badge {...badgeProps} href={href} as="a" />;
  }

  return <Badge {...badgeProps} />;
};
