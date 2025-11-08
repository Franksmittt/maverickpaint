// app/blog/epoxy-vs-polyurethane-flooring/page.tsx (Full Code - Technical Comparison Article)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Layers, Zap, CheckCircle, ArrowRight, Thermometer, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Epoxy vs. Polyurethane Flooring: A Technical Guide for Factory Owners', // Primary Keyword
    description: 'An objective guide comparing industrial epoxy coatings (compressive strength) with polyurethane screeds (thermal shock resistance). Essential reading for plant managers.', //
    keywords: 'epoxy vs polyurethane flooring, industrial floor coatings guide, thermal shock resistance flooring, chemical resistant flooring',
};

// --- Comparison Data ---
const COMPARISON_DATA = [
    {
        feature: "Flexibility & Impact Resistance",
        epoxy: "Rigid; susceptible to cracking under heavy impact or structural movement.",
        pu: "Highly flexible; ideal for high-impact zones and managing temperature-induced structural movement.",
        winner: "Polyurethane (PU)",
    },
    {
        feature: "Thermal Shock Resistance",
        epoxy: "Poor. Fails quickly (cracks/delaminates) under daily hot water washdowns (critical for food processing).",
        pu: "Excellent. Can handle wide temperature swings (e.g., 90°C washdowns) without failure.",
        winner: "Polyurethane (PU)",
    },
    {
        feature: "Compressive Strength",
        epoxy: "Excellent. Ideal for heavy loads, forklifts, and static machinery.",
        pu: "Good. Suitable for heavy traffic, but slightly lower compressive strength than rigid epoxy.",
        winner: "Epoxy",
    },
    {
        feature: "UV Stability (Yellowing)",
        epoxy: "Poor. Will yellow rapidly in direct sunlight (exterior or skylight areas).",
        pu: "Excellent. Highly UV stable and will maintain color integrity over time.",
        winner: "Polyurethane (PU)",
    },
];

// --- Component Definition ---
export default function FlooringComparisonPage() {
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
                    <Wrench className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Epoxy vs. Polyurethane Flooring: A Technical Guide
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        An objective, technical comparison of the two leading industrial floor coating systems for plant managers and engineers.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. THE THESIS */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Choosing the Right System for Your Operations
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                You shouldn't have to choose blindly. The right system is determined entirely by your operational environment—is your biggest threat thermal shock, heavy machinery, or chemical exposure? Our objective analysis helps you spec the perfect floor.
                            </p>
                        </div>
                        
                        {/* 2. COMPARISON TABLE */}
                        <div>
                            <h3 className={cn("text-3xl font-bold mb-4", PRIMARY_COLOR_TEXT)}>
                                Head-to-Head Comparison
                            </h3>
                            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Epoxy (Rigid)</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Polyurethane (Flexible)</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {COMPARISON_DATA.map((item, index) => (
                                            <tr key={index} className={cn(item.winner.includes('Polyurethane') ? 'bg-blue-50/50' : '')}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: PRIMARY_COLOR_TEXT }}>{item.feature}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{item.epoxy}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{item.pu}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold" style={{ color: item.winner.includes('Polyurethane') ? SECONDARY_COLOR : TERTIARY_COLOR }}>{item.winner}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. CONCLUSION AND CONTACT PUSH */}
                        <div className="pt-10 border-t border-gray-200">
                            <h3 className={cn("text-3xl font-bold mb-4", PRIMARY_COLOR_TEXT)}>
                                Conclusion: The Right System Requires a Technical Assessment
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                We are certified applicators for both systems. The system we recommend is purely based on the **objective needs of your plant**—not our preference. Contact us for a full assessment of your thermal, chemical, and load requirements.
                            </p>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Plant Floor Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Speak to an expert who understands thermal shock and chemical compliance.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Related Services</h3>
                            <ul className="space-y-2">
                                <li><Link href="/coatings/hygienic-food-grade-flooring" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Hygienic Food-Grade Flooring</Link></li>
                                <li><Link href="/painting/industrial-painting" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Industrial Protective Coatings</Link></li>
                                <li><Link href="/our-process-independent-qa" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Independent QA Verification</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}