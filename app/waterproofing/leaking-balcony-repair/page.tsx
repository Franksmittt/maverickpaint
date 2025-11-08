// app/waterproofing/leaking-balcony-repair/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Changed Tool to Wrench
import { Droplet, Wrench, CheckCircle, ArrowRight, Home } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Leaking Balcony Waterproofing & Repair | Under-Tile Specialists', // Primary Keyword
    description: 'Guaranteed repair for leaking balconies and patios in Johannesburg and Pretoria. We specialize in the multi-layer under-tile waterproofing process to ensure a permanent seal.',
    keywords: 'balcony waterproofing services Johannesburg, under-tile balcony waterproofing, leaking balcony repair cost, patio waterproofing specialist', // Key terms
};

// --- Technical Steps ---
const repairSteps = [
    { title: 'Tile and Screed Removal', description: 'Carefully remove existing tiles and the underlying, saturated screed to expose the bare concrete slab.' },
    { title: 'Substrate Preparation', description: 'The concrete slab is cleaned, ground, and defects are repaired, creating the perfect foundation for membrane adhesion.' },
    { title: 'Primer & Flexible Membrane', description: 'Application of a specialized primer followed by a flexible, reinforcing membrane (e.g., StretchSeal) across the entire slab and up the parapet walls.' },
    { title: 'Tile-Ready Coating', description: 'Application of a final cementitious coating (e.g., DampEnd) that bonds permanently to the membrane, providing maximum adhesion for the new tiles.' },
    { title: 'Final QA Inspection', description: 'The independent QA expert verifies the application process and film thickness before the final tiling begins.' },
];

// --- Component Definition ---
export default function LeakingBalconyPage() {
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
                    <Home className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Leaking Balcony Waterproofing & Repair
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        The definitive solution for under-tile leaks. We remove the old system and install a permanent, multi-layer membrane that guarantees a watertight patio or balcony.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Problem/Solution/Cost */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM & THE THESIS */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Permanent Solutions for Under-Tile Water Ingress
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Balcony leaks are often high-pain-point failures that damage underlying rooms and structures. We address both methods—exposed and under-tile—but specialize in the complex **under-tile solution**, which requires a technical, multi-layer approach to ensure tiles bond correctly and the seal is permanent.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                The correct process demands expertise to prevent the membrane from failing or debonding from the screed layer.
                            </p>
                        </div>
                        
                        {/* 2. THE SOLUTION: TECHNICAL PROCESS (Infographic Style) */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Our Technical 5-Step Under-Tile Waterproofing System
                            </h2>
                            <div className="space-y-6">
                                {repairSteps.map((step, index) => (
                                    <div key={index} className="flex space-x-4 border-l-4 border-[#5AD5E2] pl-4">
                                        <div className={cn("w-10 h-10 flex items-center justify-center rounded-full shrink-0", SECONDARY_COLOR, PRIMARY_COLOR_BG)}>
                                            <span className="font-extrabold text-white">{index + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className={cn("text-2xl font-semibold mb-1", PRIMARY_COLOR_TEXT)}>{step.title}</h3>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. COST & QA SECTION */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Why Balcony Repair Cost Requires On-Site Assessment
                            </h2>
                            
                            {/* Cost Explanation */}
                            <div className="mb-8">
                                <p className="text-gray-700">
                                    The cost to fix a leaking balcony is highly variable based on the extent of **screed damage** and the **underlying structure**. A simple price-per-meter is impossible. We require an on-site assessment to diagnose the extent of the damage and determine the correct, guaranteed repair methodology.
                                </p>
                            </div>

                            {/* Maverick QA Module Integration */}
                            <QAModule />
                            
                        </div>

                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Book Your Urgent Balcony Inspection</h3>
                            <p className="text-center text-gray-600 mb-6">
                                We will determine the precise cause of the leak and provide a guaranteed structural system quote.
                            </p>
                            
                            <ContactForm isHeroForm={false} />
                            
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}