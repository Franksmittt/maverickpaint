// app/painting-services/page.tsx (Full Corrected Code - Icon and Component Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Added Layers and ContactForm to the import list
import { PaintBucket, Building, HardHat, Home, ArrowRight, Layers } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module';
import { ContactForm } from '@/app/_components/contact-form'; // FIX: Imported ContactForm

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Professional Painting Contractors - Johannesburg & Gauteng | Maverick', // Primary Keyword
    description: 'Expert commercial, industrial, and body corporate painting services. We offer a turn-key solution from defect identification and repair to final coating application.',
    keywords: 'painting contractors Johannesburg, professional painting services, turn-key painting contractor, interior and exterior painting Gauteng', // Broad service and local keywords
};

// --- Service Links (Cluster Pages) ---
const PAINTING_SECTORS = [
    {
        title: "Commercial Painting",
        description: "Specialized redecoration for office parks, shopping centers, and hospitals. Focus on minimal disruption and OHS compliance.",
        href: "/painting/commercial-painting", // Links to Commercial Cluster Page
        icon: Building,
    },
    {
        title: "Industrial Painting",
        description: "Corrosion protection and structural steel coating for factories and warehouses. Focus on asset protection and technical preparation.",
        href: "/painting/industrial-painting", // Links to Industrial Cluster Page
        icon: HardHat,
    },
    {
        title: "Body Corporate Painting",
        description: "Large-scale sectional title redecoration. Guaranteed quality and total transparency for all trustees via Independent QA.",
        href: "/painting/body-corporate-painting", // Links to Body Corporate Cluster Page
        icon: Home,
    },
    {
        title: "Roof Painting & Restoration",
        description: "Full restoration process for tiled, metal, and concrete roofs. Local expertise in Alberton and greater Johannesburg.",
        icon: Layers, // Layers icon is now defined
        href: "/painting/roof-coatings", // Links to Roof Coatings Cluster Page
    },
];

// --- Component Definition ---
export default function PaintingServicesPillarPage() {
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
                    <PaintBucket className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Professional Painting Contractors
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Your trusted partner for large-scale painting and protective coating projects across Gauteng's commercial, industrial, and residential sectors.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Turn-Key Service & Sectors */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: Turn-Key Differentiator */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                The Turn-Key Service: From Defect to Final Coat
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Unlike typical painting contractors, we provide a **turn-key service** starting with defect identification, structural/plaster repairs, and waterproofing. This guarantees the integrity of the substrate before the application of the protective coating system.
                            </p>
                        </div>

                        {/* 2. SECTORS GRID */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Painting Services by Industry Sector
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {PAINTING_SECTORS.map((service) => (
                                    <Link 
                                        key={service.title} 
                                        href={service.href} 
                                        className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#5AD5E2]"
                                    >
                                        <service.icon className={cn("w-8 h-8 mb-3", service.icon === Home ? TERTIARY_COLOR : SECONDARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{service.title}</h3>
                                        <p className="text-gray-600 mb-4">{service.description}</p>
                                        <span className={cn("text-sm font-semibold flex items-center", SECONDARY_COLOR)}>
                                            View Sector Specialization <ArrowRight className="w-4 h-4 ml-2" />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA Module */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Verifiable Quality for Risk-Averse Management
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Large-Scale Project Quote</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get a comprehensive assessment that includes defect repair and a guaranteed coating system.
                            </p>
                            <ContactForm isHeroForm={false} /> {/* ContactForm is now defined */}
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}