import { useState } from 'react';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

interface MobileMenuProps {
  currentPath: string;
}

const MobileMenu = ({ currentPath }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
        aria-label="Меню"
      >
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
          <span className="w-full h-0.5 bg-gray-600 rounded"></span>
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          <Navigation currentPath={currentPath} variant="mobile" />
          <div className="border-t border-gray-200 my-2"></div>
          <SocialLinks variant="mobile" />
        </div>
      )}
    </div>
  );
};

export default MobileMenu;