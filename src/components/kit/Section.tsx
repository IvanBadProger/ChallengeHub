import React, { type PropsWithChildren } from 'react';
import clsx from 'clsx';

export interface SectionProps extends PropsWithChildren {
  variant?: 'default' | 'centered' | 'card';
  background?: 'white' | 'gray' | 'transparent' | 'primary';
  className?: string;
  id?: string;
  'aria-labelledby'?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Section = ({
  children,
  variant = 'default',
  background = 'transparent',
  className,
  id,
  'aria-labelledby': ariaLabelledby,
  padding = 'md',
}: SectionProps) => {
  const variantClasses = {
    default: '',
    centered: 'text-center',
    card: clsx('bg-neutral-50 rounded-lg border border-neutral-200 px-6', 'shadow-card'),
  };

  const backgroundClasses = {
    white: 'bg-neutral-50',
    gray: 'bg-neutral-100',
    transparent: 'bg-transparent',
    primary: 'bg-secondary-100',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-6',
    md: 'py-12',
    lg: 'py-24',
  };

  return (
    <section
      className={clsx(
        'w-full container',
        variantClasses[variant],
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      {children}
    </section>
  );
};
