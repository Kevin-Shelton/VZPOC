'use client'

import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TranslationProvider from '@/components/shared/TranslationProvider'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TranslationProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </TranslationProvider>
      </body>
    </html>
  )
}
