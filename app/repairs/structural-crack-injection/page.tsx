// app/repairs/structural-crack-injection/page.tsx (Full Code - Structural Crack Injection Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Layers, Zap, CheckCircle, ArrowRight, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Structural Crack Injection: Epoxy & Polyurethane | Gauteng', // Primary Keyword [cite: 251]
    description: 'Specialist crack repair using high-pressure injection. Epoxy for structural integrity and Polyurethane for watertight seals against water ingress. Serving Johannesburg and Pretoria.', // [cite: 256, 258]
    keywords: 'structural crack repair Johannesburg, epoxy injection for structural cracks, polyurethane injection crack repair, movement crack repair', // Key terms [cite: 261]
};

// --- Component Data ---
const injectionTypes = [
    { 
        type: "Epoxy Injection (Structural Repair)", 
        purpose: "Glues the Concrete Back Together", 
        details: "A low-viscosity resin is injected under high pressure to fill cracks, hardening to create a **stronger-than-concrete structural bond**. This is used when the load-bearing capacity of the concrete must be restored.", // [cite: 256]
        icon: Layers,
        color: 'text-[#5AD5E2]', // Secondary Color
        key_benefit: "Restores Structural Integrity",
    },
    { 
        type: "Polyurethane (PU) Injection (Waterproofing)", 
        purpose: "Creates a Flexible Watertight Seal", 
        details: "The PU resin reacts with water and expands, creating a **flexible, watertight seal** that securely seals leaks and prevents future water ingress due to movement. Critical for basements and tunnels.", // [cite: 258, 259]
        icon: Zap,
        color: 'text-[#A9D834]', // Tertiary Color
        key_benefit: "Permanent Watertight Seal",
    },
];

// --- Component Definition ---
export default function CrackInjectionPage() {
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
                    <Layers className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Structural Crack Injection Specialists
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Don't use filler. We use precision high-pressure injection to determine the cause of the crack and use the correct system—Epoxy or Polyurethane—to provide a guaranteed fix. [cite: 253, 254]
                    </p>
                </div>
            </section>

            {/* Main Content Area: Technical Differentiation */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM & THESIS */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                The Crucial Difference Between Structural and Waterproofing Cracks
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The vast majority of contractors use general fillers that fail quickly. We specialize in diagnosing the crack type (structural, movement, or hairline) [cite: 252] and using the correct high-pressure injection method for **guaranteed long-term performance**.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                Our technical expertise is the difference between a temporary patch and permanent structural stability. 
                            </p>
                        </div>
                        
                        {/* 2. THE TWO SOLUTIONS (Comparison Cards) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {injectionTypes.map((type, index) => (
                                <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                    <type.icon className={cn("w-10 h-10 mb-4", type.color)} />
                                    <h3 className="text-2xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{type.type}</h3>
                                    <p className="text-lg text-gray-800 font-semibold mb-4">{type.purpose}</p>
                                    <p className="text-gray-700">{type.details}</p>
                                    <div className="mt-4 pt-4 border-t border-gray-200">
                                        <p className="flex items-center space-x-2 font-bold" style={{ color: PRIMARY_COLOR_TEXT }}>
                                            <CheckCircle className={cn("w-5 h-5", type.color)} />
                                            <span>Key Benefit: {type.key_benefit}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 3. QA and Final CTA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Verification: Why Our Injection Never Fails
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Book Your Defect Diagnosis</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Ensure the correct system is used—Epoxy or Polyurethane—for your specific structural issue.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}