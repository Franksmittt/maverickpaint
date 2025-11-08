// app/painting-contractors-alberton/page.tsx (Full Code - Local SEO Targeting Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { MapPin, Home, ArrowRight, Wrench, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form'; 
import { QAModule } from '@/app/_components/qa-module'; 

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Painters & Waterproofing Contractors in Alberton (New Redruth, Alrode)', // Hyper-Local Primary Keyword
    description: 'Expert residential and commercial painting contractors in Alberton. We specialize in roof painting, flat roof waterproofing, and structural repairs across New Redruth, Meyersdal, and Alrode.', // Name-drops local suburbs 
    keywords: 'painters in Alberton, roof painting Alberton, flat roof waterproofing Alberton, commercial painters Alrode', // Hyper-local keywords
};

// --- Local Services ---
const LOCAL_SERVICES = [
    {
        title: "Roof Painting & Restoration",
        description: "Local experts in tiled and metal roof restoration in Alberton (New Redruth, Meyersdal).",
        href: "/painting/roof-coatings", 
        icon: Home,
    },
    {
        title: "Flat Roof Waterproofing",
        description: "Permanent solutions for flat concrete roofs common in Alberton and the Alrode industrial area[cite: 852].",
        href: "/waterproofing/flat-roof-waterproofing", 
        icon: Zap,
    },
    {
        title: "Structural Repair Experts",
        description: "Turn-key concrete cancer (spalling) and crack repair for residential complexes and commercial buildings in Alberton.",
        href: "/repairs/concrete-cancer-spalling-repair", 
        icon: Wrench,
    },
];

// --- Component Definition ---
export default function AlbertonLocalPage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const PRIMARY_COLOR_TEXT = 'text-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const SECONDARY_COLOR = 'text-[#5AD5E2]';
    const WHITE_TEXT = 'text-white';

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <MapPin className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Painters & Waterproofing Contractors in Alberton
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Your trusted local partner for high-quality painting, roof restoration, and structural repairs across **New Redruth, Meyersdal, and Alrode**.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Local Service Focus */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. LOCAL THESIS */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Local Expertise for Alberton's Specific Climate Needs
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                We are actively serving the Alberton area, providing prompt service and detailed knowledge of the common structural and waterproofing issues found in local residential and industrial properties.
                            </p>
                        </div>
                        
                        {/* 2. LOCAL SERVICES GRID */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                High-Demand Services in Your Suburb
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {LOCAL_SERVICES.map((service, index) => (
                                    <Link 
                                        key={index} 
                                        href={service.href} 
                                        className="block p-6 border-2 border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-[#A9D834]"
                                    >
                                        <service.icon className={cn("w-8 h-8 mb-3", service.icon === MapPin ? SECONDARY_COLOR : TERTIARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{service.title}</h3>
                                        <p className="text-gray-600 text-sm">{service.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 3. FINAL TRUST AND QA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Guaranteed Quality: Verifiable in Alberton
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Local Alberton Quote</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get a quick quote for your property in New Redruth or Meyersdal.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}