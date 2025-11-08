// app/_components/hero-section.tsx (Full Corrected Code - Secondary CTA Visibility Fix)
'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap } from 'lucide-react';
import { ContactForm } from './contact-form'; // Import the form component

export function HeroSection() {
  const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary
  const SECONDARY_COLOR_TEXT = 'text-[#5AD5E2]'; // Secondary
  const TERTIARY_COLOR_TEXT = 'text-[#A9D834]'; // Tertiary

  return (
    // FIX: Reduced vertical padding (py-8 md:py-10) is preserved to keep the section shorter
    <section className={cn("relative", PRIMARY_COLOR_BG, "flex items-center")}>
      <div className="container mx-auto px-5 py-8 md:py-10"> 
        
        {/* Two-Column Grid for Marketing and Conversion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 items-center">
          
          {/* LEFT COLUMN: Marketing Copy and USP */}
          <div className="lg:pr-10 pb-8 lg:pb-0 text-center lg:text-left"> 
            
            {/* H1: Central Thesis */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
              We Don't Just Paint. We Are Your{' '}
              <span className={TERTIARY_COLOR_TEXT}>Asset Maintenance Partner.</span>
            </h1>

            {/* Subheading: The Differentiator */}
            <p className="text-lg text-gray-300 font-medium mb-8">
              Turn-key structural remediation, waterproofing, and specialized coatings for 
              commercial, industrial, and body corporate assets in Johannesburg and Gauteng.
            </p>

            {/* Trust Signals */}
            <div className="mt-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-400 font-medium">
                <span className="flex items-center gap-1">
                  <CheckCircle className={cn("w-4 h-4", SECONDARY_COLOR_TEXT)} />
                  Manufacturer & Workmanship Guarantees
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className={cn("w-4 h-4", SECONDARY_COLOR_TEXT)} />
                  Sika, Dulux, Marmoran Approved Applicators
                </span>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="mt-8">
              <Link href="/structural-repairs" passHref>
                <Button
                  size="lg"
                  // FIX: Explicitly set background/text/border colors to make it visible
                  className={cn('text-md font-bold px-8 h-12 rounded-lg border-2 bg-transparent text-white border-white hover:bg-white hover:text-[#121111]')}
                  variant="outline"
                >
                  View Structural Repair Services
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form (The Conversion Engine) */}
          <div className={cn("p-6 rounded-xl bg-white shadow-2xl lg:mx-auto lg:w-full", "border border-[#5AD5E2]")}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}