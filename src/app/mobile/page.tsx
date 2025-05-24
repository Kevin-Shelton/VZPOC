'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Mobile() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="bg-gray-100 max-w-[1200px] mx-auto px-4 py-16 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business mobile plans and devices
              </h1>
              <p className="text-lg mb-6">
                Get the right mobile plans and devices for your business, with options for every size organization.
              </p>
              <Link 
                href="/plans"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                {translate('learnMore')}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Mobile Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plans Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Business mobile plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "My Biz Plan",
                price: "$25",
                description: "Perfect for small businesses with 1-4 lines",
                features: ["Unlimited talk & text", "Unlimited data", "5G access"]
              },
              {
                title: "Business Unlimited",
                price: "$35",
                description: "Great for growing businesses with 5+ lines",
                features: ["Unlimited talk & text", "Unlimited premium data", "5G Ultra Wideband"]
              },
              {
                title: "Business Unlimited Pro",
                price: "$45",
                description: "Ideal for enterprises with 10+ lines",
                features: ["Unlimited talk & text", "Unlimited premium data", "5G Ultra Wideband", "Mobile hotspot"]
              }
            ].map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">${plan.price}<span className="text-sm text-gray-600">/line</span></div>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/plans"
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
      
      {/* Devices Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Business devices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "iPhone 16",
                image: "https://picsum.photos/id/1/300/300",
                price: "$799.99"
              },
              {
                name: "Samsung Galaxy S24",
                image: "https://picsum.photos/id/2/300/300",
                price: "$749.99"
              },
              {
                name: "Google Pixel 8",
                image: "https://picsum.photos/id/3/300/300",
                price: "$699.99"
              },
              {
                name: "iPad Pro",
                image: "https://picsum.photos/id/4/300/300",
                price: "$999.99"
              }
            ].map((device, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-square relative">
                  <img 
                    src={device.image} 
                    alt={device.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{device.name}</h3>
                  <p className="text-red-600 font-semibold">{device.price}</p>
                  <Link 
                    href="/devices"
                    className="inline-flex items-center text-red-600 font-semibold mt-2"
                  >
                    {translate('buyNow')}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Solutions Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Mobile solutions for business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Fleet management</h3>
              <p className="mb-4">Track and manage your business vehicles with our comprehensive fleet management solutions.</p>
              <Link 
                href="/solutions"
                className="inline-flex items-center text-red-600 font-semibold"
              >
                {translate('learnMore')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Mobile device management</h3>
              <p className="mb-4">Secure and manage all your business mobile devices from a single dashboard.</p>
              <Link 
                href="/solutions"
                className="inline-flex items-center text-red-600 font-semibold"
              >
                {translate('learnMore')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
