import { useEffect, useRef, type ReactNode } from 'react';
import clsx from 'clsx';

interface DropdownProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export const Dropdown = ({
  isOpen,
  onClose,
  trigger,
  children,
  align = 'right',
  className = '',
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return <div className="relative">{trigger}</div>;
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {trigger}

      <div
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={clsx(
          'absolute z-50 mt-2 min-w-[12rem]',
          'rounded-lg border border-neutral-200',
          'bg-neutral-50 shadow-dropdown',
          'animate-in fade-in slide-in-from-top-2 duration-200',
          align === 'right' ? 'right-0' : 'left-0',
          className
        )}
        role="menu"
        aria-orientation="vertical"
      >
        {children}
      </div>
    </div>
  );
};
