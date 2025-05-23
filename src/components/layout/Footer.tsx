'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link href="/devices" className="text-gray-400 hover:text-white">Devices</Link></li>
              <li><Link href="/plans" className="text-gray-400 hover:text-white">Plans</Link></li>
              <li><Link href="/internet" className="text-gray-400 hover:text-white">Internet</Link></li>
              <li><Link href="/deals" className="text-gray-400 hover:text-white">Deals</Link></li>
              <li><Link href="/bring-your-device" className="text-gray-400 hover:text-white">Bring your device</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions/small-business" className="text-gray-400 hover:text-white">Small Business</Link></li>
              <li><Link href="/solutions/enterprise" className="text-gray-400 hover:text-white">Enterprise</Link></li>
              <li><Link href="/solutions/public-sector" className="text-gray-400 hover:text-white">Public Sector</Link></li>
              <li><Link href="/solutions/network" className="text-gray-400 hover:text-white">Network</Link></li>
              <li><Link href="/solutions/security" className="text-gray-400 hover:text-white">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/support/contact-us" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              <li><Link href="/support/billing" className="text-gray-400 hover:text-white">Billing</Link></li>
              <li><Link href="/support/tech" className="text-gray-400 hover:text-white">Technical Support</Link></li>
              <li><Link href="/support/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link href="/support/community" className="text-gray-400 hover:text-white">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link href="/about/company" className="text-gray-400 hover:text-white">Company</Link></li>
              <li><Link href="/about/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link href="/about/responsibility" className="text-gray-400 hover:text-white">Responsibility</Link></li>
              <li><Link href="/about/news" className="text-gray-400 hover:text-white">News</Link></li>
              <li><Link href="/about/investors" className="text-gray-400 hover:text-white">Investors</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6">
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <div className="text-red-600 font-bold">
              <span className="text-2xl">POC</span>
              <span className="block text-sm -mt-1">business</span>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} POC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
