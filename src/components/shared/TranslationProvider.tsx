'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Globe } from 'lucide-react';
import translationService from '@/services/TranslationService';

// Non-translatable term registry
interface NonTranslatableRegistry {
  exactTerms: {
    brands: string[];
    productNames: string[];
    technicalTerms: string[];
    [category: string]: string[];
  };
  patterns: {
    pattern: RegExp;
    description: string;
  }[];
}

// Initial registry of non-translatable terms
const nonTranslatableRegistry: NonTranslatableRegistry = {
  exactTerms: {
    brands: [
      "Verizon", 
      "POC", 
      "iPhone", 
      "Apple", 
      "Samsung", 
      "Google"
    ],
    productNames: [
      "My Biz Plan", 
      "DBIR", 
      "iPhone 16", 
      "5G Home Internet"
    ],
    technicalTerms: [
      "5G", 
      "LTE", 
      "Wi-Fi", 
      "Bluetooth", 
      "USB-C"
    ]
  },
  patterns: [
    {
      pattern: /\b[A-Z]{2,}\b/g,
      description: "Acronyms (all caps)"
    },
    {
      pattern: /\$\d+(\.\d{1,2})?/g,
      description: "Price values"
    },
    {
      pattern: /\d+\s?(GB|TB|MB|KB)/gi,
      description: "Data storage units"
    }
  ]
};

// Available languages
const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },  // Mandarin
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  // Additional languages (not in default set)
  { code: 'fr', name: 'Français' },
  { code: 'ja', name: '日本語' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
];

