
import React from 'react';
import { cn } from '@/lib/utils';

interface LoaderProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Loader: React.FC<LoaderProps> = ({ className, size = 'md' }) => {
  const sizeMap = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };
  
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div className={cn(
        'rounded-full border-t-transparent border-pi-blue animate-spin',
        sizeMap[size]
      )}></div>
    </div>
  );
};

export default Loader;
