// app/coatings/hygienic-food-grade-flooring/page.tsx (Full Code - Hygienic Flooring Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PaintBucket, Zap, CheckCircle, ArrowRight, Thermometer, FlaskConical, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Hygienic Floor Coatings for Dairies, Abattoirs & Food Manufacturing', // Primary Keyword
    description: 'Specialist polyurethane screeds and epoxy flooring for food processing plants. Systems are chemical-resistant, seamless, and endure thermal shock from hot water washdowns.',
    keywords: 'hygienic floor coatings, food manufacturing plant flooring, coatings for dairies and abattoirs, chemical resistant flooring South Africa, Sika Ucrete applicator', // High-value niche keywords
};

// --- Performance Criteria ---
const CRITICAL_CRITERIA = [
    { title: "Thermal Shock Resistance", description: "Must endure daily hot water (90°C) washdowns without cracking or delaminating—a major failure point for standard epoxy.", icon: Thermometer },
    { title: "Chemical Resistance", description: "Impervious to aggressive cleaning agents, fats, acids, and alkalis used in daily food processing sanitation.", icon: FlaskConical },
    { title: "Seamless & Hygienic", description: "A fully monolithic system with no grout lines to prevent bacterial growth and comply with strict health regulations.", icon: CheckCircle },
    { title: "Slip & Impact Resistance", description: "Provides a textured, safe surface for worker safety while withstanding heavy equipment and impact from dropped materials.", icon: Snowflake },
];

// --- Component Definition ---
export default function HygienicFlooringPage() {
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
                        Hygienic Floor Coatings for Food Manufacturing
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Specialist systems for dairies, abattoirs, and plants. We apply polyurethane screeds designed to meet critical thermal shock and hygiene compliance standards.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Technical Criteria */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM & THE THESIS */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Why Standard Epoxy Fails in Food Processing Environments
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The **thermal shock** from daily hot water washdowns is the primary cause of flooring failure in dairies and abattoirs. Standard epoxy cracks and delaminates rapidly. We specify and apply specialized systems, like **Polyurethane Screeds (PU)**, that offer the necessary flexibility to withstand these extremes.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                The right system ensures compliance, worker safety, and prevents costly contamination risks.
                            </p>
                        </div>
                        
                        {/* 2. CRITICAL PERFORMANCE CRITERIA */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                4 Critical Performance Criteria Your Floor Must Meet
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {CRITICAL_CRITERIA.map((criteria, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <criteria.icon className={cn("w-10 h-10 mb-4", SECONDARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{criteria.title}</h3>
                                        <p className="text-gray-700">{criteria.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. QA and Final CTA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Certified Application for Guaranteed Compliance
                            </h2>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Request a Compliance Consultation</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Speak to an expert about thermal shock, chemical resistance, and your specific plant environment.
                            </p>
                            
                            <ContactForm isHeroForm={false} />
                            
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}