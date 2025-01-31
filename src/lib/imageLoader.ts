export default function imageLoader({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) {
  // For local images in public directory
  if (src.startsWith('/')) {
    return src;
  }
  
  // For external images (if any)
  return `${src}?w=${width}&q=${quality || 75}`;
} 