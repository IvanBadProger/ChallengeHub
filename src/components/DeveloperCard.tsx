import React from 'react';
import { SITE_CONFIG } from '../data/config';

const DeveloperCard = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-3">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          {SITE_CONFIG.developer.initials}
        </div>
        <div>
          <p className="font-medium text-white">{SITE_CONFIG.developer.name}</p>
          <p className="text-sm text-gray-400">{SITE_CONFIG.developer.role}</p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <a
          href={SITE_CONFIG.developer.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
        >
          <span>🌐</span>
          <span>Портфолио</span>
        </a>
        <a
          href={SITE_CONFIG.developer.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
        >
          <span>💻</span>
          <span>GitHub</span>
        </a>
        <a
          href={`mailto:${SITE_CONFIG.developer.email}`}
          className="text-gray-300 hover:text-blue-400 transition-colors flex items-center space-x-2"
        >
          <span>📧</span>
          <span>Написать</span>
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;