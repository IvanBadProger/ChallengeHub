import type { PropsWithChildren, ElementType } from 'react';
import clsx from 'clsx';

interface CardProps extends PropsWithChildren {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card = ({
  className = '',
  children,
  as: Component = 'div',
  href,
  onClick,
  hoverable = false,
  ...props
}: CardProps) => {
  const baseClasses = clsx(
    'bg-neutral-50',
    'rounded-xl shadow-card',
    'border border-neutral-200',
    'transition-all duration-300',
    'p-3',
    'sm:p-4',
    'md:p-5',
    'lg:p-6',
    'xl:p-7',
    '2xl:p-8',
    hoverable && 'hover:shadow-card-hover hover:border-neutral-300 hover:-translate-y-0.5',
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick} data-element='card' {...props}>
        <div className="h-full">{children}</div>
      </a>
    );
  }

  return (
    <Component className={baseClasses} onClick={onClick} data-element='card' {...props}>
      <div className="h-full">{children}</div>
    </Component>
  );
};