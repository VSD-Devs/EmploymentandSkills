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
  darkMode?: boolean
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  className = '', 
  darkMode = false 
}) => {
  // Updated color classes to match EmploymentSupportPage.tsx
  const textColor = darkMode ? 'text-white/80' : 'text-gray-600'
  const activeColor = darkMode ? 'text-white font-medium' : 'text-blue-600 font-medium'
  const chevronColor = darkMode ? 'text-white/40' : 'text-gray-400'
  const hoverColor = darkMode ? 'hover:text-white hover:underline' : 'hover:text-blue-600 hover:underline'
  
  return (
    <nav 
      className={`flex items-center py-2 overflow-x-auto scrollbar-hide ${className}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center flex-nowrap text-[13px] !leading-snug">
        {items.map((item, index) => (
          <React.Fragment key={item.href}>
            {index > 0 && (
              <li className="flex items-center flex-shrink-0">
                <ChevronRight className={`h-3.5 w-3.5 ${chevronColor} mx-2 !text-[13px]`} />
              </li>
            )}
            <li className={`flex-shrink-0 ${index === items.length - 1 ? activeColor : textColor} !text-[13px]`}>
              {index === items.length - 1 ? (
                <span aria-current="page" className="!text-[13px]">{item.label}</span>
              ) : (
                <Link href={item.href} className={`${hoverColor} transition-colors duration-150 !text-[13px]`}>
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