'use client'

import { useState } from 'react'
import Link from 'next/link'
//import Image from 'next/image'
import { Search, ShoppingCart, Globe, Menu } from 'lucide-react'

const Header = () => {
  const [languageOpen, setLanguageOpen] = useState(false)
  
  return (
    <header className="w-full">
      {/* Top navigation bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm hover:text-red-600">Personal</Link>
            <Link href="/" className="text-sm font-semibold text-red-600">Business</Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/contact" className="text-sm hover:text-red-600">Contact us</Link>
            <Link href="/support" className="text-sm hover:text-red-600">Support</Link>
            <button className="text-sm hover:text-red-600">Stores</button>
            <div className="relative">
              <button 
                onClick={() => setLanguageOpen(!languageOpen)}
                aria-label="Language Options"
                className="flex items-center"
              >
                <Globe size={18} />
              </button>
              {languageOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">English</button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Español</button>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">Français</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" title="POC Business" className="flex-shrink-0">
            <div className="relative h-9 w-36">
              <div className="text-red-600 font-bold">
                <span className="text-2xl">POC</span>
                <span className="block text-sm -mt-1">business</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/mobile" className="font-semibold hover:text-red-600">Mobile</Link>
            <Link href="/internet" className="font-semibold hover:text-red-600">Internet</Link>
            <Link href="/solutions" className="font-semibold hover:text-red-600">Solutions</Link>
            <Link href="/insights" className="font-semibold hover:text-red-600">Insights</Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/login" className="font-semibold hover:text-red-600">Log In</Link>
            <button aria-label="Search POC" className="hover:text-red-600">
              <Search size={20} />
            </button>
            <Link href="/cart" aria-label="Cart Icon" className="hover:text-red-600">
              <ShoppingCart size={20} />
            </Link>
            <button className="md:hidden" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Secondary navigation */}
      <div className="bg-gray-100">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center space-x-1">
            <Link href="/" className="text-xs bg-red-600 text-white px-2 py-1 rounded-sm">Home</Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/contact" className="flex items-center text-sm font-semibold">
              <span className="mr-2">Call Sales:</span> 111-222-3333
            </Link>
            <Link href="/contact-sales" className="bg-black text-white px-4 py-2 rounded-md text-sm font-semibold">
              Contact sales
            </Link>
          </div>
        </div>
      </div>

- {/* Category navigation */}
- <div className="max-w-[1200px] mx-auto px-4 py-4">
-   <div className="flex flex-wrap items-center justify-between gap-2">
+ {/* Category navigation */}
+ <div className="container mx-auto px-4 py-4">
+   <div className="flex flex-wrap items-center justify-center md:justify-start space-x-4">
      <Link href="/devices" className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-semibold">
        Devices
      </Link>
      <Link href="/plans" className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-semibold">
        Plans
      </Link>
      <Link href="/internet" className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-semibold">
        Internet
      </Link>
      <Link href="/deals" className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-semibold">
        Deals
      </Link>
      <Link href="/bring-your-device" className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md text-sm font-semibold">
        Bring your device
      </Link>
+   </div>
+ </div>

    </header>
  )
}

export default Header
