// app/painting/industrial-painting/page.tsx (Full Code - Industrial Painting Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { HardHat, Wrench, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Industrial Painting & Corrosion Protection Specialists | Gauteng', // Primary Keyword [cite: 202, 210]
    description: 'Expert industrial painting services focused on asset protection, structural steel coating, and corrosion control. Specialists in warehouse, factory, and specialized roof coating systems.',
    keywords: 'industrial painting services Gauteng, corrosion protection, warehouse painting and roof coating contractors Gauteng, industrial protective coatings', // Technical focus keywords [cite: 210, 4242, 4244]
};

// --- Service Foci ---
const INDUSTRIAL_FOCI = [
    { 
        title: "Corrosion Protection Systems", 
        description: "Applying industrial coatings to protect structural steel, piping, and metal surfaces from rust and chemical degradation[cite: 208].",
        icon: Wrench,
    },
    { 
        title: "Warehouse & Factory Floor Coatings", 
        description: "Application of specialized, durable paint systems for factory floors and high-traffic operational areas[cite: 207].",
        icon: HardHat,
    },
    { 
        title: "Industrial Roof Coatings", 
        description: "Protective coating systems for factory and warehouse roofs to secure the building envelope and ensure long-term waterproofing[cite: 207].",
        icon: Shield,
    },
];

// --- Component Definition ---
export default function IndustrialPaintingPage() {
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
                    <HardHat className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Industrial Painting & Corrosion Protection Specialists
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Our focus is on **asset protection**, not aesthetics. We deliver highly technical surface preparation and robust coating systems for factories, warehouses, and structural steel[cite: 203, 204].
                    </p>
                </div>
            </section>

            {/* Main Content Area: Technical Focus & Solutions */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: Asset Protection */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Shifting the Focus from Aesthetics to Asset Protection
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Industrial environments demand coatings that perform under stress. Our process starts with technical surface preparation (e.g., blast cleaning) and application of robust systems that withstand heat, chemicals, and physical abrasion[cite: 204].
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                Our goal is to extend the life of your building envelope and machinery, minimizing long-term maintenance costs.
                            </p>
                        </div>
                        
                        {/* 2. CORE INDUSTRIAL SERVICES */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Technical Services for Industrial Clients
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {INDUSTRIAL_FOCI.map((focus, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <focus.icon className={cn("w-8 h-8 mb-3", TERTIARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{focus.title}</h3>
                                        <p className="text-gray-700">{focus.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA and FINAL TRUST */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Compliance and Verifiable Quality for Engineering Standards
                            </h2>
                            <QAModule />
                            
                            {/* Cross-Sell */}
                            <div className="mt-8">
                                <Link href="/specialized-coatings" passHref>
                                    <Button
                                        variant="outline"
                                        className={cn('h-12 text-md font-bold w-full md:w-auto justify-between border-[#A9D834] text-[#A9D834] hover:bg-[#A9D834] hover:text-white transition-colors')}
                                    >
                                        View Specialized Floor Coating Solutions <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#5AD5E2] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule an Industrial Site Inspection</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get a technical quote that includes surface preparation methods and specific coating systems.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}