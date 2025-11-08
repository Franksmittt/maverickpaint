// app/repairs/plaster-repair/page.tsx (Full Code - Plaster Repair Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wrench, Layers, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Expert Plaster Repair & Substrate Preparation | Johannesburg', // Primary Keyword [cite: 233]
    description: 'Specialist repair for internal and external plaster defects, hairline cracks, and structural movement cracks. We guarantee a flawless substrate before any coating application.', // [cite: 62]
    keywords: 'plaster repair Johannesburg, hairline crack repair, movement crack repair, substrate preparation specialists, plastering contractors', // Key preparation keywords
};

// --- Repair Types ---
const REPAIR_TYPES = [
    { 
        title: "Movement Cracks", 
        description: "Diagnosing cracks caused by natural building expansion and sealing them using flexible fillers before reinstatement.", // [cite: 578]
        icon: TrendingUp,
    },
    { 
        title: "Hairline Cracks", 
        description: "Sealing superficial cracks with specialist fine fillers to ensure they do not 'telegraph' through the final coating system.", // [cite: 549]
        icon: Layers,
    },
    { 
        title: "General Plaster Damage", 
        description: "Repairing deterioration caused by water ingress, salt contamination, or physical impact, restoring a smooth, sound surface.", // [cite: 62]
        icon: Wrench,
    },
];

// --- Component Definition ---
export default function PlasterRepairPage() {
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
                    <Wrench className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Plaster Repair & Substrate Preparation Specialists
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We provide technical repair for all plaster defects. The quality of the final coating is entirely dependent on the quality of the substrate beneath it.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Problem/Solution/Technical Proof */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: Flawless Substrate */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                The Foundation of Quality: Flawless Plaster, Guaranteed
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                A protective or decorative coating system is only as strong as the plaster substrate it sits on. Ignoring even minor cracks guarantees that the paint will fail prematurely. Our repair process ensures maximum adhesion and structural stability before the first drop of paint is applied.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                Our turn-key service includes both the structural fix and the final cosmetic reinstatement. [cite: 231]
                            </p>
                        </div>
                        
                        {/* 2. CORE REPAIR TYPES */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Technical Plaster Repair Focus Areas
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {REPAIR_TYPES.map((type, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <type.icon className={cn("w-8 h-8 mb-3", TERTIARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{type.title}</h3>
                                        <p className="text-gray-700 text-sm">{type.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA and Final CTA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Plaster Repair Quality Verified by Independent Inspection
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Substrate Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get an inspection to identify underlying plaster and structural defects before painting.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}