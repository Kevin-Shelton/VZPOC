'use client'

/**
 * TranslationService.ts
 * Service for handling real-time translation API calls
 */

// Types for translation requests and responses
export interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
  context?: string;
  nonTranslatableTerms?: string[];
}

export interface TranslationResponse {
  translatedText: string;
  detectedLanguage?: string;
  confidence?: number;
  processingTimeMs?: number;
}

export interface BatchTranslationRequest {
  texts: string[];
  sourceLanguage: string;
  targetLanguage: string;
  context?: string;
  nonTranslatableTerms?: string[];
}

export interface BatchTranslationResponse {
  translatedTexts: string[];
  processingTimeMs?: number;
}

// Cache implementation for translations
interface CacheEntry {
  text: string;
  timestamp: number;
  expiresAt?: number;
}

class TranslationCache {
  private cache: Map<string, CacheEntry> = new Map();
  private maxSize: number = 1000;
  private defaultTTL: number = 24 * 60 * 60 * 1000; // 24 hours
  
  // Get entry from cache
  get(key: string): CacheEntry | undefined {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return undefined;
    }
    
    // Check if entry has expired
    if (entry.expiresAt && Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }
    
    return entry;
  }
  
  // Set entry in cache
  set(key: string, entry: Omit<CacheEntry, 'expiresAt'>, ttl?: number): void {
    // Ensure cache doesn't exceed max size
    if (this.cache.size >= this.maxSize) {
      this.evictOldest();
    }
    
    const expiresAt = ttl ? Date.now() + ttl : Date.now() + this.defaultTTL;
    
    this.cache.set(key, {
      ...entry,
      expiresAt
    });
    
    // Persist to local storage for offline use
    this.persistToLocalStorage();
  }
  
  // Clear entire cache
  clear(): void {
    this.cache.clear();
    this.persistToLocalStorage();
  }
  
  // Evict oldest entries when cache is full
  private evictOldest(): void {
    // Find oldest entries
    const entries = Array.from(this.cache.entries())
      .sort((a, b) => a[1].timestamp - b[1].timestamp);
    
    // Remove oldest 10% of entries
    const toRemove = Math.max(1, Math.floor(this.maxSize * 0.1));
    entries.slice(0, toRemove).forEach(([key]) => {
      this.cache.delete(key);
    });
  }
  
  // Persist cache to local storage
  private persistToLocalStorage(): void {
    try {
      const serialized = JSON.stringify(Array.from(this.cache.entries()));
      localStorage.setItem('translation_cache', serialized);
    } catch (error) {
      console.error('Failed to persist translation cache:', error);
    }
  }
  
  // Load cache from local storage
  loadFromLocalStorage(): void {
    try {
      const serialized = localStorage.getItem('translation_cache');
      if (serialized) {
        const entries = JSON.parse(serialized) as [string, CacheEntry][];
        this.cache = new Map(entries);
        
        // Clean expired entries
        const now = Date.now();
        for (const [key, entry] of this.cache.entries()) {
          if (entry.expiresAt && now > entry.expiresAt) {
            this.cache.delete(key);
          }
        }
      }
    } catch (error) {
      console.error('Failed to load translation cache:', error);
    }
  }
}

// Main Translation Service class
export class TranslationService {
  private cache: TranslationCache;
  private apiUrl: string;
  private apiKey: string;
  
  constructor(apiUrl: string, apiKey: string) {
    this.cache = new TranslationCache();
    this.cache.loadFromLocalStorage();
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }
  
