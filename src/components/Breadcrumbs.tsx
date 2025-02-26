import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`flex items-center ${
              index === items.length - 1 
                ? 'text-gray-700 font-medium' 
                : 'text-gray-500'
            }`}
          >
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0 text-gray-400" />
            )}
            
            {index === items.length - 1 ? (
              <span className="text-sm sm:text-base" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href} 
                className="text-sm sm:text-base hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 