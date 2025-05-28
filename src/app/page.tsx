'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useTranslation } from '@/components/shared/TranslationProvider'
import Script from 'next/script'

// Extended type declaration for LeadConnector
declare global {
  interface Window {
    LeadConnector?: {
      init?: () => void;
      chat?: {
        show?: () => void;
        hide?: () => void;
      };
    };
    lc?: {
      widget?: any;
    };
  }
}

// ... [Keep all your existing components unchanged until the Home component] ...

export default function Home() {
  const [chatLoaded, setChatLoaded] = useState(false)
  const [chatError, setChatError] = useState<string | null>(null)

  // Enhanced initialization with multiple fallbacks
  useEffect(() => {
    const initializeChat = () => {
      if (typeof window === 'undefined') return

      // Method 1: Check if LeadConnector is already available
      if (window.LeadConnector) {
        console.log('LeadConnector already loaded')
        setChatLoaded(true)
        return
      }

      // Method 2: Check for alternative global variable
      if (window.lc?.widget) {
        console.log('Found lc.widget alternative')
        setChatLoaded(true)
        return
      }

      // Method 3: Manual script injection with retries
      const scriptId = 'leadconnector-chat-script'
      if (document.getElementById(scriptId)) return

      console.log('Injecting LeadConnector script manually')
      const script = document.createElement('script')
      script.id = scriptId
      script.src = "https://beta.leadconnectorhq.com/loader.js"
      script.async = true
      script.dataset.resourcesUrl = 'https://beta.leadconnectorhq.com/chat-widget/loader.js'
      script.dataset.widgetId = '67a1422f5217fddb3070bf21'
      
      script.onload = () => {
        console.log('LeadConnector script loaded successfully')
        // Additional check after loading
        setTimeout(() => {
          if (window.LeadConnector || window.lc?.widget) {
            setChatLoaded(true)
          } else {
            setChatError('LeadConnector API not found after loading')
          }
        }, 1000)
      }
      
      script.onerror = () => {
        console.error('Failed to load LeadConnector script')
        setChatError('Failed to load chat script')
      }
      
      document.body.appendChild(script)
    }

    // Initial attempt
    initializeChat()

    // Fallback with delay
    const fallbackTimer = setTimeout(() => {
      if (!chatLoaded && !chatError) {
        console.log('Attempting fallback initialization')
        initializeChat()
      }
    }, 3000)

    return () => clearTimeout(fallbackTimer)
  }, [chatLoaded, chatError])

  // Debug function to manually trigger chat
  const showChatDebug = () => {
    if (window.LeadConnector?.chat?.show) {
      window.LeadConnector.chat.show()
      alert('Chat shown programmatically')
    } else if (window.lc?.widget?.show) {
      window.lc.widget.show()
      alert('Chat shown via lc.widget')
    } else {
      alert('No chat API found')
    }
  }

  return (
    <>
      {/* Fonts */}
      <Script id="google-fonts" strategy="beforeInteractive">
        {`/* your font loading code */`}
      </Script>
      
      {/* Primary LeadConnector implementation */}
      <Script 
        id="leadconnector-chat-primary"
        strategy="afterInteractive"
        src="https://beta.leadconnectorhq.com/loader.js"
        data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67a1422f5217fddb3070bf21"
        onLoad={() => {
          console.log('Primary chat script loaded')
          setChatLoaded(true)
        }}
        onError={(e) => {
          console.error('Primary chat script failed', e)
          setChatError('Primary load failed')
        }}
      />
      
      {/* Chat container with enhanced debugging */}
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
          zIndex: 9999,
          border: chatLoaded ? 'none' : '2px dashed red',
          display: chatLoaded ? 'block' : 'none'
        }}
      >
        {!chatLoaded && (
          <div style={{
            padding: '10px',
            background: 'white',
            color: 'red',
            fontSize: '12px'
          }}>
            {chatError || 'Chat loading...'}
          </div>
        )}
      </div>

      {/* Debug panel (visible in development) */}
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
          <strong>Chat Debug</strong>
          <div>Status: {chatLoaded ? '✅ Loaded' : '⏳ Loading'}</div>
          {chatError && <div style={{color: 'red'}}>Error: {chatError}</div>}
          <button 
            onClick={showChatDebug}
            style={{
              marginTop: '5px',
              padding: '5px 10px',
              background: '#f0f0f0',
              border: '1px solid #ccc'
            }}
          >
            Test Show Chat
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