import clsx from 'clsx';

interface ArrowIconProps {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ArrowIcon = ({ className, direction = 'down' }: ArrowIconProps) => {
  const rotationClasses = {
    up: '-rotate-180',
    down: '',
    left: '-rotate-90',
    right: 'rotate-90'
  };

  return (
    <svg className={clsx(
      'w-4 h-4 transition-transform duration-200',
      rotationClasses[direction],
      className
    )}
      fill="none"
      stroke="currentColor"
      data-element='arrow-icon' viewBox="0 0 24 24">

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10l7-7m0 0l7 7m-7-7v18"
      />
    </svg>
  );
}