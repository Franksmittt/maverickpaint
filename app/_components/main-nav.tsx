// app/_components/main-nav.tsx (Full Corrected Code - Added "Contact Us" Link)
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { Menu, Phone, PaintBucket, MessageSquare } from 'lucide-react';

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

// Simplified Navigation Links - FIX APPLIED HERE
const navigationLinks: { href: string; label: string }[] = [
  { href: '/about-us', label: 'About Us' },
  { href: '/painting-services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' }, // <-- NEW LINK ADDED
];

export function MainNav() {
  const PRIMARY_COLOR_BG = 'bg-[#121111]'; 
  const SECONDARY_COLOR_BG = 'bg-[#5AD5E2]'; 
  const TERTIARY_COLOR_BG = 'bg-[#A9D834]'; 
  
  // Custom styling for the primary "Call Us" button
  const CALL_US_STYLE = 'bg-[#121111] hover:bg-[#2C2C2C] text-[#A9D834] border border-[#A9D834]';

  // Custom styling for the secondary "WhatsApp Us" button
  const WHATSAPP_STYLE = 'bg-[#A9D834] hover:bg-[#5AD5E2] text-[#121111]';
  
  const PHONE_NUMBER = '0826277082'; 
  const WHATSAPP_URL = `https://wa.me/27${PHONE_NUMBER.replace(/\s/g, '')}?text=Hi%2C%20I%20saw%20your%20website%20and%20need%20a%20quote%20for%20painting%20services.`;

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b px-4 md:px-6", PRIMARY_COLOR_BG, "border-[#121111]")}>
      <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-4">
        
        {/* Left Section: Logo */}
        <div className="flex items-center">
          {/* Logo and Brand Name */}
          <Link
            href="/"
            className="flex items-center space-x-2 transition-colors"
          >
            <Logo className="h-8 w-8 text-[#A9D834]" />
            <span className="hidden font-extrabold text-xl sm:inline-block text-white"> 
              MAVERICK 
              <span className="text-[#5AD5E2]">PAINTING</span> 
            </span>
          </Link>
        </div>

        {/* Center Section: Navigation Menu (Flex-1 for centering) */}
        <div className="hidden lg:flex flex-1 justify-center"> 
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild> 
                    <Link href={link.href}> 
                      <div 
                        className={cn(
                          navigationMenuTriggerStyle(),
                          'bg-transparent hover:bg-white/10 data-[state=open]:bg-white/10',
                          'text-white hover:text-[#5AD5E2] transition-colors font-medium text-sm' 
                        )}
                      >
                        {link.label}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Section: CTA Buttons */}
        <div className="flex items-center gap-3">
          
          {/* 1. CALL US Button (Desktop) */}
          <a
            href={`tel:${PHONE_NUMBER}`} 
            className="hidden md:block"
          >
            <Button
              size="lg"
              className={cn('text-sm font-bold px-6 h-10 rounded-lg shadow-md transition-all', CALL_US_STYLE)}
            >
              <Phone className='w-4 h-4 mr-2'/> Call Us
            </Button>
          </a>

          {/* 2. WHATSAPP US Button (Desktop) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button
              size="lg"
              className={cn('text-sm font-bold px-6 h-10 rounded-lg shadow-md transition-all', WHATSAPP_STYLE)}
            >
              <MessageSquare className='w-4 h-4 mr-2'/> WhatsApp Us
            </Button>
          </a>

          {/* Mobile Menu Trigger (Dropdown Fix applied here) */}
          <div className="flex items-center lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className={cn("group h-10 w-10 hover:bg-white/10", PRIMARY_COLOR_BG)}
                  variant="outline"
                  size="icon"
                >
                  <Menu className="h-6 w-6 text-white" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </PopoverTrigger>
              
              {/* Mobile Popover Content - FIXED, RELIABLE DROPDOWN */}
              <PopoverContent 
                align="end" 
                className={cn(
                  "w-56 p-4 mr-4 mt-2", 
                  PRIMARY_COLOR_BG, 
                  "text-white border-[#A9D834] z-40" 
                )}
              >
                <NavigationMenu className="max-w-none">
                  <NavigationMenuList className="flex-col items-center justify-center gap-2">
                    {/* Mobile Nav Links */}
                    {navigationLinks.map((link) => (
                      <NavigationMenuItem key={link.href} className="w-full">
                         <NavigationMenuLink asChild> 
                            <Link href={link.href}>
                              <div
                                className={cn(
                                  'flex w-full items-center justify-center rounded-md px-3 py-3 text-base font-medium transition-colors hover:bg-white/10 hover:text-[#5AD5E2]', 
                                  'text-white', 
                                )}
                              >
                                {link.label}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                    {/* Mobile CTAs */}
                    <NavigationMenuItem className="w-full pt-4 space-y-2">
                        <a href={`tel:${PHONE_NUMBER}`} className="w-full block">
                            <Button className={cn('w-full h-10 font-bold', CALL_US_STYLE)}>
                                <Phone className='w-4 h-4 mr-2'/> Call Us Now
                            </Button>
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full block">
                            <Button className={cn('w-full h-10 font-bold', WHATSAPP_STYLE)}>
                                <MessageSquare className='w-4 h-4 mr-2'/> WhatsApp Us
                            </Button>
                        </a>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  );
}