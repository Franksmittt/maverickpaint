// app/waterproofing/flat-roof-waterproofing/page.tsx (Full Code - Flat Roof Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Droplet, Layers, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Flat Concrete Roof Waterproofing & Repair | Alberton & JHB', // Primary Keyword [cite: 188]
    description: 'Expert application of Liquid Applied Membranes (LAM) and Torch-On systems for flat concrete roofs and slabs. We specify the correct system for guaranteed, long-term integrity.', // [cite: 194]
    keywords: 'flat roof waterproofing Alberton, concrete roof waterproofing South Africa, liquid applied membrane, roof slab waterproofing', // Technical comparison keywords [cite: 198]
};

// --- Technical Systems ---
const WATERPROOFING_SYSTEMS = [
    { 
        title: "Liquid Applied Membranes (LAM)", 
        details: "Modern, seamless solutions like polyurethanes or liquid rubbers. Noted for flexibility, UV resistance, and creating a monolithic (seamless) finish, ideal for complex detailing.", // [cite: 194]
        key_benefit: "Seamless Monolithic Finish",
        color: "text-[#A9D834]", // Tertiary Green
    },
    { 
        title: "Bituminous / Torch-On Systems", 
        details: "The traditional, multi-layer membrane system. Highly effective when installed correctly, it requires specialized heating equipment and expertise for sealing laps and joints.", // [cite: 193]
        key_benefit: "Durable Traditional Barrier",
        color: "text-[#5AD5E2]", // Secondary Blue
    },
    { 
        title: "Cementitious Slurry Systems", 
        details: "A cement-based system that bonds permanently with the concrete, often used for negative side (internal) waterproofing or when a strong bond to the substrate is essential.", // [cite: 196]
        key_benefit: "Permanent Substrate Bond",
        color: "text-red-500", // Accent color
    },
];

// --- Component Definition ---
export default function FlatRoofWaterproofingPage() {
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
                    <Droplet className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Flat Concrete Roof Waterproofing & Repair
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We are technical experts in high-stakes flat roof slabs. We assess the substrate and specify the **correct system**—Liquid Applied Membrane or Torch-On—for a guaranteed seal. [cite: 197]
                    </p>
                </div>
            </section>

            {/* Main Content Area: System Comparison */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: No One-Size-Fits-All */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Don't Accept a One-Size-Fits-All Waterproofing Solution
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The correct waterproofing system depends on the roof's age, substrate, and complexity of penetrations. We provide objective comparisons between the most reliable systems, ensuring the one we apply is best suited for your specific asset and budget. [cite: 192, 197]
                            </p>
                        </div>
                        
                        {/* 2. THE THREE SYSTEMS (Comparison Grid) */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Technical Comparison of Waterproofing Systems
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {WATERPROOFING_SYSTEMS.map((system, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <Layers className={cn("w-8 h-8 mb-3", system.color)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{system.title}</h3>
                                        <p className="text-gray-700 mb-4">{system.details}</p>
                                        <p className={cn("font-semibold flex items-center space-x-2 text-sm", system.color)}>
                                            <CheckCircle className="w-4 h-4" />
                                            <span>{system.key_benefit}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA and Final CTA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Guaranteed Application, Verified by Independent QA
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Roof Audit</h3>
                            <p className="text-center text-gray-600 mb-6">
                                We'll inspect your slab and recommend the guaranteed system for your asset.
                            </p>
                            
                            <ContactForm isHeroForm={false} />
                            
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}