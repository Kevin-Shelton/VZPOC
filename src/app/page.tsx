'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Script from 'next/script'

// ... [keep all your existing component code unchanged until the Home component] ...

export default function Home() {
  const [chatLoaded, setChatLoaded] = useState(false)

  // Additional manual initialization as fallback
  useEffect(() => {
    // Only run if script hasn't loaded after 5 seconds
    const timeout = setTimeout(() => {
      if (!chatLoaded && typeof window !== 'undefined' && !window.LeadConnector) {
        console.log('Attempting manual chat widget initialization')
        const script = document.createElement('script')
        script.src = "https://beta.leadconnectorhq.com/loader.js"
        script.async = true
        script.dataset.resourcesUrl = 'https://beta.leadconnectorhq.com/chat-widget/loader.js'
        script.dataset.widgetId = '67a1422f5217fddb3070bf21'
        script.onload = () => {
          console.log('Manual chat script loaded')
          setChatLoaded(true)
        }
        script.onerror = () => console.error('Manual chat script failed to load')
        document.body.appendChild(script)
      }
    }, 5000)

    return () => clearTimeout(timeout)
  }, [chatLoaded])

  return (
    <>
      {/* Add Roboto font */}
      <Script id="google-fonts" strategy="beforeInteractive">
        {`/* your font loading code */`}
      </Script>
      
      {/* LeadConnector Chat Widget - Primary Implementation */}
      <Script 
        id="leadconnector-chat"
        strategy="afterInteractive"
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67a1422f5217fddb3070bf21"
        onLoad={() => {
          console.log('Chat widget script loaded successfully')
          setChatLoaded(true)
          // Additional check to verify the widget API is available
          if (typeof window.LeadConnector !== 'undefined') {
            console.log('LeadConnector API is available')
          } else {
            console.warn('LeadConnector API not found')
          }
        }}
        onError={(e) => console.error('Chat widget script failed to load', e)}
      />
      
      {/* Chat widget container - with more visible debugging */}
      <div 
        id="leadconnector-chat-container"
        data-chat-widget
        data-widget-id="67a1422f5217fddb3070bf21"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '350px',
          height: '500px',
          border: chatLoaded ? 'none' : '2px dashed red',
          zIndex: 9999
        }}
      >
        {!chatLoaded && (
          <div style={{
            padding: '10px',
            background: 'white',
            color: 'red',
            fontSize: '12px'
          }}>
            Chat widget loading... ({typeof window !== 'undefined' && window.LeadConnector ? 'API ready' : 'Waiting for API'})
          </div>
        )}
      </div>

      {/* Debug panel */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '20px',
          background: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          zIndex: 9998,
          fontSize: '12px'
        }}>
          <strong>Chat Widget Debug</strong>
          <div>Status: {chatLoaded ? 'Loaded' : 'Loading...'}</div>
          <button 
            onClick={() => {
              if (typeof window.LeadConnector !== 'undefined') {
                console.log('LeadConnector:', window.LeadConnector)
                alert('LeadConnector API is available in console')
              } else {
                alert('LeadConnector API not found')
              }
            }}
            style={{ marginTop: '5px' }}
          >
            Check API
          </button>
        </div>
      )}
      
      {/* Main content */}
      <div className="max-w-[1200px] mx-auto px-4">
        <HeroSection />
        <BusinessSegments />
        <ProductGrid />
        <SolutionsSection />
        <LanguageSelector />
      </div>
    </>
  )
}