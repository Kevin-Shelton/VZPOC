'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

// Hero Carousel Component
const HeroCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  
  const slides = [
    {
      title: "Get iPhone 16 on us",
      description: "128GB model & Online only. New line & My Biz Plan with $20 monthly add-on spending select data plan req'd. Terms apply; limited time digital exclusive offer.",
      cta: "Buy now",
      ctaLink: "/devices/iphone",
      bgColor: "bg-amber-50"
    },
    {
      title: "My Biz Plan",
      subtitle: "Introducing",
      description: "as low as $25/line",
      subDescription: "Take control of your mobile plan at our best price, guaranteed for 3 years.",
      cta: "Learn more",
      ctaLink: "/plans/my-biz-plan",
      bgColor: "bg-amber-50"
    },
    {
      title: "Get Business Internet starting at $69/mo",
      description: "Plus, router on us w/monthly payment plan and no annual service contracts.",
      cta: "Check my address",
      ctaLink: "/internet/business",
      bgColor: "bg-gray-900 text-white"
    }
  ]
  
  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`w-full flex-shrink-0 ${slide.bgColor}`}>
            <div className="max-w-[1200px] mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {slide.subtitle && (
                  <div className="text-red-600 font-bold text-xl mb-2">{slide.subtitle}</div>
                )}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                {slide.subDescription && (
                  <p className="text-lg mb-6">{slide.subDescription}</p>
                )}
                <Link href={slide.ctaLink} className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
                  {slide.cta}
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                  {/* Placeholder for image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Image {index + 1}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Carousel Controls */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-red-600' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

// Business Segment Section
const BusinessSegments = () => {
  const segments = [
    {
      title: "Small Business",
      image: "/images/hero-image1.jpg/id/1/400/300",
      link: "/small-business"
    },
    {
      title: "Enterprise",
      image: "/images/hero-image2.jpg/id/2/400/300",
      link: "/enterprise"
    },
    {
      title: "Public Sector",
      image: "/images/hero-image3.jpg/id/3/400/300",
      link: "/public-sector"
    }
  ]
  
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Let's build the future of business together</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {segments.map((segment, index) => (
            <div key={index} className="rounded-xl overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] relative">
                <img 
                  src={segment.image} 
                  alt={segment.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                <Link 
                  href={segment.link}
                  className="inline-flex items-center text-red-600 font-semibold"
                >
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

// Product Grid Section
const ProductGrid = () => {
  const products = [
    {
      title: "Mobile",
      image: "https://picsum.photos/id/4/400/300",
      link: "/mobile"
    },
    {
      title: "Internet",
      image: "https://picsum.photos/id/5/400/300",
      link: "/internet"
    },
    {
      title: "Network",
      image: "https://picsum.photos/id/6/400/300",
      link: "/network"
    },
    {
      title: "Security",
      image: "https://picsum.photos/id/7/400/300",
      link: "/security"
    }
  ]
  
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Products to help you do more</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Link key={index} href={product.link} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
              <div className="aspect-[4/3] relative">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <ChevronRight size={20} className="text-gray-400 group-hover:text-red-600 transition" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solutions Section
const SolutionsSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-red-600 mb-12">Solutions for key needs</h2>
        
        <div className="bg-amber-50 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-6">Cybersecurity</h3>
              <p className="text-lg mb-6">
                Help enhance the protections for your business data with purpose-built solutions backed by decades of expertise.
              </p>
              <Link 
                href="/solutions/cybersecurity"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Learn more
              </Link>
            </div>
            <div className="aspect-auto md:aspect-auto bg-gray-200">
              <img 
                src="https://picsum.photos/id/8/800/500" 
                alt="Cybersecurity" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://picsum.photos/id/9/400/300" 
                  alt="DBIR" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DBIR</h3>
                <button className="text-2xl absolute bottom-4 right-4">+</button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="aspect-[4/3] relative">
                <img 
                  src="https://picsum.photos/id/10/400/300" 
                  alt="Small Business cybersecurity" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Small Business cybersecurity</h3>
                <button className="text-2xl absolute bottom-4 right-4">+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Language Selector Component for Translation Demo
const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  
  const languages = [
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
    <div>
      <HeroCarousel />
      <BusinessSegments />
      <ProductGrid />
      <SolutionsSection />
      <LanguageSelector />
    </div>
  )
}
