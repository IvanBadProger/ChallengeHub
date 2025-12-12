import { type PropsWithChildren } from 'react';
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
    card: clsx(
      'bg-neutral-50 rounded-lg border border-neutral-200 shadow-card',
      // Адаптивные горизонтальные отступы для card варианта
      'px-2 sm:px-4 md:px-6'
    ),
  };

  const backgroundClasses = {
    white: 'bg-neutral-50',
    gray: 'bg-neutral-100',
    transparent: 'bg-transparent',
    primary: 'bg-secondary-100',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-6 sm:py-8 md:py-10',
    md: 'py-8 sm:py-12 md:py-16 lg:py-20',
    lg: 'py-12 sm:py-16 md:py-24 lg:py-32',
  };

  return (
    <section
      className={clsx(
        'w-full',
        variantClasses[variant],
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      id={id}
      aria-labelledby={ariaLabelledby}
      data-element='section'
    >
      {children}
    </section>
  );
};