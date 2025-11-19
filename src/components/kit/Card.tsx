import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  className?: string;
  as?: React.ElementType;
  href?: string;
  onClick?: () => void;
}

const Card = ({
  className = "",
  children,
  as: Component = "div",
  href,
  onClick,
  ...props
}: CardProps) => {
  const baseClasses = `
    bg-white rounded-xl shadow-sm border border-gray-200 
    hover:shadow-md hover:border-gray-400 transition-all duration-300
    transform hover:-translate-y-0.2
    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        {...props}
      >
        <div className="p-6">
          {children}
        </div>
      </a>
    );
  }

  return (
    <Component
      className={baseClasses}
      onClick={onClick}
      {...props}
    >
      <div className="p-6">
        {children}
      </div>
    </Component>
  );
};

export default Card;