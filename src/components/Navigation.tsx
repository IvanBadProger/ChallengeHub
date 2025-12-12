import { SITE_CONFIG } from '@/data/config';
import clsx from 'clsx';

interface NavigationProps {
  currentPath: string;
  variant?: 'desktop' | 'mobile';
}

export const Navigation = ({ currentPath, variant = 'desktop' }: NavigationProps) => {
  const isActive = (href: string) => {
    return currentPath.startsWith(href);
  };

  if (variant === 'desktop') {
    return (
      <nav className="hidden md:flex items-center space-x-8">
        {SITE_CONFIG.navigation.map((item) => {
          const active = isActive(item.href);

          return (
            <a
              key={item.href}
              href={item.href}
              className={clsx(
                'font-medium transition-all duration-200',
                'hover:text-primary-600',
                active
                  ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                  : 'text-neutral-800 hover:border-b-2 hover:border-primary-600 hover:pb-1'
              )}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="space-y-2">
      {SITE_CONFIG.navigation.map((item) => {
        const active = isActive(item.href);

        return (
          <a
            key={item.href}
            href={item.href}
            className={clsx(
              'block py-2 px-3 transition-colors rounded-lg',
              'hover:bg-primary-50 hover:text-primary-600',
              active
                ? 'bg-primary-50 text-primary-600 font-medium'
                : 'text-neutral-800'
            )}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </a>
        );
      })}
    </nav>
  );
};