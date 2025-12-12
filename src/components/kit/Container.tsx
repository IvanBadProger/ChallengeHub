import type { PropsWithChildren } from 'react';
import clsx from 'clsx';

type ContainerSize = 'normal' | 'wide' | 'narrow';

interface ContainerProps extends PropsWithChildren {
  size?: ContainerSize;
  className?: string;
}

const sizeClasses = {
  normal: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-4xl',
};

export const Container = ({ size = 'normal', children, className = '' }: ContainerProps) => {
  return (
    <div className={clsx('container mx-auto px-4', sizeClasses[size], className)}>{children}</div>
  );
};
