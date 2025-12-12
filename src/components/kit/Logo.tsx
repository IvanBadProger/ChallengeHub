import { INTERNAL_LINKS, SITE_CONFIG } from '@/data/config';
import clsx from 'clsx';

interface LogoProps {
  asLink?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({
  asLink = true,
  size = 'md',
  className = ''
}: LogoProps) {
  const sizeClasses = {
    sm: {
      icon: 'w-8 h-8 text-sm',
      text: 'text-xl',
      tagline: 'text-xs'
    },
    md: {
      icon: 'w-10 h-10 text-lg',
      text: 'text-2xl',
      tagline: 'text-sm'
    },
    lg: {
      icon: 'w-12 h-12 text-xl',
      text: 'text-3xl',
      tagline: 'text-base'
    },
  };

  const currentSize = sizeClasses[size];
  const currentSizeClass = currentSize.icon;
  const currentTextClass = currentSize.text;
  const currentTaglineClass = currentSize.tagline;

  const content = (
    <>
      {/* Логотип-иконка */}
      <div
        className={clsx(
          'bg-gradient-to-br from-primary-500 to-primary-700',
          'rounded-xl flex items-center justify-center',
          'shadow-card group-hover:shadow-card-hover',
          'transition-all duration-300',
          'flex-shrink-0',
          currentSizeClass
        )}
      >
        <span className="text-white font-bold">CH</span>
      </div>

      {/* Текстовая часть - скрывается на мобильных */}
      <div className={clsx('hidden md:block')}>
        <span
          className={clsx(
            'font-bold bg-gradient-to-r from-neutral-900 to-primary-500 bg-clip-text text-transparent',
            currentTextClass
          )}
        >
          {SITE_CONFIG.name}
        </span>
        <p
          className={clsx(
            'text-neutral-500',
            currentTaglineClass,
            'hidden sm:block'
          )}
        >
          {SITE_CONFIG.tagline}
        </p>
      </div>
    </>
  );

  const containerClasses = clsx(
    'flex items-center space-x-3 group',
    className
  );

  if (asLink) {
    return (
      <a
        href={INTERNAL_LINKS.HOME}
        className={containerClasses}
        aria-label="Главная страница"
        data-element='logo'
      >
        {content}
      </a>
    );
  }

  return <div className={containerClasses} data-element='logo'>{content}</div>;
}