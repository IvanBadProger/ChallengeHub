import type { Theme } from '@/data/types';
import { useState, useEffect } from 'react';

export const useTheme = (initialTheme: Theme) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Только на клиенте проверяем localStorage
    const saved = localStorage.getItem('theme') as Theme | null;
    if (saved && saved !== theme) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
      document.cookie = `theme=${saved}; path=/; max-age=31536000`;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  return { theme: mounted ? theme : initialTheme, toggleTheme };
};