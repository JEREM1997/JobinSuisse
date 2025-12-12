import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JobinSuisse — powered by G-Services | Emploi et Logement en Suisse',
  description: 'Spécialistes de l\'accompagnement professionnel en Suisse. Services d\'aide à l\'emploi et au logement pour votre installation en Suisse.',
  keywords: 'emploi suisse, logement suisse, travail suisse, installation suisse, genève, zurich',
  authors: [{ name: 'G-Services', url: 'https://jobinsuisse.com' }],
  creator: 'G-Services',
  publisher: 'G-Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jobinsuisse.com'),
  openGraph: {
    title: 'JobinSuisse — powered by G-Services',
    description: 'Spécialistes de l\'accompagnement professionnel en Suisse',
    url: 'https://jobinsuisse.com',
    siteName: 'JobinSuisse',
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobinSuisse — powered by G-Services',
    description: 'Spécialistes de l\'accompagnement professionnel en Suisse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              style: {
                background: '#059669',
              },
            },
            error: {
              style: {
                background: '#DC2626',
              },
            },
          }}
        />
      </body>
    </html>
  )
}