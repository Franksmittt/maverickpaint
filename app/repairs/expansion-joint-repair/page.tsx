// app/repairs/expansion-joint-repair/page.tsx (Full Code - Expansion Joint Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Construction, Layers, CheckCircle, ArrowRight, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Expansion & Polyurethane Joint Repair Specialists | South Africa', // Primary Keyword
    description: 'Expert repair, sealing, and creation of expansion joints in concrete slabs and façades. We use specialized polyurethane systems to manage structural movement and ensure watertight integrity.',
    keywords: 'expansion joint repair South Africa, polyurethane joints, structural joint sealing, concrete joint creation', // Key technical niche terms
};

// --- Technical Steps ---
const repairSteps = [
    { title: 'Joint Diagnosis & Cleaning', description: 'Evaluate the joint’s required movement capability, remove all old, failed sealant, and mechanically clean the joint cavity.' },
    { title: 'Backer Rod Installation', description: 'Install a closed-cell backer rod to ensure the new sealant has the correct depth-to-width ratio, which is critical for proper flex and durability.' },
    { title: 'Primer Application', description: 'Apply the correct primer to ensure maximum, long-lasting adhesion between the joint sides and the new sealant material.' },
    { title: 'Polyurethane Sealant Application', description: 'Inject a high-performance, flexible polyurethane sealant (or other specified material) to create a guaranteed, watertight, and durable joint.' },
];

// --- Component Definition ---
export default function ExpansionJointPage() {
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
                    <Construction className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Expansion & Polyurethane Joint Repair
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We provide structural maintenance for joint failures. Our specialized sealing methods manage movement, prevent water ingress, and restore structural integrity.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Problem/Solution/Technical Proof */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM & THE THESIS */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Why Joint Integrity Is Critical to Structural Health
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Expansion joints are necessary structural breaks that allow concrete and buildings to expand and contract due to temperature changes. When the sealant fails, the joint becomes a direct entry point for water, leading to rebar corrosion, spalling, and costly structural failure.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                We are experts in both creating new joints and repairing failed polyurethane seals[cite: 363], ensuring the structure can move safely without leaking.
                            </p>
                        </div>
                        
                        {/* 2. THE SOLUTION: TECHNICAL PROCESS */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                The 4-Step Process for Guaranteed Joint Sealing
                            </h2>
                            <div className="space-y-6">
                                {repairSteps.map((step, index) => (
                                    <div key={index} className="flex space-x-4 border-l-4 border-[#A9D834] pl-4">
                                        <div className={cn("w-10 h-10 flex items-center justify-center rounded-full shrink-0", TERTIARY_COLOR, PRIMARY_COLOR_BG)}>
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

                        {/* 3. QA and Final CTA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Guaranteed Seal, Verified by Independent QA
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Joint Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Speak to a specialist about creating or repairing polyurethane and expansion joints.
                            </p>
                            
                            <ContactForm isHeroForm={false} />
                            
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}