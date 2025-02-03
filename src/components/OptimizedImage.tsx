import Image from 'next/image';
import { ComponentProps } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
} & Partial<Omit<ComponentProps<typeof Image>, 'src' | 'alt'>>;

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  quality = 75,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  loading = priority ? 'eager' : 'lazy',
  ...props 
}: OptimizedImageProps) => {
  // Since we're using static export, we'll rely on browser's native lazy loading
  // and ensure proper loading attribute is set
  return (
    <Image
      src={src}
      alt={alt}
      className={`${className} transition-opacity duration-300`}
      quality={quality}
      sizes={sizes}
      loading={loading}
      priority={priority}
      {...props}
    />
  );
};

export default OptimizedImage; 