  /**
   * Translate a single text string
   * @param text Text to translate
   * @param targetLanguage Target language code
   * @param sourceLanguage Source language code (default: 'en')
   * @param options Additional options
   * @returns Promise with translated text
   */
  async translate(
    text: string, 
    targetLanguage: string, 
    sourceLanguage: string = 'en',
    options: {
      useCache?: boolean,
      context?: string,
      nonTranslatableTerms?: string[]
    } = {}
  ): Promise<string> {
    // Skip translation if target is the same as source
    if (targetLanguage === sourceLanguage) {
      return text;
    }
    
    // Generate cache key
    const cacheKey = `${sourceLanguage}:${targetLanguage}:${text}`;
    
    // Check cache if enabled
    if (options.useCache !== false) {
      const cached = this.cache.get(cacheKey);
      if (cached) {
        return cached.text;
      }
    }
    
    try {
      // Process non-translatable terms if provided
      let processedText = text;
      const placeholders: Record<string, string> = {};
      
      if (options.nonTranslatableTerms && options.nonTranslatableTerms.length > 0) {
        options.nonTranslatableTerms.forEach((term, index) => {
          const placeholder = `__NT_${index}__`;
          placeholders[placeholder] = term;
          
          // Replace all occurrences of the term with the placeholder
          const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          processedText = processedText.replace(regex, placeholder);
        });
      }
      
      // Prepare API request
      const request: TranslationRequest = {
        text: processedText,
        sourceLanguage,
        targetLanguage,
        context: options.context
      };
      
      // PLACEHOLDER: API call to your translation service
      // In a real implementation, this would be an actual API call
      // const response = await fetch(this.apiUrl, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${this.apiKey}`
      //   },
      //   body: JSON.stringify(request)
      // });
      // 
      // if (!response.ok) {
      //   throw new Error(`Translation API error: ${response.status}`);
      // }
      // 
      // const data: TranslationResponse = await response.json();
      // let translatedText = data.translatedText;
      
      // PLACEHOLDER: Mock response for development
      console.log('Translation API request:', request);
      const translatedText = this.mockTranslate(processedText, targetLanguage);
      
      // Restore non-translatable terms
      let finalText = translatedText;
      Object.entries(placeholders).forEach(([placeholder, original]) => {
        finalText = finalText.replace(placeholder, original);
      });
      
      // Cache the result
      this.cache.set(cacheKey, {
        text: finalText,
        timestamp: Date.now()
      });
      
      return finalText;
    } catch (error) {
      console.error('Translation failed:', error);
      return text; // Return original text on error
    }
  }
  
  /**
   * Translate multiple text strings in batch
   * @param texts Array of texts to translate
   * @param targetLanguage Target language code
   * @param sourceLanguage Source language code (default: 'en')
   * @param options Additional options
   * @returns Promise with array of translated texts
   */
  async translateBatch(
    texts: string[],
    targetLanguage: string,
    sourceLanguage: string = 'en',
    options: {
      useCache?: boolean,
      context?: string,
      nonTranslatableTerms?: string[]
    } = {}
  ): Promise<string[]> {
    // Skip translation if target is the same as source
    if (targetLanguage === sourceLanguage) {
      return texts;
    }
    
    // Check cache for all texts if enabled
    const results: string[] = new Array(texts.length);
    const textsToTranslate: string[] = [];
    const indices: number[] = [];
    
    if (options.useCache !== false) {
      texts.forEach((text, i) => {
        const cacheKey = `${sourceLanguage}:${targetLanguage}:${text}`;
        const cached = this.cache.get(cacheKey);
        
        if (cached) {
          results[i] = cached.text;
        } else {
          textsToTranslate.push(text);
          indices.push(i);
        }
      });
    } else {
      textsToTranslate.push(...texts);
      indices.push(...texts.map((_, i) => i));
    }
    
    // Return early if all texts were cached
    if (textsToTranslate.length === 0) {
      return results;
    }
    
    try {
      // Process non-translatable terms if provided
      const processedTexts: string[] = textsToTranslate.map(text => {
        if (!options.nonTranslatableTerms || options.nonTranslatableTerms.length === 0) {
          return text;
        }
        
        let processedText = text;
        options.nonTranslatableTerms.forEach((term, termIndex) => {
          const placeholder = `__NT_${termIndex}__`;
          
          // Replace all occurrences of the term with the placeholder
          const regex = new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
          processedText = processedText.replace(regex, placeholder);
        });
        
        return processedText;
      });
      
      // Prepare API request
      const request: BatchTranslationRequest = {
        texts: processedTexts,
        sourceLanguage,
        targetLanguage,
        context: options.context,
        nonTranslatableTerms: options.nonTranslatableTerms
      };
      
      // PLACEHOLDER: API call to your translation service
      // In a real implementation, this would be an actual API call
      // const response = await fetch(`${this.apiUrl}/batch`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${this.apiKey}`
      //   },
      //   body: JSON.stringify(request)
      // });
      // 
      // if (!response.ok) {
      //   throw new Error(`Translation API error: ${response.status}`);
      // }
      // 
      // const data: BatchTranslationResponse = await response.json();
      // const translatedTexts = data.translatedTexts;
      
      // PLACEHOLDER: Mock response for development
      console.log('Batch Translation API request:', request);
      const translatedTexts = processedTexts.map(text => this.mockTranslate(text, targetLanguage));
      
      // Restore non-translatable terms and cache results
      translatedTexts.forEach((translatedText, i) => {
        let finalText = translatedText;
        
        if (options.nonTranslatableTerms && options.nonTranslatableTerms.length > 0) {
          options.nonTranslatableTerms.forEach((term, termIndex) => {
            const placeholder = `__NT_${termIndex}__`;
            const regex = new RegExp(placeholder, 'g');
            finalText = finalText.replace(regex, term);
          });
        }
        
        // Cache the result
        const originalText = textsToTranslate[i];
        const cacheKey = `${sourceLanguage}:${targetLanguage}:${originalText}`;
        this.cache.set(cacheKey, {
          text: finalText,
          timestamp: Date.now()
        });
        
        // Add to results array
        results[indices[i]] = finalText;
      });
      
      return results;
    } catch (error) {
      console.error('Batch translation failed:', error);
      
      // Fill in missing results with original text
      indices.forEach((resultIndex, i) => {
        if (!results[resultIndex]) {
          results[resultIndex] = textsToTranslate[i];
        }
      });
      
      return results;
    }
  }
  
