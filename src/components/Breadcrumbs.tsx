import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="absolute top-20 left-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 bg-white/80 rounded-lg p-2 inline-block">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <Link href={item.href} className="text-gray-800 hover:text-gray-900 flex items-center text-sm transition-colors">
                {item.label}
              </Link>
              {index < items.length - 1 && (
                <>
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 