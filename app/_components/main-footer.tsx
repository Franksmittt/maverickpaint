// app/_components/main-footer.tsx (Full Corrected Code - Tightest Nav Spacing)
'use client';

import React from 'react';
import Link from 'next/link';
import { Mountain, PaintBucket, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Re-usable Logo Component
const Logo = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <PaintBucket />
  </svg>
);

// Define Link Groups based on SEO Silos (Part 2)
const linkGroups = [
  {
    title: 'Core Services',
    links: [
      { href: '/painting-services', label: 'Painting Contractors' },
      { href: '/waterproofing-services', label: 'Waterproofing & Damp Proofing' },
      { href: '/structural-repairs', label: 'Structural & Concrete Repairs' },
      { href: '/specialized-coatings', label: 'Specialized Floor Coatings' },
      { href: '/access-solutions', label: 'Rope Access & High-Level Access' },
    ],
  },
  {
    title: 'High-Value Niches',
    links: [
      { href: '/painting/body-corporate-painting', label: 'Body Corporate Painting' },
      { href: '/coatings/hygienic-food-grade-flooring', label: 'Hygienic/Food-Grade Flooring' },
      { href: '/waterproofing/leaking-balcony-repair', label: 'Leaking Balcony Repair' },
      { href: '/repairs/concrete-cancer-spalling-repair', label: 'Concrete Cancer Repair' },
      { href: '/painting/roof-coatings', label: 'Roof Painting & Restoration' },
    ],
  },
  {
    title: 'Company & Trust',
    links: [
      { href: '/about-us', label: 'About Us' },
      { href: '/our-process-independent-qa', label: 'Independent QA Process' },
      { href: '/accreditations', label: 'Certifications & Approvals' },
      { href: '/projects', label: 'Recent Projects (Portfolio)' },
      { href: '/blog', label: 'Technical Blog' },
    ],
  },
];

export function MainFooter() {
  const CURRENT_YEAR = new Date().getFullYear();
  const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary Black
  const PRIMARY_COLOR_TEXT = 'text-[#121111]'; // Primary Black
  const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue
  const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green
  const WHITE_TEXT = 'text-white';

  return (
    // FIX: Set background to Primary Black
    <footer className={cn("py-12 border-t", PRIMARY_COLOR_BG, WHITE_TEXT, "border-gray-800")}>
      <div className="container mx-auto px-5">
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Logo, Contact Info, and USP */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link
              href="/"
              className="flex items-center space-x-3"
            >
              <Logo className={cn("h-8 w-8", TERTIARY_COLOR)} />
              <span className={cn("font-extrabold text-2xl", WHITE_TEXT)}>
                MAVERICK PAINTING
              </span>
            </Link>
            
            <p className={cn("text-base font-semibold", TERTIARY_COLOR)}>
              Asset Maintenance Partner (Johannesburg & Gauteng)
            </p>

            <p className="text-sm text-gray-400">
              We specialize in turn-key structural remediation, waterproofing, and specialized coatings, backed by **Independent Third-Party Quality Assurance**.
            </p>

            {/* Contact Details (Lawrence Brooks - Owner) */}
            <div className="space-y-2 text-sm">
              <a 
                href="tel:0826277082" 
                // FIX: Added Tertiary Color accent for link text and white hover
                className={cn("flex items-center gap-3 hover:text-white transition-colors", TERTIARY_COLOR)}
              >
                <Phone className="h-4 w-4" />
                <span>Call Us: 082 627 7082 (Lawrence Brooks)</span>
              </a>
              <a 
                href="mailto:brooks@maverickpaint.co.za" // FIX: Updated Email Address
                // FIX: Added Tertiary Color accent for link text and white hover
                className={cn("flex items-center gap-3 hover:text-white transition-colors", TERTIARY_COLOR)}
              >
                <Mail className="h-4 w-4" />
                <span>Email: brooks@maverickpaint.co.za</span>
              </a>
            </div>
          </div>
          
          {/* Column 2 & 3: SEO Silo Link Groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="col-span-1">
              <h3 className={cn("font-bold mb-4 text-lg", TERTIARY_COLOR)}>{group.title}</h3>
              {/* FIX: Changed space-y-2 to space-y-1 to bring links closer */}
              <ul className="space-y-1"> 
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      // Links are white/gray-400 for contrast
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom: Separator and Copyright */}
        <Separator className="my-10 bg-gray-800" />
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {CURRENT_YEAR} Maverick Painting. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}