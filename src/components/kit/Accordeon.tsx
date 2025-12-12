import type { PropsWithChildren } from "react";
import clsx from 'clsx';
import { ChevronIcon } from '../icons';

interface AccordeonProps extends PropsWithChildren {
  title: string;
  icon?: string;
  defaultOpen?: boolean;
  className?: string;
}

export const Accordeon = ({
  title,
  icon,
  defaultOpen = false,
  className = '',
  children
}: AccordeonProps) => {
  return (
    <details
      className={clsx(
        'border border-neutral-200 rounded-lg overflow-hidden group',
        className
      )}
      open={defaultOpen}
      data-element='accordeon'
    >
      {/* Заголовок аккордеона */}
      <summary
        className={clsx(
          'bg-neutral-50 border-b cursor-pointer list-none',
          'px-4 py-3 flex items-center justify-between',
          'hover:bg-neutral-100 transition-colors select-none'
        )}
      >
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="font-medium text-neutral-800">
            {title}
          </span>
        </div>

        {/* Иконка стрелки */}
        <ChevronIcon className="group-open:rotate-180" />
      </summary>

      {/* Содержимое аккордеона */}
      <div className="prose prose-sm max-w-none p-4">
        {children}
      </div>
    </details>
  );
};