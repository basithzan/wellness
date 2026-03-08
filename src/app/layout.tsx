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
  title: 'Zenora Wellness | Global Corporate Wellness',
  description:
    'Zenora Wellness — Premium global executive wellness consultancy. Evidence-based programs for health optimization, performance enhancement, and long-term vitality for corporate leaders worldwide.',
  keywords: [
    'global corporate wellness',
    'executive health programs',
    'wellness consultancy',
    'burnout recovery programs',
    'executive performance optimization',
  ],
  openGraph: {
    title: 'Zenora Wellness | Global Corporate Wellness',
    description:
      'Executive wellness solutions for high-performing professionals across the globe. Elevating corporate vitality through evidence-based health programs.',
    url: 'https://zenorawellness.com',
    siteName: 'Zenora Wellness',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zenora Wellness',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenora Wellness | Global Corporate Wellness',
    description: 'Executive wellness solutions for high-performing professionals across the globe.',
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
  name: 'Zenora Wellness',
  description: 'Premium global executive wellness consultancy offering health optimization and performance programs worldwide.',
  url: 'https://zenorawellness.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressRegion: 'UAE',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
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
