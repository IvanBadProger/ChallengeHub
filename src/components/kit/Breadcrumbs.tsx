import clsx from 'clsx';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

// fix: правильный a11y

export const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  return (
    <nav className={clsx('text-sm', className)}>
      <ol className="flex items-center space-x-2 text-sm text-neutral-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <a
                href={item.href}
                className={clsx('hover:text-primary-500', 'transition-colors')}
                title={`Перейти к странице "${item.label}"`}
              >
                {item.label}
              </a>
            ) : (
              <span className="text-neutral-900 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-1 text-neutral-400" aria-hidden="true">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
