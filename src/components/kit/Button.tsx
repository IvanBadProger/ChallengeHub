import type { PropsWithChildren } from 'react';
import clsx from 'clsx';
import { ButtonSpinner, Loader } from './Loader';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends PropsWithChildren {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  title?: string;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  external?: boolean;
  rel?: string;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  type = 'button',
  disabled = false,
  title,
  external,
  rel,
  loading = false,
  fullWidth = false,
}: ButtonProps) => {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: clsx(
      'bg-primary-500 hover:bg-primary-600 active:bg-primary-700',
      'text-white',
      'disabled:bg-primary-400'
    ),
    secondary: clsx(
      'bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-700',
      'text-white',
      'disabled:bg-secondary-400'
    ),
    accent: clsx(
      'bg-accent-500 hover:bg-accent-600 active:bg-accent-700',
      'text-white',
      'disabled:bg-accent-400'
    ),
    outline: clsx(
      'border border-primary-500',
      'text-primary-500',
      'hover:bg-primary-50 hover:text-primary-600',
      'active:bg-primary-100 active:text-primary-700',
      'disabled:border-primary-400 disabled:text-primary-400 disabled:hover:bg-transparent'
    ),
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-center',
    'rounded-md font-medium',
    'transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
    'focus:ring-offset-neutral-50',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full'
  );

  const combinedClasses = clsx(baseClasses, variantClasses[variant], sizeClasses[size], className);

  const isDisabled = loading || disabled;

  if (href) {
    const linkRel = external ? 'noopener noreferrer' : rel;
    const linkTarget = external ? '_blank' : undefined;

    return (
      <a
        href={href}
        aria-disabled={isDisabled}
        aria-busy={loading}
        className={combinedClasses}
        title={title}
        rel={linkRel}
        target={linkTarget}
        onClick={isDisabled ? (e) => e.preventDefault() : onClick}
      >
        {loading && (
          <span className="mr-2" aria-hidden="true">
            <ButtonSpinner />
          </span>
        )}
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      disabled={isDisabled}
      title={title}
      aria-busy={loading}
    >
      {loading && (
        <span className="mr-2" aria-hidden="true">
          <Loader />
        </span>
      )}
      {children}
    </button>
  );
};
