import React from 'react';
import clsx from 'clsx';

interface ChevronIconProps {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({
  className = '',
  direction = 'down'
}) => {
  const rotationClasses = {
    up: '-rotate-180',
    down: '',
    left: '-rotate-90',
    right: 'rotate-90'
  };

  return (
    <svg
      className={clsx(
        'w-4 h-4 transition-transform duration-200',
        rotationClasses[direction],
        className
      )}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-element='chevron-icon'
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};