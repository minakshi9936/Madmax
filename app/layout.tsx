import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MADMAX - Professional Outdoor Advertising Solutions',
  description: 'Leading provider of outdoor advertising services including hoardings, banners, and digital signage. Transform your brand visibility with our expert advertising solutions.',
  keywords: [
    'outdoor advertising',
    'hoardings',
    'banners',
    'digital signage',
    'billboards',
    'advertising solutions',
    'brand visibility',
    'marketing services',
    'outdoor media',
    'advertisement displays'
  ],
  authors: [{ name: 'MADMAX Advertising' }],
  creator: 'MADMAX',
  publisher: 'MADMAX',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Madmax-logoo.png',
  },
  openGraph: {
    title: 'MADMAX - Professional Outdoor Advertising Solutions',
    description: 'Leading provider of outdoor advertising services including hoardings, banners, and digital signage. Transform your brand visibility with our expert advertising solutions.',
    url: 'https://madmaxadvertising.com',
    siteName: 'MADMAX',
    images: [
      {
        url: '/Madmax-logoo.png',
        width: 1200,
        height: 630,
        alt: 'MADMAX Outdoor Advertising',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MADMAX - Professional Outdoor Advertising Solutions',
    description: 'Leading provider of outdoor advertising services including hoardings, banners, and digital signage.',
    images: ['/Madmax-logoo.png'],
    creator: '@madmaxadvertising',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBar />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
