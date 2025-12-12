import { SITE_CONFIG } from '@/data/config';

interface NavigationProps {
  currentPath: string;
  variant?: 'desktop' | 'mobile';
}

export const Navigation = ({ currentPath, variant = 'desktop' }: NavigationProps) => {
  if (variant === 'desktop') {

    return (
      <nav className="hidden md:flex items-center space-x-8">
        {SITE_CONFIG.navigation.map((item) => {
          const isActive =
            currentPath.startsWith(item.href);

          return (
            <a
              key={item.href}
              href={item.href}
              className={`font-medium transition-all duration-200 hover:text-primary-600 ${isActive
                ? 'text-primary-600 border-b-2 border-primary-600 pb-1'
                : 'text-neutral-800'
                }`}
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
      {SITE_CONFIG.navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block py-2 text-neutral-800 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg"
        >
          <span className="mr-2">{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
};
