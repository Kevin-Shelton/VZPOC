'use client'

import React, { useState, useEffect, createContext, useContext } from 'react';
import { Globe } from 'lucide-react';

// Available languages
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'pt', name: 'Português' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'hi', name: 'हिन्दी' },
]

// Translation dictionary for demo purposes
const translations: Record<string, Record<string, string>> = {
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
  // Add more languages as needed
}

// Default to English if translation not available
const getTranslation = (lang: string, key: string): string => {
  if (translations[lang] && translations[lang][key]) {
    return translations[lang][key]
  }
  return translations.en[key]
}

// Translation Context Provider
export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en')
  const [isOpen, setIsOpen] = useState(false)
  
  // Function to translate text
  const translate = (key: string): string => {
    return getTranslation(language, key)
  }
  
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition"
          aria-label="Translation Options"
        >
          <Globe size={24} />
        </button>
        
        {isOpen && (
          <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
            <div className="font-semibold mb-2">{translate('translatePage')}</div>
            <div className="max-h-60 overflow-y-auto">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    language === lang.code ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <TranslationContext.Provider value={{ language, translate }}>
        {children}
      </TranslationContext.Provider>
    </>
  )
}

// Create Context
import { createContext, useContext } from 'react'

interface TranslationContextType {
  language: string;
  translate: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType>({
  language: 'en',
  translate: (key: string) => key,
})

// Hook to use translation
export const useTranslation = () => useContext(TranslationContext)

export default TranslationProvider
