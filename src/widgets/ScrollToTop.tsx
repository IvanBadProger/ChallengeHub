import { useState, useEffect } from 'react';
import { Button } from '@/components/kit';
import { ArrowTopIcon } from '@/components/icons';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      variant="primary"
      size="sm"
      className="!rounded-full w-12 h-12 !p-0 shadow-lg hover:shadow-xl transition-all duration-300 fixed bottom-6 right-6 z-50 animate-fade-in"
      title="Вернуться наверх"
    >
      <ArrowTopIcon />
    </Button>
  );
};
