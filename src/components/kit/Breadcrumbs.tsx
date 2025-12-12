import clsx from 'clsx';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  maxLines?: number; // опционально: ограничение строк
}

export const Breadcrumbs = ({
  items,
  className = '',
  maxLines = 1
}: BreadcrumbsProps) => {
  return (
    <nav
      className={clsx('text-sm', className)}
      data-element={'breadcrumbs'}
    >
      <ol
        className={clsx(
          'flex flex-wrap items-center gap-y-1 gap-x-2 text-sm text-neutral-500',
          maxLines === 1 && 'overflow-hidden whitespace-nowrap',
          maxLines === 2 && 'line-clamp-2',
          maxLines > 2 && `line-clamp-${maxLines}`
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              className="flex items-center flex-shrink-0"
              aria-current={isLast ? 'page' : undefined}
            >
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className={clsx(
                    'hover:text-primary-500',
                    'transition-colors',
                    'truncate max-w-[120px] sm:max-w-[200px]'
                  )}
                  title={item.label}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={clsx(
                    isLast ? 'text-neutral-900 font-medium' : 'text-neutral-600',
                    'truncate max-w-[150px] sm:max-w-none'
                  )}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <span
                  className="mx-1 text-neutral-400 flex-shrink-0"
                  aria-hidden="true"
                >
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};