'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function DevicesPage() {
  // Device categories with images and descriptions
  const deviceCategories = [
    {
      id: 1,
      title: 'Smartphones',
      image: '/images/smartphone.jpg',
      description: 'Latest business smartphones with advanced features',
      link: '/devices/smartphones'
    },
    {
      id: 2,
      title: 'Tablets',
      image: '/images/tablet.jpg',
      description: 'Powerful tablets for productivity on the go',
      link: '/devices/tablets'
    },
    {
      id: 3,
      title: 'Rugged devices',
      image: '/images/rugged-device.jpg',
      description: 'Durable devices for challenging environments',
      link: '/devices/rugged'
    },
    {
      id: 4,
      title: 'Connected devices',
      image: '/images/connected-device.jpg',
      description: 'IoT and connected solutions for your business',
      link: '/devices/connected'
    }
  ]

  // Benefits with icons and descriptions
  const benefits = [
    {
      id: 1,
      title: 'Affordability',
      icon: '💰',
      description: 'Competitive pricing and flexible payment options for businesses of all sizes'
    },
    {
      id: 2,
      title: 'Coverage',
      icon: '📶',
      description: 'Extensive network coverage across the nation for reliable connectivity'
    },
    {
      id: 3,
      title: 'Reliability',
      icon: '📊',
      description: 'Dependable service with industry-leading uptime and performance'
    },
    {
      id: 4,
      title: 'Security',
      icon: '🔒',
      description: 'Advanced security features to protect your business data and communications'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16">
        <div className="bg-gray-100 max-w-[1200px] mx-auto px-4 py-16 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Business Mobile Phones and Devices
              </h1>
              <p className="text-lg mb-6">
                Power your on-the-go work with mobile phones, devices and plans for your business. 
                On the network America relies on.
              </p>
              <Link 
                href="/plans"
                className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                View Plans
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src="/images/hero-image5.jpg" 
                  alt="Business mobile devices" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Categories Section */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Business phones and devices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deviceCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="aspect-[4/3] bg-gray-200">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    href={category.link} 
                    className="inline-flex items-center text-red-600 font-semibold"
                  >
                    View all
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Plans Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Mobile plans</h2>
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg overflow-hidden shadow-md">
            <div className="md:w-1/2">
              <img 
                src="/images/business-woman.jpg" 
                alt="Business professional with mobile device" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">My Biz Plan</h3>
              <p className="text-lg mb-6">
                Take control of your mobile plan. Choose exactly what you want and pay only for what you need. As low as $25/line per month.
              </p>
              <Link 
                href="/plans"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Deals Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Mobile deals</h2>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <img 
                src="/images/5g-network.jpg" 
                alt="5G Network" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Switch and get a 5G phone on us
                  </h3>
                  <p className="text-white mb-6">
                    Switch your business to Arkansas POC and get the latest 5G devices with select trade-in and plans.
                  </p>
                  <Link 
                    href="/deals"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
                  >
                    See offers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to power your business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Talk to our business specialists about finding the right devices and plans for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/plans"
              className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View Plans
            </Link>
            <Link 
              href="/contact"
              className="inline-block bg-white border border-black text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
