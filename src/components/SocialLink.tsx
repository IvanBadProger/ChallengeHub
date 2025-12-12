import clsx from 'clsx';

interface SocialLinkProps {
  href: string;
  icon: string;
  text: string;
  className?: string;
  target?: '_blank' | '_self';
  rel?: string;
}

export const SocialLink = ({
  href,
  icon,
  text,
  className = '',
  target = '_blank',
  rel = 'noopener noreferrer'
}: SocialLinkProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={clsx(
        'text-neutral-600 hover:text-primary-400',
        'transition-colors flex items-center space-x-2',
        className
      )}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </a>
  );
};