// Static translation dictionary for common UI elements
const staticTranslations: Record<string, Record<string, string>> = {
  en: {
    home: 'Home',
    mobile: 'Mobile',
    internet: 'Internet',
    solutions: 'Solutions',
    insights: 'Insights',
    devices: 'Devices',
    plans: 'Plans',
    deals: 'Deals',
    bringYourDevice: 'Bring your device',
    login: 'Log In',
    contactSales: 'Contact sales',
    callSales: 'Call Sales',
    search: 'Search',
    learnMore: 'Learn more',
    buyNow: 'Buy now',
    checkAddress: 'Check my address',
    heroTitle: 'Get iPhone 16 on us',
    heroDescription: '128GB model & Online only. New line & My Biz Plan with $20 monthly add-on spending select data plan req\'d. Terms apply; limited time digital exclusive offer.',
    futureTitle: 'Let\'s build the future of business together',
    productsTitle: 'Products to help you do more',
    solutionsTitle: 'Solutions for key needs',
    cybersecurityTitle: 'Cybersecurity',
    cybersecurityDesc: 'Help enhance the protections for your business data with purpose-built solutions backed by decades of expertise.',
    smallBusiness: 'Small Business',
    enterprise: 'Enterprise',
    publicSector: 'Public Sector',
    network: 'Network',
    security: 'Security',
    translatePage: 'Translate Page:',
  },
  es: {
    home: 'Inicio',
    mobile: 'Móvil',
    internet: 'Internet',
    solutions: 'Soluciones',
    insights: 'Perspectivas',
    devices: 'Dispositivos',
    plans: 'Planes',
    deals: 'Ofertas',
    bringYourDevice: 'Trae tu dispositivo',
    login: 'Iniciar sesión',
    contactSales: 'Contactar ventas',
    callSales: 'Llamar a ventas',
    search: 'Buscar',
    learnMore: 'Más información',
    buyNow: 'Comprar ahora',
    checkAddress: 'Verificar mi dirección',
    heroTitle: 'Obtén iPhone 16 gratis',
    heroDescription: 'Modelo de 128GB y solo en línea. Se requiere nueva línea y My Biz Plan con complemento mensual de $20 en plan de datos selecto. Se aplican términos; oferta exclusiva digital por tiempo limitado.',
    futureTitle: 'Construyamos juntos el futuro de los negocios',
    productsTitle: 'Productos para ayudarte a hacer más',
    solutionsTitle: 'Soluciones para necesidades clave',
    cybersecurityTitle: 'Ciberseguridad',
    cybersecurityDesc: 'Ayuda a mejorar las protecciones para los datos de tu empresa con soluciones diseñadas específicamente y respaldadas por décadas de experiencia.',
    smallBusiness: 'Pequeñas Empresas',
    enterprise: 'Empresas',
    publicSector: 'Sector Público',
    network: 'Red',
    security: 'Seguridad',
    translatePage: 'Traducir Página:',
  },
  fr: {
    home: 'Accueil',
    mobile: 'Mobile',
    internet: 'Internet',
    solutions: 'Solutions',
    insights: 'Perspectives',
    devices: 'Appareils',
    plans: 'Forfaits',
    deals: 'Offres',
    bringYourDevice: 'Apportez votre appareil',
    login: 'Connexion',
    contactSales: 'Contacter les ventes',
    callSales: 'Appeler les ventes',
    search: 'Rechercher',
    learnMore: 'En savoir plus',
    buyNow: 'Acheter maintenant',
    checkAddress: 'Vérifier mon adresse',
    heroTitle: 'Obtenez l\'iPhone 16 gratuitement',
    heroDescription: 'Modèle 128 Go et uniquement en ligne. Nouvelle ligne et forfait My Biz avec supplément mensuel de 20 $ sur forfait de données sélectionné requis. Conditions applicables; offre numérique exclusive à durée limitée.',
    futureTitle: 'Construisons ensemble l\'avenir des entreprises',
    productsTitle: 'Des produits pour vous aider à faire plus',
    solutionsTitle: 'Solutions pour les besoins essentiels',
    cybersecurityTitle: 'Cybersécurité',
    cybersecurityDesc: 'Aidez à améliorer les protections des données de votre entreprise avec des solutions spécialement conçues et soutenues par des décennies d\'expertise.',
    smallBusiness: 'Petites Entreprises',
    enterprise: 'Entreprises',
    publicSector: 'Secteur Public',
    network: 'Réseau',
    security: 'Sécurité',
    translatePage: 'Traduire la Page:',
  },
  de: {
    home: 'Startseite',
    mobile: 'Mobilfunk',
    internet: 'Internet',
    solutions: 'Lösungen',
    insights: 'Einblicke',
    devices: 'Geräte',
    plans: 'Tarife',
    deals: 'Angebote',
    bringYourDevice: 'Eigenes Gerät mitbringen',
    login: 'Anmelden',
    contactSales: 'Vertrieb kontaktieren',
    callSales: 'Vertrieb anrufen',
    search: 'Suchen',
    learnMore: 'Mehr erfahren',
    buyNow: 'Jetzt kaufen',
    checkAddress: 'Adresse prüfen',
    heroTitle: 'iPhone 16 gratis erhalten',
    heroDescription: '128GB-Modell & nur online. Neue Leitung & My Biz Plan mit monatlichem Zusatzpaket für $20 bei Auswahl eines Datenplans erforderlich. Es gelten Bedingungen; zeitlich begrenztes digitales Exklusiv-Angebot.',
    futureTitle: 'Lassen Sie uns gemeinsam die Zukunft der Unternehmen gestalten',
    productsTitle: 'Produkte, die Ihnen helfen, mehr zu erreichen',
    solutionsTitle: 'Lösungen für wichtige Anforderungen',
    cybersecurityTitle: 'Cybersicherheit',
    cybersecurityDesc: 'Verbessern Sie den Schutz Ihrer Unternehmensdaten mit speziell entwickelten Lösungen, die auf jahrzehntelanger Expertise basieren.',
    smallBusiness: 'Kleinunternehmen',
    enterprise: 'Großunternehmen',
    publicSector: 'Öffentlicher Sektor',
    network: 'Netzwerk',
    security: 'Sicherheit',
    translatePage: 'Seite übersetzen:',
  },
  zh: {
    home: '首页',
    mobile: '移动',
    internet: '互联网',
    solutions: '解决方案',
    insights: '洞察',
    devices: '设备',
    plans: '套餐',
    deals: '优惠',
    bringYourDevice: '自带设备',
    login: '登录',
    contactSales: '联系销售',
    callSales: '致电销售',
    search: '搜索',
    learnMore: '了解更多',
    buyNow: '立即购买',
    checkAddress: '检查地址',
    heroTitle: '免费获得iPhone 16',
    heroDescription: '128GB型号，仅限在线。需要新线路和My Biz计划，选择数据计划需要$20月度附加费用。适用条款；限时数字专属优惠。',
    futureTitle: '让我们共同构建企业的未来',
    productsTitle: '帮助您做更多的产品',
    solutionsTitle: '关键需求的解决方案',
    cybersecurityTitle: '网络安全',
    cybersecurityDesc: '通过专门设计的解决方案帮助增强企业数据保护，这些方案由数十年的专业知识支持。',
    smallBusiness: '小型企业',
    enterprise: '大型企业',
    publicSector: '公共部门',
    network: '网络',
    security: '安全',
    translatePage: '翻译页面:',
  },
};

// Translation result interface
interface TranslationResult {
  text: string;
  isTranslated: boolean;
  source: 'static' | 'cache' | 'api' | 'original';
  timestamp: number;
}

// Translation options interface
interface TranslationOptions {
  skipTranslation?: boolean;
  nonTranslatable?: string[];
  context?: string;
  showLoading?: boolean;
}

// Generate a unique key for a text string
function generateTranslationKey(text: string): string {
  // Simple hash function for demo purposes
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash.toString(16);
}

// Check if text contains non-translatable terms
function detectNonTranslatableTerms(text: string): string[] {
  const nonTranslatableTerms: string[] = [];
  
  // Check exact terms
  Object.values(nonTranslatableRegistry.exactTerms).forEach(terms => {
    terms.forEach(term => {
      if (text.includes(term)) {
        nonTranslatableTerms.push(term);
      }
    });
  });
  
  // Check patterns
  nonTranslatableRegistry.patterns.forEach(({ pattern }) => {
    const matches = text.match(pattern);
    if (matches) {
      nonTranslatableTerms.push(...matches);
    }
  });
  
  return nonTranslatableTerms;
}

