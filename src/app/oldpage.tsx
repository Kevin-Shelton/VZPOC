'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from '@/components/shared/TranslationProvider'

const HeroSection = () => {
  const { translate } = useTranslation()
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10 px-4">
      {/* Left panel: iPhone 16 offer, spans two rows */}
      <div className="bg-amber-50 rounded-lg shadow-md p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">{translate('heroTitle')}</h2>
          <p className="text-base mb-4 text-gray-700">{translate('heroDescription')}</p>
          <Link
            href="/devices/iphone"
            className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
          >
            {translate('buyNow')}
          </Link>
        </div>
        <div className="mt-6">
          <img
            src="/images/image4.jpg"
            alt="iPhone 16"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right top: My Biz Plan */}
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2 text-red-600">My Biz Plan</h2>
        <p className="text-base mb-4 text-gray-800">Starting at $25/line for 3 years guaranteed.</p>
        <Link
          href="/plans/my-biz-plan"
          className="inline-block bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
        >
          {translate('learnMore')}
        </Link>
      </div>

      {/* Right bottom: Business Internet */}
      <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Get Business Internet starting at $69/mo</h2>
        <p className="text-base mb-4">Plus, router on us w/monthly payment plan and no annual service contracts.</p>
        <Link
          href="/internet/business"
          className="inline-block bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
        >
          {translate('checkAddress')}
        </Link>
      </div>
    </section>
  )
}

const BusinessSegments = () => {
  const segments = [
    { title: "Small Business", image: "https://picsum.photos/id/1/400/300", link: "/small-business" },
    { title: "Enterprise",    image: "https://picsum.photos/id/2/400/300", link: "/enterprise" },
    { title: "Public Sector",  image: "https://picsum.photos/id/3/400/300", link: "/public-sector" },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Let's build the future of business together</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((seg, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-gray-200">
              <div className="aspect-[4/3]">
                <img src={seg.image} alt={seg.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{seg.title}</h3>
                <Link href={seg.link} className="inline-flex items-center text-red-600 font-semibold">
                  Learn more
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

const ProductGrid = () => {
  const products = [
    { title: "Mobile",   image: "https://picsum.photos/id/4/400/300", link: "/mobile" },
    { title: "Internet", image: "https://picsum.photos/id/5/400/300", link: "/internet" },
    { title: "Network",  image: "https://picsum.photos/id/6/400/300", link: "/network" },
    { title: "Security", image: "https://picsum.photos/id/7/400/300", link: "/security" },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Products to help you do more</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <Link key={i} href={p.link} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-[4/3]">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-red-600 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const SolutionsSection = () => (
  <section className="py-12 md:py-16">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-4xl font-bold text-red-600 mb-12">Solutions for key needs</h2>
      <div className="bg-amber-50 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-6">Cybersecurity</h3>
            <p className="text-lg mb-6">Help enhance the protections for your business data with purpose-built solutions backed by decades of expertise.</p>
            <Link href="/solutions/cybersecurity" className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Learn more
            </Link>
          </div>
          <div className="aspect-[4/3] bg-gray-200">
            <img src="https://picsum.photos/id/8/800/500" alt="Cybersecurity" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/3]"><img src="https://picsum.photos/id/9/400/300" alt="DBIR" className="w-full h-full object-cover" /></div>
            <div className="p-6"><h3 className="text-xl font-bold mb-2">DBIR</h3><button className="text-2xl absolute bottom-4 right-4">+</button></div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-[4/3]"><img src="https://picsum.photos/id/10/400/300" alt="Small Business cybersecurity" className="w-full h-full object-cover" /></div>
            <div className="p-6"><h3 className="text-xl font-bold mb-2">Small Business cybersecurity</h3><button className="text-2xl absolute bottom-4 right-4">+</button></div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const LanguageSelector = () => {
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
      <select value={selectedLanguage} onChange={e => setSelectedLanguage(e.target.value)} className="w-full border border-gray-300 rounded px-2 py-1">
        {langs.map(l => <option key={l.code} value={l.code}>{l.name}</option>)}
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
