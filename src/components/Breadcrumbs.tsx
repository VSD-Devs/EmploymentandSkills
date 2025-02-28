import React from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav className={`flex py-3 ${className}`}>
      <ol className="flex text-sm">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && (
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
              </li>
            )}
            <li className={index === items.length - 1 ? "text-blue-600 font-medium" : "text-gray-600"}>
              {index === items.length - 1 ? (
                <span>{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-blue-600 hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs 