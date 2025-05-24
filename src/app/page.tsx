'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from '@/components/shared/TranslationProvider'

// Static Hero Section (replaces carousel)
const HeroSection = () => {
  const { translate } = useTranslation()

  return (
    <section className="bg-amber-50 py-12 md:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{translate('heroTitle')}</h1>
          <p className="text-lg mb-6">{translate('heroDescription')}</p>
          <Link href="/devices/iphone" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            {translate('buyNow')}
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src="/images/image4.jpg"
            alt="iPhone 16"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

const BusinessSegments = () => {
  const { translate } = useTranslation()

  const segments = [
    { title: translate('smallBusiness'), image: 'https://picsum.photos/id/1/400/300', link: '/small-business' },
    { title: translate('enterprise'), image: 'https://picsum.photos/id/2/400/300', link: '/enterprise' },
    { title: translate('publicSector'), image: 'https://picsum.photos/id/3/400/300', link: '/public-sector' }
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">{translate('futureTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-gray-200">
              <img src={segment.image} alt={segment.title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                <Link href={segment.link} className="inline-flex items-center text-red-600 font-semibold">
                  {translate('learnMore')}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' }
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
      <div className="text-sm font-semibold mb-2">Translate Page:</div>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className="w-full border border-gray-300 rounded px-2 py-1"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <HeroSection />
      <BusinessSegments />
      <ProductGrid />
      <SolutionsSection />
      <LanguageSelector />
    </div>
  )
}