  /**
   * Mock translation function for development
   * This will be replaced by actual API calls in production
   */
  private mockTranslate(text: string, targetLanguage: string): string {
    // Simple mock translations for development purposes
    const mockDictionary: Record<string, Record<string, string>> = {
      'Hello': {
        'es': 'Hola',
        'fr': 'Bonjour',
        'de': 'Hallo'
      },
      'Welcome': {
        'es': 'Bienvenido',
        'fr': 'Bienvenue',
        'de': 'Willkommen'
      },
      'Home': {
        'es': 'Inicio',
        'fr': 'Accueil',
        'de': 'Startseite'
      }
    };
    
    // Check if we have a direct mock translation
    if (mockDictionary[text]?.[targetLanguage]) {
      return mockDictionary[text][targetLanguage];
    }
    
    // For development, just add a language prefix to show it would be translated
    return `[${targetLanguage}] ${text}`;
  }
  
  /**
   * Detect the language of a text
   * @param text Text to analyze
   * @returns Promise with detected language code
   */
  async detectLanguage(text: string): Promise<string> {
    try {
      // PLACEHOLDER: API call to your language detection service
      // In a real implementation, this would be an actual API call
      // const response = await fetch(`${this.apiUrl}/detect`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${this.apiKey}`
      //   },
      //   body: JSON.stringify({ text })
      // });
      // 
      // if (!response.ok) {
      //   throw new Error(`Language detection API error: ${response.status}`);
      // }
      // 
      // const data = await response.json();
      // return data.detectedLanguage;
      
      // PLACEHOLDER: Mock response for development
      console.log('Language detection request for:', text);
      return 'en'; // Default to English for development
    } catch (error) {
      console.error('Language detection failed:', error);
      return 'en'; // Default to English on error
    }
  }
  
  /**
   * Get list of supported languages
   * @returns Promise with array of language objects
   */
  async getSupportedLanguages(): Promise<{ code: string, name: string }[]> {
    try {
      // PLACEHOLDER: API call to get supported languages
      // In a real implementation, this would be an actual API call
      // const response = await fetch(`${this.apiUrl}/languages`, {
      //   method: 'GET',
      //   headers: {
      //     'Authorization': `Bearer ${this.apiKey}`
      //   }
      // });
      // 
      // if (!response.ok) {
      //   throw new Error(`API error: ${response.status}`);
      // }
      // 
      // const data = await response.json();
      // return data.languages;
      
      // PLACEHOLDER: Mock response for development
      return [
        { code: 'en', name: 'English' },
        { code: 'zh', name: '中文' },  // Mandarin
        { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' }
      ];
    } catch (error) {
      console.error('Failed to get supported languages:', error);
      return [
        { code: 'en', name: 'English' },
        { code: 'zh', name: '中文' },  // Mandarin
        { code: 'es', name: 'Español' },
        { code: 'de', name: 'Deutsch' }
      ];
    }
  }
}

// Create and export singleton instance
// In a real implementation, these would be environment variables
const API_URL = process.env.NEXT_PUBLIC_TRANSLATION_API_URL || 'https://api.translation-service.example.com';
const API_KEY = process.env.NEXT_PUBLIC_TRANSLATION_API_KEY || 'your-api-key';

export const translationService = new TranslationService(API_URL, API_KEY);

export default translationService;
