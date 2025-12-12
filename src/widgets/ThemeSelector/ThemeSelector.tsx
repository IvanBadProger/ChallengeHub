import { useState } from 'react';
import { useTheme } from './useTheme';
import { Button } from '@/components/kit';
import { Dropdown } from '@/components/kit';
import { CheckIcon, MoonIcon, SunIcon } from '@/components/icons';
import type { Theme } from '@/data/types';
import clsx from 'clsx';

interface ThemeSelectorProps {
  className?: string;
  initialTheme: Theme;
}

export const ThemeSelector = ({ className = '', initialTheme }: ThemeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(initialTheme);

  const themeOptions = [
    {
      value: 'light',
      label: 'Светлая тема',
      icon: SunIcon,
      description: 'Яркий интерфейс',
    },
    {
      value: 'dark',
      label: 'Тёмная тема',
      icon: MoonIcon,
      description: 'Комфорт для глаз',
    },
  ] as const;

  const currentThemeOption = themeOptions.find((opt) => opt.value === theme);

  const triggerButton = (
    <Button
      variant="outline"
      size="sm"
      className={clsx(
        'group rounded-full p-2 hover:bg-neutral-100 transition-all duration-200',
        isOpen && 'bg-neutral-100',
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      aria-label={`Тема: ${currentThemeOption?.label}`}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      <div className="relative w-5 h-5">
        <div
          className={clsx(
            'absolute inset-0 transition-all duration-300',
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
          )}
        >
          <SunIcon className="w-full h-full text-primary-500" />
        </div>
        <div
          className={clsx(
            'absolute inset-0 transition-all duration-300',
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          )}
        >
          <MoonIcon className="w-full h-full text-primary-400" />
        </div>
      </div>
    </Button>
  );

  return (
    <div className="relative">
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trigger={triggerButton}
        align="right"
        className="w-48"
      >
        <div className="py-1">
          <div className="px-4 py-2">
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide">
              Тема
            </p>
          </div>

          {themeOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.value}
                className={clsx(
                  'flex items-center gap-3 w-full px-4 py-3 text-sm text-left transition-colors duration-150 hover:bg-neutral-50',
                  theme === option.value && 'bg-primary-50'
                )}
                onClick={() => {
                  if (theme !== option.value) {
                    toggleTheme();
                  }
                  setIsOpen(false);
                }}
                aria-current={theme === option.value ? 'true' : 'false'}
              >
                <div
                  className={clsx(
                    'p-1.5 rounded-md',
                    theme === option.value
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-neutral-100 text-neutral-700'
                  )}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex-1">
                  <div
                    className={clsx(
                      'font-medium',
                      theme === option.value ? 'text-primary-600' : 'text-neutral-800'
                    )}
                  >
                    {option.label}
                  </div>
                  <div className="text-xs text-neutral-500">{option.description}</div>
                </div>

                {theme === option.value && (
                  <div className="text-primary-500">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                )}
              </button>
            );
          })}

          <div className="px-4 py-3 border-t border-neutral-200">
            <p className="text-xs text-neutral-500">
              Текущая тема:&nbsp;
              <span className="font-medium">{theme}</span>
            </p>
          </div>
        </div>
      </Dropdown>
    </div>
  );
};