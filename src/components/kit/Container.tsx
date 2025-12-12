import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type ContainerSize = 'normal' | 'wide' | 'narrow';

interface ContainerProps extends PropsWithChildren {
  size?: ContainerSize;
  className?: string;
  centered?: boolean
}

const sizeClasses = {
  normal: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
};

export const Container = ({ size = 'normal', children, centered = false, className = '' }: ContainerProps) => {
  return (
    <div className={clsx(
      'container px-2 sm:px-4 md:px-6 lg:px-8',
      centered && 'mx-auto',
      sizeClasses[size],
      className
    )}
      data-element='container'>
      {children}
    </div>
  );
};