import { SITE_CONFIG } from '@/data/config';

export const TechnologyTags = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {SITE_CONFIG.technologies.map((tech) => (
        <li
          key={tech}
          className="bg-neutral-800 text-neutral-100 px-4 py-2 rounded-full text-sm border border-neutral-800 hover:border-primary-500 hover:text-primary-400 transition-colors"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
};