// Translation Context type
interface TranslationContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (text: string, options?: TranslationOptions) => TranslationResult;
  isLoading: boolean;
}

// Create Context
const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  setLanguage: () => {},
  translate: (key: string) => ({ 
    text: key, 
    isTranslated: false, 
    source: 'original',
    timestamp: Date.now()
  }),
  isLoading: false,
});

// Translation Provider Component
export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState('en');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pendingTranslations, setPendingTranslations] = useState<Map<string, string>>(new Map());
  
  // Function to translate text
  const translate = useCallback((
    text: string, 
    options?: TranslationOptions
  ): TranslationResult => {
    // Skip translation if language is English or explicitly skipped
    if (language === 'en' || options?.skipTranslation) {
      return {
        text,
        isTranslated: false,
        source: 'original',
        timestamp: Date.now()
      };
    }
    
    // Check for non-translatable terms
    const nonTranslatableTerms = [
      ...(options?.nonTranslatable || []),
      ...detectNonTranslatableTerms(text)
    ];
    
    // Check static translations first
    const key = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (staticTranslations[language]?.[key]) {
      return {
        text: staticTranslations[language][key],
        isTranslated: true,
        source: 'static',
        timestamp: Date.now()
      };
    }
    
    // Generate a unique key for this text
    const translationKey = generateTranslationKey(text);
    const cacheKey = `${language}:${translationKey}`;
    
    // Check if we have a pending translation
    if (pendingTranslations.has(cacheKey)) {
      return {
        text: pendingTranslations.get(cacheKey) || text,
        isTranslated: true,
        source: 'cache',
        timestamp: Date.now()
      };
    }
    
    // Queue for translation
    queueForTranslation(text, language, translationKey, nonTranslatableTerms, options?.context);
    
    // Return original text while translation is in progress
    return {
      text,
      isTranslated: false,
      source: 'original',
      timestamp: Date.now()
    };
  }, [language, pendingTranslations]);
  
  // Queue text for translation
  const queueForTranslation = useCallback((
    text: string,
    targetLanguage: string,
    key: string,
    nonTranslatableTerms?: string[],
    context?: string
  ) => {
    const cacheKey = `${targetLanguage}:${key}`;
    
    // Skip if already in queue
    if (pendingTranslations.has(cacheKey)) {
      return;
    }
    
    // Call translation service
    translationService.translate(text, targetLanguage, 'en', {
      nonTranslatableTerms,
      context
    })
    .then(translatedText => {
      // Update pending translations
      setPendingTranslations(prev => {
        const updated = new Map(prev);
        updated.set(cacheKey, translatedText);
        return updated;
      });
    })
    .catch(error => {
      console.error('Translation failed:', error);
    });
  }, [pendingTranslations]);
  
  // Set language with loading state
  const setLanguage = useCallback((lang: string) => {
    setIsLoading(true);
    setLanguageState(lang);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  
  // Context value
  const contextValue = {
    language,
    setLanguage,
    translate,
    isLoading
  };
  
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
          aria-label="Translation Options"
          disabled={isLoading}
        >
          <Globe size={24} />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
            <div className="font-semibold mb-2">{translate('translatePage').text}</div>
            <div className="max-h-60 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    language === lang.code ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                  }`}
                  disabled={isLoading}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <TranslationContext.Provider value={contextValue}>
        {children}
        {isLoading && (
          <div className="fixed bottom-16 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-md">
            Loading translations...
          </div>
        )}
      </TranslationContext.Provider>
    </>
  );
};

// Hook to use translation
export const useTranslation = () => useContext(TranslationContext);

// NoTranslate component for wrapping content that shouldn't be translated
export const NoTranslate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="notranslate">{children}</span>;
};

// Translatable component for text that should be translated
export const Translatable: React.FC<{
  children: string;
  nonTranslatable?: string[];
  context?: string;
  showLoading?: boolean;
}> = ({ 
  children, 
  nonTranslatable,
  context,
  showLoading = false
}) => {
  const { translate, language } = useTranslation();
  const [result, setResult] = useState<TranslationResult>({
    text: children,
    isTranslated: false,
    source: 'original',
    timestamp: Date.now()
  });
  
  useEffect(() => {
    // Get initial translation
    const initialResult = translate(children, {
      nonTranslatable,
      context,
      showLoading
    });
    
    setResult(initialResult);
    
    // Re-translate when language changes
    if (language !== 'en') {
      const interval = setInterval(() => {
        const updatedResult = translate(children, {
          nonTranslatable,
          context,
          showLoading
        });
        
        if (updatedResult.isTranslated) {
          setResult(updatedResult);
          clearInterval(interval);
        }
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [children, language, nonTranslatable, context, showLoading, translate]);
  
  // Show loading indicator if requested and translation is pending
  if (showLoading && !result.isTranslated && language !== 'en') {
    return (
      <span className="translatable-text">
        {result.text}
        <span className="translation-loading-dot-pulse" aria-hidden="true">
          <span>.</span><span>.</span><span>.</span>
        </span>
      </span>
    );
  }
  
  return <span className="translatable-text">{result.text}</span>;
};

export default TranslationProvider;
