'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function SmallBusiness() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="bg-amber-50 max-w-[1200px] mx-auto px-4 py-16 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Small Business Solutions
              </h1>
              <p className="text-lg mb-6">
                Discover technology solutions designed specifically for small businesses to help you connect, protect, and grow.
              </p>
              <Link 
                href="/contact-sales"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                {translate('contactSales').text}
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 rounded-lg">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Small Business Hero Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Solutions Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured solutions for small business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "My Biz Plan",
                description: "Mobile plans starting at $25/line, designed specifically for small businesses with 1-4 lines.",
                image: "https://picsum.photos/id/1/400/300",
                cta: translate('learnMore'),
                link: "/plans/my-biz-plan"
              },
              {
                title: "Business Internet",
                description: "Fast, reliable internet starting at $69/mo with no annual contracts.",
                image: "https://picsum.photos/id/2/400/300",
                cta: translate('checkAddress'),
                link: "/internet/check-address"
              },
              {
                title: "Cybersecurity",
                description: "Protect your business with solutions designed for small business security needs.",
                image: "https://picsum.photos/id/3/400/300",
                cta: translate('learnMore'),
                link: "/solutions/cybersecurity"
              }
            ].map((solution, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                <div className="aspect-[4/3] relative">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Link 
                    href={solution.link}
                    className="inline-flex items-center text-red-600 font-semibold"
                  >
                    {solution.cta}
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Challenges Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Solutions for your business challenges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Stay connected",
                description: "Keep your team connected with reliable mobile and internet solutions.",
                icon: "🔄",
                solutions: ["Mobile plans", "Business internet", "One Talk phone system"]
              },
              {
                title: "Protect your business",
                description: "Safeguard your data, devices, and network from cyber threats.",
                icon: "🔒",
                solutions: ["Small business cybersecurity", "Device protection", "Data backup"]
              },
              {
                title: "Improve productivity",
                description: "Empower your team with tools to work more efficiently.",
                icon: "📈",
                solutions: ["Collaboration tools", "Cloud solutions", "Business apps"]
              },
              {
                title: "Manage costs",
                description: "Control expenses with flexible plans and predictable pricing.",
                icon: "💰",
                solutions: ["Flexible payment options", "No annual contracts", "Bundle discounts"]
              }
            ].map((challenge, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">{challenge.icon}</div>
                <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <ul className="space-y-2">
                  {challenge.solutions.map((solution, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What small businesses say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "POC's small business solutions helped us stay connected with our customers and team members, even when working remotely.",
                author: "Sarah J.",
                business: "Retail Shop Owner"
              },
              {
                quote: "The cybersecurity package gives me peace of mind knowing my business data is protected from threats.",
                author: "Michael T.",
                business: "Financial Consultant"
              },
              {
                quote: "Switching to POC Business Internet improved our productivity with faster, more reliable connections.",
                author: "David L.",
                business: "Marketing Agency"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-3xl text-gray-300 mb-4">"</div>
                <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your small business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our small business specialists can help you find the right solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact-sales"
              className="inline-block bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              {translate('contactSales').text}
            </Link>
            <Link 
              href="/plans"
              className="inline-block bg-transparent text-white border border-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
