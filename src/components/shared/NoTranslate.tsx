'use client'

import React from 'react';

/**
 * NoTranslate component
 * 
 * Wraps content that should not be translated, such as brand names,
 * product names, technical terms, etc.
 * 
 * @example
 * <NoTranslate>Verizon</NoTranslate> Business Solutions
 */
export const NoTranslate: React.FC<{ 
  children: React.ReactNode;
  className?: string;
}> = ({ 
  children,
  className = ''
}) => {
  return (
    <span className={`notranslate ${className}`}>
      {children}
    </span>
  );
};

export default NoTranslate;
