import React from 'react';
import { cn } from '@/lib/utils';

interface SurfaceProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass' | 'card';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  theme?: 'dark' | 'light';
  glow?: boolean;
}

export function Surface({
  children,
  variant = 'primary',
  hover = false,
  padding = 'md',
  className = '',
  theme = 'dark',
  glow = false
}: SurfaceProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12'
  };

  const getVariantClasses = () => {
    if (theme === 'light') {
      switch (variant) {
        case 'glass':
          return 'glass-surface-light';
        case 'card':
          return 'modern-card-light';
        case 'secondary':
          return 'bg-[var(--color-bg-light-surface)] border border-[var(--color-border-light-primary)] rounded-2xl';
        default:
          return 'bg-[var(--color-bg-light-surface)] border border-[var(--color-border-light-primary)] rounded-2xl';
      }
    } else {
      switch (variant) {
        case 'glass':
          return 'glass-surface';
        case 'card':
          return 'modern-card';
        case 'secondary':
          return 'bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] rounded-2xl';
        default:
          return 'bg-[var(--color-bg-surface)] border border-[var(--color-border-primary)] rounded-2xl';
      }
    }
  };

  const hoverClasses = hover ? 'hover-lift cursor-pointer' : '';
  const glowClasses = glow ? 'glow-effect' : '';

  return (
    <div 
      className={cn(
        getVariantClasses(),
        paddingClasses[padding],
        hoverClasses,
        glowClasses,
        className
      )}
    >
      {children}
    </div>
  );
}