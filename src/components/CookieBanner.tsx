'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p>
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
              Consultez notre{' '}
              <Link href="/confidentialite" className="text-brand hover:text-brand-dark underline">
                politique de confidentialité
              </Link>{' '}
              pour en savoir plus.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={rejectAll}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-colors"
            >
              Tout refuser
            </button>
            <button
              onClick={acceptAll}
              className="rounded-md bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 transition-colors"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}