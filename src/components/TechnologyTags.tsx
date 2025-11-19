import { SITE_CONFIG } from '../data/config';

const TechnologyTags: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {SITE_CONFIG.technologies.map((tech) => (
        <span
          key={tech}
          className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechnologyTags;