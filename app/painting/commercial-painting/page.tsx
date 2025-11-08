// app/painting/commercial-painting/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Added Shield to the import list
import { Building, Clock, Ambulance, ArrowRight, Shield } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; 
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Expert Commercial Painting Services for Office Parks & Hospitals | Maverick', // Primary Keyword
    description: 'We specialize in commercial redecoration with minimal disruption, strict OHS compliance, and expertise in sensitive environments like hospitals (antimicrobial paints).',
    keywords: 'commercial painting contractors Johannesburg, hospital painting services South Africa, office park painting Gauteng, minimal disruption painting', // High-value keywords
};

// --- Key Client Concerns ---
const CLIENT_PAIN_POINTS = [
    { 
        title: "Minimal Disruption Guaranteed", 
        description: "Flexible scheduling, including after-hours and weekend work, ensures your business operations or tenants are never disturbed.",
        icon: Clock,
    },
    { 
        title: "OHS and Compliance", 
        description: "Strict adherence to all Occupational Health and Safety (OHS) standards, including full insurance and regulatory compliance.",
        icon: Shield, // Shield is now defined
    },
    { 
        title: "Healthcare Environment Expertise", 
        description: "Use of specialized low-VOC and antimicrobial paints for patient safety and hygiene in hospitals and clinics.",
        icon: Ambulance,
    },
];

// --- Component Definition ---
export default function CommercialPaintingPage() {
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
                    <Building className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Expert Commercial Painting Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Specialized redecoration for office parks, shopping centers, and hospitals. Our priority is quality, safety, and zero disruption to your business operations.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Pain Points & Solutions */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: Addressing Management Concerns */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Your Business Cannot Afford Disruption. We Guarantee Smooth Operations.
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Facility Managers and building owners require a partner who is discreet, fast, and compliant. We coordinate every project to work around tenant schedules and high-traffic business hours.
                            </p>
                        </div>
                        
                        {/* 2. CORE DIFFERENTIATORS (Pain Points Solved) */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                What Commercial Clients Demand
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {CLIENT_PAIN_POINTS.map((point, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <point.icon className={cn("w-8 h-8 mb-3", SECONDARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{point.title}</h3>
                                        <p className="text-gray-700 text-sm">{point.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA and FINAL TRUST */}
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
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your On-Site Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get a comprehensive quote that factors in OHS compliance and flexible working hours.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}