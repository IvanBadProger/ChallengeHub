import React from 'react';
import type { Challenge } from '@/data/types';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '@/data/constants';
import { INTERNAL_LINKS } from '@/data/config';
import { Badge } from '@/components/kit';

interface CategoryBadgeProps {
  category: Challenge['category'];
  clickable?: boolean;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  clickable = true,
  className = '',
}) => {
  const label = CATEGORY_LABELS[category];
  const icon = CATEGORY_ICONS[category];
  const href = INTERNAL_LINKS.challengesByCategory(category);

  const badgeProps = {
    variant: 'primary' as const,
    icon,
    className,
    children: label,
  };

  if (clickable) {
    return <Badge {...badgeProps} as="a" href={href} />;
  }

  return <Badge {...badgeProps} />;
};
