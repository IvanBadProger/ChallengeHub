import React from 'react';
import { clsx } from 'clsx';

export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'outline';
export type BadgeSize = 'sm' | 'md' | 'lg';

interface BaseBadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  rounded?: boolean;
  onClick?: () => void;
}

interface BadgeAsSpanProps extends BaseBadgeProps {
  as?: 'span';
  href?: never;
}

interface BadgeAsButtonProps extends BaseBadgeProps {
  as: 'button';
  href?: never;
  type?: 'button' | 'submit' | 'reset';
}

interface BadgeAsLinkProps extends BaseBadgeProps {
  as: 'a';
  href: string;
  external?: boolean;
}

type BadgeProps = BadgeAsSpanProps | BadgeAsButtonProps | BadgeAsLinkProps;

export const Badge: React.FC<BadgeProps> = ({
  as = 'span',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon,
  iconPosition = 'left',
  rounded = true,
  onClick,
  ...props
}) => {
  // Варианты цветов
  const variantClasses: Record<BadgeVariant, string> = {
    primary: 'bg-primary-100 text-primary-800 hover:bg-primary-200 border-primary-200',
    secondary: 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200 border-secondary-200',
    accent: 'bg-accent-100 text-accent-800 hover:bg-accent-200 border-accent-200',
    outline: 'bg-transparent text-neutral-800 border-neutral-300 hover:bg-neutral-50',
  };

  // Размеры
  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  // Базовые классы
  const baseClasses = clsx(
    'inline-flex items-center gap-1.5 font-medium border transition-colors',
    rounded ? 'rounded-full' : 'rounded-md',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  // Иконка
  const iconElement = icon && (
    <span className={clsx('flex items-center', iconPosition === 'right' && 'order-1')}>{icon}</span>
  );

  // Содержимое
  const content = (
    <>
      {iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {iconPosition === 'right' && iconElement}
    </>
  );

  // Рендер нужного элемента
  switch (as) {
    case 'a': {
      const { href, external, ...linkProps } = props as BadgeAsLinkProps;
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={onClick}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          {...linkProps}
        >
          {content}
        </a>
      );
    }

    case 'button': {
      const { type = 'button', ...buttonProps } = props as BadgeAsButtonProps;
      return (
        <button type={type} className={baseClasses} onClick={onClick} {...buttonProps}>
          {content}
        </button>
      );
    }

    default: {
      return (
        <span className={baseClasses} onClick={onClick}>
          {content}
        </span>
      );
    }
  }
};
