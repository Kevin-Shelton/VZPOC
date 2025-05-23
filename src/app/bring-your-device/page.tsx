'use client'

import React from 'react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Link from 'next/link'
import { ChevronRight, Smartphone } from 'lucide-react'

export default function BringYourDevice() {
  const { translate } = useTranslation()
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bring your own device
              </h1>
              <p className="text-lg mb-6">
                Keep your current devices and save with Arkansas POC Business plans. It's easy to switch and bring your own phones.
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
      src="/images/hero-image1.jpg" 
      alt="Bring your own device" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
            </div>
          </div>
        </div>
      </section>
      
    
      {/* How It Works Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Check compatibility",
                description: "Verify your device is compatible with the Arkansas POC network",
                icon: "📱",
                step: 1
              },
              {
                title: "Choose a plan",
                description: "Select a business plan that fits your needs",
                icon: "📋",
                step: 2
              },
              {
                title: "Activate your device",
                description: "Get a SIM card and activate your device on our network",
                icon: "✅",
                step: 3
              }
            ].map((step, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className="text-3xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/bring-your-device/check-compatibility"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Check Device Compatibility
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Benefits of bringing your own device</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Save money",
                description: "No need to purchase new devices, saving your business significant upfront costs",
                icon: "💰"
              },
              {
                title: "Keep what works",
                description: "Continue using the devices your team is already familiar with",
                icon: "👍"
              },
              {
                title: "Flexible upgrades",
                description: "Upgrade your devices on your own schedule, not tied to carrier timelines",
                icon: "🔄"
              },
              {
                title: "Easy transition",
                description: "Minimal disruption to your business operations when switching carriers",
                icon: "🚀"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mr-4">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compatible Devices Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular compatible devices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "iPhone (iPhone 11 and newer)",
                image: "https://picsum.photos/id/1/300/300",
              },
              {
                name: "Samsung Galaxy (S20 and newer)",
                image: "https://picsum.photos/id/2/300/300",
              },
              {
                name: "Google Pixel (Pixel 5 and newer)",
                image: "https://picsum.photos/id/3/300/300",
              },
              {
                name: "Other unlocked 4G/5G devices",
                image: "https://picsum.photos/id/4/300/300",
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
                  <Link 
                    href="/bring-your-device/check-compatibility"
                    className="inline-flex items-center text-red-600 font-semibold mt-2"
                  >
                    Check Compatibility
                    <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Will my device work on Verizon's network?",
                answer: "Most unlocked 4G LTE and 5G devices are compatible with Verizon's network. You can check your specific device compatibility using our online tool or by contacting our business support team."
              },
              {
                question: "Can I keep my current phone number?",
                answer: "Yes, you can transfer (port) your existing phone number to Verizon when you switch. This process typically takes 2-24 hours to complete."
              },
              {
                question: "Do I need a new SIM card?",
                answer: "Yes, you'll need a Verizon SIM card to connect to our network. We can provide SIM cards for all your devices when you sign up for service."
              },
              {
                question: "What plans can I choose from when bringing my own device?",
                answer: "You can choose from any of our business plans, including My Biz Plan, Business Unlimited, and Business Unlimited Pro. BYOD customers receive the same plan options as those purchasing new devices."
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
