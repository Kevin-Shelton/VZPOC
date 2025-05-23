'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Internet() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business Internet starting at $69/mo
              </h1>
              <p className="text-lg mb-6">
                Plus, router on us w/monthly payment plan and no annual service contracts.
              </p>
              <Link 
                href="/internet/check-address"
                className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                {translate('checkAddress')}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-700 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-300">Internet Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Internet Plans Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Business Internet plans</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Business Internet 100",
                price: "$69",
                speed: "100 Mbps",
                description: "Perfect for small businesses with basic internet needs",
                features: ["100 Mbps download speeds", "20 Mbps upload speeds", "Includes router"]
              },
              {
                title: "Business Internet 300",
                price: "$99",
                speed: "300 Mbps",
                description: "Great for growing businesses with multiple devices",
                features: ["300 Mbps download speeds", "30 Mbps upload speeds", "Includes router", "Static IP available"]
              },
              {
                title: "Business Internet Gig",
                price: "$149",
                speed: "940 Mbps",
                description: "Ideal for businesses with high bandwidth requirements",
                features: ["940 Mbps download speeds", "880 Mbps upload speeds", "Includes router", "Static IP included"]
              }
            ].map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">${plan.price}<span className="text-sm text-gray-600">/mo</span></div>
                <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">{plan.speed}</div>
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
                  href="/internet/check-address"
                  className="inline-flex items-center text-red-600 font-semibold"
                >
                  {translate('checkAddress')}
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Solutions Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Internet solutions for business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Dedicated Internet</h3>
              <p className="mb-4">Get guaranteed bandwidth with symmetrical speeds and 24/7 support for mission-critical applications.</p>
              <Link 
                href="/solutions"
                className="inline-flex items-center text-red-600 font-semibold"
              >
                {translate('learnMore')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">SD-WAN</h3>
              <p className="mb-4">Simplify network management and improve performance with Software-Defined Wide Area Network solutions.</p>
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
      
      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why choose POC Business Internet?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Reliability",
                description: "99.9% network reliability to keep your business running smoothly"
              },
              {
                title: "Support",
                description: "24/7 technical support from our dedicated business team"
              },
              {
                title: "Scalability",
                description: "Flexible plans that grow with your business needs"
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
