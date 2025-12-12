import type { PropsWithChildren, ReactNode } from 'react';
import { Avatar } from './kit';

interface DeveloperCardProps extends PropsWithChildren {
  initials?: string,
  name: string,
  role: string,
}

export const DeveloperCard = ({ name, role, initials, children }: DeveloperCardProps) => {
  return (
    <div className="space-y-3">
      {/* Заголовок с аватаром */}
      <div className="flex items-center space-x-3">
        {initials &&
          <Avatar
            initials={initials}
            size="md"
          />
        }

        <div className='flex flex-col gap-1'>
          <span className="font-medium text-neutral-900">
            {name}
          </span>
          <span className="text-sm text-neutral-700">
            {role}
          </span>
        </div>

      </div>

      {/* Социальные ссылки */}
      {children}
    </div>
  );
};