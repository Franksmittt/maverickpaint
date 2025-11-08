// app/blog/best-roof-paint-gauteng/page.tsx (Full Code - Roof Paint Article)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Home, Zap, Layers, ArrowRight, Sun, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Comparison Data ---
const COATING_TYPES = [
    {
        name: "Standard Acrylic Coatings",
        pros: "Good color retention, cost-effective, standard for most tiled roofs.",
        cons: "Lower flexibility, susceptible to cracking and blistering in extreme UV/temperature cycles.",
        use: "General Residential Roofs.",
        color: "text-[#5AD5E2]",
    },
    {
        name: "Elastomeric/Liquid Rubber",
        pros: "Exceptional flexibility, designed to stretch and bridge hairline cracks caused by thermal movement.",
        cons: "Higher cost, requires specialized application and expert surface preparation.",
        use: "Flat Concrete Roofs & High-Movement Structures.",
        color: "text-[#A9D834]",
    },
    {
        name: "Bituminous (for Waterproofing)",
        pros: "Excellent moisture barrier, primarily used for sealing and waterproofing under Torch-On systems.",
        cons: "Poor UV stability; must be covered or painted over to prevent degradation.",
        use: "Waterproofing Basecoats.",
        color: "text-red-500",
    },
];

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'The Best Roof Paint for Gauteng\'s Harsh Sun and Storms (Our 2025 Guide)', // Primary Keyword
    description: 'A technical guide comparing acrylic vs. elastomeric roof coatings for tiled, metal, and concrete roofs in the Gauteng climate. We help you choose the guaranteed system.', //
    keywords: 'best roof paint for Gauteng weather, acrylic vs bituminous roof paint, how to weather proof a roof South Africa, UV stable roof coating',
};

// --- Component Definition ---
export default function RoofPaintGuidePage() {
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
                    <Sun className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        The Best Roof Paint for Gauteng's Harsh Climate
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        A technical guide to selecting UV-stable and flexible coatings for tiled, metal, and concrete roofs, ensuring maximum defense against sun and storms.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. TECHNICAL FOCUS */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                The Problem: Thermal Shock & UV Degradation
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Gauteng roofs endure extreme thermal cycling: intense summer heat (UV degradation) followed by rapid temperature drops during storms. This constant expansion and contraction demands a highly flexible, UV-stable coating—not a cheap acrylic that will crack and blister.
                            </p>
                        </div>
                        
                        {/* 2. COATING COMPARISON */}
                        <div>
                            <h3 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Coating Comparison: Choosing the Right System
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {COATING_TYPES.map((type, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{type.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2">**Best Use:** {type.use}</p>
                                        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                                            <li>Pros: {type.pros}</li>
                                            <li>Cons: {type.cons}</li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. CONCLUSION AND CONTACT PUSH */}
                        <div className="pt-10 border-t border-gray-200">
                            <h3 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Conclusion: We Specify the Correct System
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                We are approved applicators for the leading manufacturers (Plascon, Dulux, Sika). Our **Independent QA** process verifies that the coating system specified is correct for your roof type and that the application meets technical film thickness requirements.
                            </p>
                            <Link href="/painting/roof-coatings" passHref>
                                <Button
                                    variant="default"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between bg-[#121111] hover:bg-gray-800 text-[#5AD5E2] border border-[#5AD5E2]')}
                                >
                                    Get Your Guaranteed Roof Restoration Quote <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Ready for a Quote?</h3>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Other Problems</h3>
                            <ul className="space-y-2">
                                <li><Link href="/waterproofing/flat-roof-waterproofing" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Flat Roof Waterproofing</Link></li>
                                <li><Link href="/repairs/concrete-cancer-spalling-repair" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Structural Repair Costs</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}