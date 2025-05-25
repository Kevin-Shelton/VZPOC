'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight, Tag } from 'lucide-react'

export default function Deals() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="bg-red-600 text-white max-w-[1200px] mx-auto px-4 py-16 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business deals & promotions
              </h1>
              <p className="text-lg mb-6">
                Save on the latest devices, plans, and business solutions with exclusive offers for POC Business customers.
              </p>
              <Link 
                href="/contact-sales"
                className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                {translate('contactSales')}              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-red-700 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white">Deals Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Deals Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured deals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Get iPhone 16 on us",
                description: "128GB model & Online only. New line & My Biz Plan with $20 monthly add-on spending select data plan req'd. Terms apply; limited time digital exclusive offer.",
                image: "/images/image4.jpg",
                cta: translate('buyNow'),
                link: "/devices/iphone"
              },
              {
                title: "Save $500 on business tablets",
                description: "When you add a new tablet line with eligible data plan. Limited time offer.",
                image: "/images/image5.jpg",
                cta: translate('learnMore'),
                link: "/devices/tablets"
              },
              {
                title: "Free router with Business Internet",
                description: "Get a free router when you sign up for Business Internet with monthly payment plan. No annual contracts.",
                image: "/images/image6.jpg",
                cta: translate('checkAddress'),
                link: "/internet/check-address"
              }
            ].map((deal, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Tag size={14} className="mr-1" />
                    Limited Time
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-gray-600 mb-4">{deal.description}</p>
                  <Link 
                    href={deal.link}
                    className="inline-flex items-center text-red-600 font-semibold"
                  >
                    {deal.cta}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Device Deals Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Device deals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "iPhone 16",
                discount: "Get one on us",
                image: "https://picsum.photos/id/4/300/300",
                link: "/devices/iphone"
              },
              {
                name: "Samsung Galaxy S24",
                discount: "Save $800",
                image: "https://picsum.photos/id/5/300/300",
                link: "/devices/samsung"
              },
              {
                name: "Google Pixel 8",
                discount: "Save $700",
                image: "https://picsum.photos/id/6/300/300",
                link: "/devices/pixel"
              },
              {
                name: "iPad Pro",
                discount: "Save $350",
                image: "https://picsum.photos/id/7/300/300",
                link: "/devices/ipad"
              }
            ].map((device, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-square relative">
                  <img 
                    src={device.image} 
                    alt={device.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 text-sm font-semibold">
                    {device.discount}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{device.name}</h3>
                  <Link 
                    href={device.link}
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
      
      {/* Plan Deals Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Plan deals</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">My Biz Plan</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">$25/line</p>
              <p className="mb-4">Take control of your mobile plan at our best price, guaranteed for 3 years.</p>
              <Link 
                href="/plans/my-biz-plan"
                className="inline-flex items-center text-red-600 font-semibold"
              >
                {translate('learnMore')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-amber-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Business Internet</h3>
              <p className="text-3xl font-bold text-red-600 mb-2">$69/mo</p>
              <p className="mb-4">Plus, router on us w/monthly payment plan and no annual service contracts.</p>
              <Link 
                href="/internet/check-address"
                className="inline-flex items-center text-red-600 font-semibold"
              >
                {translate('checkAddress')}
                <ChevronRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Terms Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-xl font-bold mb-4">Terms & Conditions</h2>
          <div className="text-sm text-gray-600">
            <p className="mb-2">All offers subject to change. Availability varies. Taxes, fees & terms may apply & vary. 5G: Requires 5G-capable device in 5G coverage area. 5G Ultra Wideband available in select areas.</p>
            <p>Device offers: Requires new line on eligible plan. Up to $1000 device payment purchase with trade-in of eligible smartphone. Less up to $1000 trade-in/promo credit applied over 36 mos.; promo credit ends if eligibility req's are no longer met; 0% APR. Trade-in conditions apply.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
