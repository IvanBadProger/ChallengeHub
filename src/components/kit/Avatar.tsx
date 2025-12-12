import clsx from 'clsx';

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Avatar = ({
  initials,
  size = 'md',
  className = ''
}: AvatarProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-base',
    lg: 'w-16 h-16 text-lg'
  };

  return (
    <div
      className={clsx(
        'bg-primary-600 rounded-full flex items-center justify-center',
        'text-neutral-900 font-bold',
        sizeClasses[size],
        className
      )}
      data-element='avatar'
    >
      {initials}
    </div>
  );
};