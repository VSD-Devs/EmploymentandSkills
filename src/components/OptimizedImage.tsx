import Image from 'next/image';
import { ComponentProps } from 'react';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
} & Partial<Omit<ComponentProps<typeof Image>, 'src' | 'alt'>>;

export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  quality = 85,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  ...props 
}: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      quality={quality}
      sizes={sizes}
      {...props}
    />
  );
};

export default OptimizedImage; 