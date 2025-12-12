import { SITE_CONFIG } from '../data/config';
import { GithubIcon } from './icons/GithubIcon';
import { TelegramIcon } from './icons/TelegramIcon';

interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'mobile';
}

export const SocialLinks = ({ variant = 'header' }: SocialLinksProps) => {
  if (variant === 'header') {
    return (
      <a
        href={SITE_CONFIG.social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center space-x-2 px-4 py-2 text-neutral-800 hover:text-neutral-900 border border-neutral-300 rounded-lg hover:border-neutral-400 transition-all duration-200 hover:shadow-sm"
      >
        <GithubIcon />
        <span className="text-sm font-medium">GitHub</span>
      </a>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="flex space-x-4">
        <a
          href={SITE_CONFIG.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-50 transition-colors"
          aria-label="GitHub"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href={SITE_CONFIG.social.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-50 transition-colors"
          aria-label="Telegram"
        >
          <TelegramIcon />
        </a>
      </div>
    );
  }

  return (
    <a
      href={SITE_CONFIG.social.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 px-4 py-2 text-neutral-800 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg"
    >
      <GithubIcon className="w-4 h-4" />
      <span>GitHub</span>
    </a>
  );
};
