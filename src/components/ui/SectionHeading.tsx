import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  icon?: LucideIcon;
  badge?: string;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  align = 'center',
  icon: Icon,
  badge,
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`max-w-3xl ${alignmentClasses[align]} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-4">
          {Icon && <Icon className="h-4 w-4 text-blue-600" />}
          <span className="text-xs font-medium text-blue-800">{badge}</span>
        </div>
      )}
      
      {subtitle && (
        <h3 className="text-lg font-medium text-blue-600 mb-2">{subtitle}</h3>
      )}
      
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      
      {description && (
        <p className="text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading; 