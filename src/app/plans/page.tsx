'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight, Check } from 'lucide-react'

export default function Plans() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="text-red-600 font-bold text-xl mb-2">Introducing</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                My Biz Plan
              </h1>
              <p className="text-3xl font-bold mb-4">as low as $25/line</p>
              <p className="text-lg mb-6">
                Take control of your mobile plan at our best price, guaranteed for 3 years.
              </p>
              <Link 
                href="/plans/my-biz-plan"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                {translate('learnMore')}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Plans Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Plans Comparison Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Compare business plans</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-4 text-left">Plan Features</th>
                  <th className="p-4 text-center">
                    <div className="text-xl font-bold">My Biz Plan</div>
                    <div className="text-red-600 font-bold">$25/line</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="text-xl font-bold">Business Unlimited</div>
                    <div className="text-red-600 font-bold">$35/line</div>
                  </th>
                  <th className="p-4 text-center">
                    <div className="text-xl font-bold">Business Unlimited Pro</div>
                    <div className="text-red-600 font-bold">$45/line</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Unlimited Talk & Text", myBiz: true, unlimited: true, pro: true },
                  { feature: "Unlimited Data", myBiz: true, unlimited: true, pro: true },
                  { feature: "5G Access", myBiz: true, unlimited: true, pro: true },
                  { feature: "5G Ultra Wideband", myBiz: false, unlimited: true, pro: true },
                  { feature: "Mobile Hotspot", myBiz: "5GB", unlimited: "15GB", pro: "30GB" },
                  { feature: "International Texting", myBiz: "200+ Countries", unlimited: "200+ Countries", pro: "200+ Countries" },
                  { feature: "International Data", myBiz: false, unlimited: "0.5GB/day", pro: "2GB/day" },
                  { feature: "Premium Network Access", myBiz: false, unlimited: false, pro: true },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.myBiz === 'boolean' ? (
                        row.myBiz ? <Check className="mx-auto text-green-500" size={20} /> : <span>—</span>
                      ) : (
                        <span>{row.myBiz}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.unlimited === 'boolean' ? (
                        row.unlimited ? <Check className="mx-auto text-green-500" size={20} /> : <span>—</span>
                      ) : (
                        <span>{row.unlimited}</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? <Check className="mx-auto text-green-500" size={20} /> : <span>—</span>
                      ) : (
                        <span>{row.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4"></td>
                  <td className="p-4 text-center">
                    <Link 
                      href="/plans/my-biz-plan"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm"
                    >
                      Select Plan
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link 
                      href="/plans/business-unlimited"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm"
                    >
                      Select Plan
                    </Link>
                  </td>
                  <td className="p-4 text-center">
                    <Link 
                      href="/plans/business-unlimited-pro"
                      className="inline-block bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition text-sm"
                    >
                      Select Plan
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Plan Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why choose POC Business plans?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flexible options",
                description: "Choose the right plan for each employee based on their specific needs",
                icon: "🔄"
              },
              {
                title: "America's most reliable 5G network",
                description: "Stay connected with the largest, most reliable 5G network",
                icon: "📶"
              },
              {
                title: "Business-grade support",
                description: "Get priority support from our dedicated business team",
                icon: "🛠️"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How many lines can I add to my business plan?",
                answer: "You can add from 1 to 10+ lines to your business plan, depending on your business needs. Different pricing tiers may apply based on the number of lines."
              },
              {
                question: "Can I mix and match different plans for my employees?",
                answer: "Yes, you can mix and match different plans to meet the specific needs of each employee. This allows you to optimize costs while providing the right features for everyone."
              },
              {
                question: "Is there a contract required for business plans?",
                answer: "Our My Biz Plan has no annual contract. Some other business plans may require a 2-year agreement, especially when device promotions are included."
              },
              {
                question: "How do I add international features to my plan?",
                answer: "You can add international features through your business account dashboard or by contacting our business support team. We offer various international add-ons for data, talk, and text."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/contact-sales"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              {translate('contactSales')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
