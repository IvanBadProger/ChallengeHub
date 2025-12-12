import { type PropsWithChildren } from 'react';
import { Card } from '@/components/kit';
import clsx from 'clsx';

export interface Props {
  title: string;
  icon?: string;
  numbered?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
}

const variantStyles = {
  primary: {
    iconBg: 'bg-primary-100',
    iconText: 'text-primary-600',
    accent: 'text-primary-600',
    list: 'list-decimal marker:text-primary-600',
  },
  secondary: {
    iconBg: 'bg-secondary-100',
    iconText: 'text-secondary-600',
    accent: 'text-secondary-600',
    list: 'list-decimal marker:text-secondary-600',
  },
  accent: {
    iconBg: 'bg-accent-100',
    iconText: 'text-accent-600',
    accent: 'text-accent-600',
    list: 'list-decimal marker:text-accent-600',
  },
  neutral: {
    iconBg: 'bg-neutral-100',
    iconText: 'text-neutral-700',
    accent: 'text-neutral-700',
    list: 'list-decimal marker:text-neutral-700',
  },
};

export const ContentList = ({
  title,
  icon,
  numbered = true,
  variant = 'neutral',
  children
}: PropsWithChildren<Props>) => {
  const styles = variantStyles[variant];

  const ListTag = numbered ? 'ol' : 'ul';

  return (
    <Card >
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">
        {icon && (
          <span
            className={clsx(
              'rounded-full w-8 h-8 inline-flex items-center justify-center text-sm mr-2',
              styles.iconBg,
              styles.iconText
            )}
          >
            {icon}
          </span>
        )}
        {title}
      </h2>

      <ListTag className={clsx('space-y-3', numbered && styles.list)}>
        {children}
      </ListTag>
    </Card>
  );
};