import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Serif_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Malachite Medical Centre | Mental Health Services',
  description: 'Malachite Medical Centre provides comprehensive mental health services including workplace wellness programs, school-based services, clinical innovation, and evidence-based treatment approaches in Uganda.',
  keywords: ['mental health', 'counseling', 'therapy', 'workplace wellness', 'school outreach', 'clinical services', 'uganda', 'kampala'],
  authors: [{ name: 'Malachite Medical Centre' }],
  creator: 'Malachite Medical Centre',
  publisher: 'Malachite Medical Centre',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${dmSerif.variable} font-sans antialiased bg-background`}
      >
        <Navbar />
        <main className="pt-32 md:pt-40 py-12">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}