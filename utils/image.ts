import { ImageProps } from 'next/image';

export const getOptimizedImageProps = (
  src: string,
  alt: string,
  priority = false
): Partial<ImageProps> => ({
  src,
  alt,
  fill: true,
  className: "object-cover",
  priority,
  quality: 100,
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
});