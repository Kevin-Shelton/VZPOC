'use client'

import React, { useState, useEffect } from 'react';
import { useTranslation, Translatable } from '@/components/shared/TranslationProvider';
import NoTranslate from '@/components/shared/NoTranslate';

/**
 * TranslatableText component
 * 
 * A component for dynamic text content that needs to be translated on-the-fly.
 * This component handles loading states and automatic retries for translation.
 * 
 * @example
 * <TranslatableText 
 *   text="Welcome to our store" 
 *   nonTranslatable={["Verizon"]} 
 *   showLoading={true} 
 * />
 */
export const TranslatableText: React.FC<{
  text: string;
  nonTranslatable?: string[];
  context?: string;
  showLoading?: boolean;
  className?: string;
}> = ({
  text,
  nonTranslatable,
  context,
  showLoading = false,
  className = ''
}) => {
  const { translate, language } = useTranslation();
  const [translatedText, setTranslatedText] = useState(text);
  const [isLoading, setIsLoading] = useState(language !== 'en');
  
  useEffect(() => {
    // Skip if language is English
    if (language === 'en') {
      setTranslatedText(text);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    
    // Get initial translation
    const result = translate(text, {
      nonTranslatable,
      context
    });
    
    if (result.isTranslated) {
      setTranslatedText(result.text);
      setIsLoading(false);
    } else {
      // Set up polling for translation
      const interval = setInterval(() => {
        const updatedResult = translate(text, {
          nonTranslatable,
          context
        });
        
        if (updatedResult.isTranslated) {
          setTranslatedText(updatedResult.text);
          setIsLoading(false);
          clearInterval(interval);
        }
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [text, language, nonTranslatable, context, translate]);
  
  if (isLoading && showLoading) {
    return (
      <span className={`translatable-text ${className}`}>
        {translatedText}
        <span className="translation-loading-indicator ml-1" aria-hidden="true">
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
      </span>
    );
  }
  
  return <span className={`translatable-text ${className}`}>{translatedText}</span>;
};

export default TranslatableText;
