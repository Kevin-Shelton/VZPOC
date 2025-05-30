'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Script from 'next/script'

// Type declaration for LeadConnector
declare global {
  interface Window {
    LeadConnector?: {
      init?: () => void;
      chat?: {
        show?: () => void;
        hide?: () => void;
      };
    };
  }
}

// HeroSection Component
function HeroSection() {
  const { translate } = useTranslation()
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 py-0 mb-12">
      {/* Left panel: iPhone 16 offer */}
      <div className="md:col-span-7 bg-amber-50 rounded-lg overflow-hidden shadow-sm h-[600px] flex flex-col">
        <div className="p-6 md:p-8 flex flex-col h-full">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
              {translate('heroTitle') || 'Get iPhone 16 on us'}
            </h2>
            <p className="text-sm md:text-base mb-4 text-gray-700 max-w-md">
              {translate('heroDescription') || '128GB model & Online only. New line & My Biz Plan with $20 monthly add-on spending select data plan req\'d. Terms apply; limited time digital exclusive offer.'}
            </p>
            <Link
              href="/devices/iphone"
              className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            >
              {translate('buyNow') || 'Buy now'}
            </Link>
          </div>
          <div className="mt-6 flex-grow">
            <img
              src="/images/image4.jpg"
              alt="iPhone 16"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="md:col-span-5 flex flex-col gap-6 h-[600px]">
        {/* Right top: My Biz Plan */}
        <div 
          className="bg-white rounded-lg overflow-hidden shadow-sm relative h-[280px]"
          style={{
            backgroundImage: "url('/images/business-woman.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
          <div className="p-6 md:p-8 relative z-10 h-full flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-red-600">My Biz Plan</h2>
            <p className="text-sm md:text-base mb-4 text-gray-800">
              Starting at $25/line for 3 years guaranteed.
            </p>
            <div className="mt-auto">
              <Link
                href="/plans/my-biz-plan"
                className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition w-full text-center"
              >
                {translate('learnMore') || 'Learn more'}
              </Link>
            </div>
          </div>
        </div>

        {/* Right bottom: Business Internet */}
        <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-sm h-[280px] flex flex-col">
          <div className="p-6 md:p-8 flex flex-col h-full">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Get Business Internet starting at $69/mo</h2>
            <p className="text-sm md:text-base mb-4">Plus, router on us w/monthly payment plan and no annual service contracts.</p>
            <div className="mt-auto">
              <Link
                href="/internet/business"
                className="inline-block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
              >
                {translate('checkAddress') || 'Check my address'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// BusinessSegments Component
function BusinessSegments() {
  const segments = [
    { title: "Small Business", image: "https://picsum.photos/id/1/400/300", link: "/small-business" },
    { title: "Enterprise", image: "https://picsum.photos/id/2/400/300", link: "/enterprise" },
    { title: "Public Sector", image: "https://picsum.photos/id/3/400/300", link: "/public-sector" },
  ]

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">Let's build the future of business together</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {segments.map((seg, idx) => (
          <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition group">
            <div className="aspect-[4/3] relative">
              <img src={seg.image} alt={seg.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{seg.title}</h3>
              <Link 
                href={seg.link} 
                className="inline-flex items-center text-red-600 font-semibold group-hover:underline"
              >
                Learn more
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

// ProductGrid Component
function ProductGrid() {
  const products = [
    { title: "Mobile", image: "https://picsum.photos/id/4/400/300", link: "/mobile" },
    { title: "Internet", image: "https://picsum.photos/id/5/400/300", link: "/internet" },
    { title: "Network", image: "https://picsum.photos/id/6/400/300", link: "/network" },
    { title: "Security", image: "https://picsum.photos/id/7/400/300", link: "/security" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">Products to help you do more</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <Link 
            key={i} 
            href={p.link} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group"
          >
            <div className="aspect-[4/3]">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <ChevronRight 
                size={24} 
                className="text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all" 
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// SolutionsSection Component
function SolutionsSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-12">Solutions for key needs</h2>
      <div className="bg-amber-50 rounded-xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Cybersecurity</h3>
            <p className="text-lg mb-8 max-w-lg">Help enhance the protections for your business data with purpose-built solutions backed by decades of expertise.</p>
            <Link 
              href="/solutions/cybersecurity" 
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Learn more
            </Link>
          </div>
          <div className="aspect-auto md:aspect-auto">
            <img 
              src="https://picsum.photos/id/8/800/500" 
              alt="Cybersecurity" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group relative">
            <div className="aspect-[4/3]">
              <img 
                src="https://picsum.photos/id/9/400/300" 
                alt="DBIR" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">DBIR</h3>
              <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group relative">
            <div className="aspect-[4/3]">
              <img 
                src="https://picsum.photos/id/10/400/300" 
                alt="Small Business cybersecurity" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Small Business cybersecurity</h3>
              <button className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition">
                <span className="text-xl">+</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// LanguageSelector Component
function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const langs = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
  ]

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-lg p-4">
      <div className="text-sm font-semibold mb-2">Translate Page:</div>
      <select 
        value={selectedLanguage} 
        onChange={e => setSelectedLanguage(e.target.value)} 
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
      >
        {langs.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
      </select>
    </div>
  )
}

// Main Page Component
export default function Home() {
  const [chatLoaded, setChatLoaded] = useState(false)

  useEffect(() => {
    // Initialize chat widget
    const initChat = () => {
      if (typeof window !== 'undefined' && window.LeadConnector) {
        console.log('LeadConnector already loaded')
        setChatLoaded(true)
        return
      }

      const script = document.createElement('script')
      script.src = "https://beta.leadconnectorhq.com/loader.js"
      script.async = true
      script.dataset.resourcesUrl = 'https://beta.leadconnectorhq.com/chat-widget/loader.js'
      script.dataset.widgetId = '67a1422f5217fddb3070bf21'
      script.onload = () => {
        console.log('Chat widget script loaded')
        setChatLoaded(true)
      }
      script.onerror = () => console.error('Failed to load chat widget')
      document.body.appendChild(script)
    }

    initChat()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      {/* Fonts */}
      <Script id="google-fonts" strategy="beforeInteractive">
        {`
          let link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap';
          document.head.appendChild(link);
        `}
      </Script>
      
      {/* Chat Widget */}
      <Script 
        id="leadconnector-chat"
        strategy="afterInteractive"
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67a1422f5217fddb3070bf21"
        onLoad={() => setChatLoaded(true)}
        onError={() => console.error('Chat widget failed to load')}
      />
      
      {/* Chat container */}
      <div 
        id="leadconnector-chat-container"
        data-chat-widget
        data-widget-id="67a1422f5217fddb3070bf21"
        style={{ display: 'none' }}
      />
      
      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4">
        <HeroSection />
        <BusinessSegments />
        <ProductGrid />
        <SolutionsSection />
        <LanguageSelector />
      </div>
    </>
  )
}