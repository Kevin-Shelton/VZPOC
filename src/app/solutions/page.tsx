'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Solutions() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="bg-amber-50 max-w-[1200px] mx-auto px-4 py-16 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business solutions for every challenge
              </h1>
              <p className="text-lg mb-6">
                Discover how POC Business can help solve your most pressing business challenges with our comprehensive solutions.
              </p>
              <Link 
                href="/contact-sales"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                {translate('contactSales')}              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Solutions Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cybersecurity Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-amber-50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold mb-6">{translate('cybersecurityTitle')}</h3>
                <p className="text-lg mb-6">
                  {translate('cybersecurityDesc')}
                </p>
                <Link 
                  href="/solutions/cybersecurity"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  {translate('learnMore')}
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
      
      {/* Business Segments Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Solutions by business segment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: translate('smallBusiness'),
                image: "https://picsum.photos/id/1/400/300",
                link: "/small-business"
              },
              {
                title: translate('enterprise'),
                image: "https://picsum.photos/id/2/400/300",
                link: "/enterprise"
              },
              {
                title: translate('publicSector'),
                image: "https://picsum.photos/id/3/400/300",
                link: "/public-sector"
              }
            ].map((segment, index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-gray-200 bg-white">
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
                    {translate('learnMore')}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Solutions Grid Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Solutions by category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Network",
                description: "Build a reliable, secure, and scalable network infrastructure",
                icon: "🌐"
              },
              {
                title: "Security",
                description: "Protect your business from evolving cyber threats",
                icon: "🔒"
              },
              {
                title: "Cloud",
                description: "Transform your business with flexible cloud solutions",
                icon: "☁️"
              },
              {
                title: "Mobility",
                description: "Enable your workforce with secure mobile solutions",
                icon: "📱"
              },
              {
                title: "IoT",
                description: "Connect and manage devices across your business",
                icon: "🔄"
              },
              {
                title: "Collaboration",
                description: "Empower teams with modern communication tools",
                icon: "👥"
              }
            ].map((solution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link 
                  href={`/solutions/${solution.title.toLowerCase()}`}
                  className="inline-flex items-center text-red-600 font-semibold"
                >
                  {translate('learnMore')}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
