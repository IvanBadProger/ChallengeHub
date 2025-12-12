import { INTERNAL_LINKS, SITE_CONFIG } from '@/data/config';
import clsx from 'clsx';

interface LogoProps {
  asLink?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ asLink = true, size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-lg',
    lg: 'w-12 h-12 text-xl',
  };

  const textClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const content = (
    <>
      <div
        className={clsx(
          'bg-gradient-to-br from-primary-500 to-primary-700',
          'rounded-xl flex items-center justify-center',
          'shadow-card group-hover:shadow-card-hover',
          'transition-all duration-300',
          sizeClasses[size]
        )}
      >
        <span className="text-white font-bold">CH</span>
      </div>
      <div>
        <h1
          className={clsx(
            'font-bold bg-gradient-to-r from-neutral-900 to-primary-500 bg-clip-text text-transparent',
            textClasses[size]
          )}
        >
          {SITE_CONFIG.name}
        </h1>
        <p
          className={clsx(
            'text-neutral-500',
            size === 'sm' && 'text-xs',
            size === 'md' && 'text-sm',
            size === 'lg' && 'text-base',
            'hidden sm:block'
          )}
        >
          {SITE_CONFIG.tagline}
        </p>
      </div>
    </>
  );

  if (asLink) {
    return (
      <a
        href={INTERNAL_LINKS.HOME}
        className="flex items-center space-x-3 group"
        aria-label="Главная страница"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center space-x-3 group">{content}</div>;
}
