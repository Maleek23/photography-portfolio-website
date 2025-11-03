import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from "next/font/google"
import Script from 'next/script'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Leekshotit Photography | HTX/DTX Professional Photographer',
  description: 'Abdulmalik Ajisegiri (Leekshotit) - Professional HTX/DTX photographer specializing in graduation sessions, portrait photography, creative projects, and concert/event coverage. Self-taught photographer, videographer, and artist.',
  keywords: ['photography', 'HTX photographer', 'DTX photographer', 'Houston photographer', 'Dallas photographer', 'graduation photography', 'portrait photographer', 'concert photography', 'event photography', 'Leekshotit', 'Abdulmalik Ajisegiri', 'creative photography', 'professional photographer'],
  authors: [{ name: 'Abdulmalik Ajisegiri', url: 'https://leekshotit.com' }],
  creator: 'Abdulmalik Ajisegiri',
  publisher: 'Leekshotit Photography',
  metadataBase: new URL('https://leekshotit.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Leekshotit Photography | Professional HTX/DTX Photographer',
    description: 'Professional photography services specializing in graduation, portraits, creative projects, and events. Based in Houston & Dallas.',
    url: 'https://leekshotit.com',
    siteName: 'Leekshotit Photography',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Leekshotit Photography Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leekshotit Photography | Professional Photographer',
    description: 'Professional photography services specializing in graduation, portraits, creative projects, and events.',
    images: ['/images/hero.png'],
    creator: '@leekshotit',
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
  verification: {
    google: 'your-google-verification-code-here',
  },
}

const manrope = Manrope({ subsets: ['latin'], weight: ["400", "500", "600"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className={manrope.className}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://leekshotit.com",
              "name": "Leekshotit Photography",
              "alternateName": "Abdulmalik Ajisegiri Photography",
              "description": "Professional HTX/DTX photographer specializing in graduation sessions, portrait photography, creative projects, and concert/event coverage. Self-taught photographer, videographer, and artist.",
              "url": "https://leekshotit.com",
              "telephone": "+1-XXX-XXX-XXXX",
              "image": "https://leekshotit.com/images/hero.png",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "addressCountry": "US"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Houston",
                  "sameAs": "https://en.wikipedia.org/wiki/Houston"
                },
                {
                  "@type": "City",
                  "name": "Dallas",
                  "sameAs": "https://en.wikipedia.org/wiki/Dallas"
                }
              ],
              "serviceType": ["Portrait Photography", "Graduation Photography", "Event Photography", "Concert Photography", "Creative Photography"],
              "priceRange": "$100-$400",
              "founder": {
                "@type": "Person",
                "name": "Abdulmalik Ajisegiri",
                "jobTitle": "Photographer & Videographer",
                "sameAs": [
                  "https://instagram.com/leekshotit",
                  "https://twitter.com/leekshotit"
                ]
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Graduation Photography Sessions",
                  "description": "Bronze, Silver, and Gold packages for graduation photography",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "220",
                    "maxPrice": "400",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Solo Portrait Sessions",
                  "description": "Bronze, Silver, Gold, and Platinum packages for portrait photography",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "185",
                    "maxPrice": "400",
                    "priceCurrency": "USD"
                  }
                },
                {
                  "@type": "Offer",
                  "name": "Events & Concerts",
                  "description": "Professional event and concert photography coverage",
                  "priceSpecification": {
                    "@type": "PriceSpecification",
                    "price": "100",
                    "priceCurrency": "USD",
                    "unitText": "HOUR"
                  }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
