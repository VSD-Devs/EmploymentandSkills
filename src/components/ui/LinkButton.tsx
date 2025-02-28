import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  className?: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon = <ArrowRight className="h-4 w-4" />,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors";
  
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200",
    outline: "bg-transparent text-blue-600 hover:bg-blue-50 border border-blue-300",
  };
  
  const sizeStyles = {
    sm: "text-xs px-3 py-2 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="icon">{icon}</span>}
      {children}
      {iconPosition === 'right' && icon && <span className="icon">{icon}</span>}
    </Link>
  );
};

export default LinkButton; 