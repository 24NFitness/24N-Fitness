import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'light';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fadeIn?: boolean;
  className?: string;
}

export function Section({ 
  id, 
  children, 
  background = 'primary', 
  padding = 'lg',
  fadeIn = true,
  className = '' 
}: SectionProps) {
  const getBackgroundClass = () => {
    switch (background) {
      case 'light':
        return 'bg-white text-gray-900';
      case 'secondary':
        return 'bg-gray-100 text-gray-900';
      case 'primary':
      default:
        return 'bg-black text-white';
    }
  };

  const getPaddingClass = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'sm':
        return 'py-8';
      case 'md':
        return 'py-16';
      case 'xl':
        return 'py-32';
      case 'lg':
      default:
        return 'section-padding';
    }
  };

  const sectionClasses = [
    getBackgroundClass(),
    getPaddingClass(),
    fadeIn ? 'fade-in-section' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <section id={id} className={sectionClasses}>
      <div className="content-width container-padding">
        {children}
      </div>
    </section>
  );
}