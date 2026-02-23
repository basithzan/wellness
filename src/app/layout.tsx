import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import { BookingProvider } from '@/components/BookingProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://zenorawellness.com'),
  title: 'Zenora Wellness FZE | Corporate Wellness UAE',
  description:
    'Zenora Wellness FZE — Premium executive wellness consultancy in the UAE. Evidence-based programs for health optimization, burnout recovery, and lifestyle disease prevention for corporate leaders.',
  keywords: [
    'corporate wellness UAE',
    'executive health programs Dubai',
    'wellness consultancy UAE',
    'burnout recovery programs',
    'metabolic reset UAE',
  ],
  openGraph: {
    title: 'Zenora Wellness FZE | Corporate Wellness UAE',
    description:
      'Executive wellness solutions for the UAE\'s most driven professionals. Elevating corporate vitality through evidence-based health programs.',
    url: 'https://zenorawellness.com',
    siteName: 'Zenora Wellness FZE',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenora Wellness FZE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenora Wellness FZE | Corporate Wellness UAE',
    description: 'Executive wellness solutions for the UAE\'s most driven professionals.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zenora Wellness FZE',
  description: 'Premium corporate wellness consultancy in the UAE offering executive health optimization programs.',
  url: 'https://zenorawellness.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressRegion: 'UAE',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  serviceType: 'Corporate Wellness Consultancy',
  priceRange: '$$$$',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <BookingProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgressBar />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </BookingProvider>
      </body>
    </html>
  );
}
