// app/layout.tsx (Full Corrected Code)
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/app/_components/providers"
import { GoogleAnalytics } from '@next/third-parties/google'
import { MainNav } from './_components/main-nav'
import { MainFooter } from './_components/main-footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maverick Painting | Asset Maintenance Partner',
  description: 'Expert structural repairs, waterproofing, and specialized coatings for commercial and industrial assets in Gauteng. Backed by Independent QA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav /> 
          <main>{children}</main>
          <MainFooter /> 
        </ThemeProvider>
        <GoogleAnalytics gaId="G-YOUR-ID-HERE" /> {/* REMEMBER TO REPLACE THIS ID */}
      </body>
    </html>
  )
}