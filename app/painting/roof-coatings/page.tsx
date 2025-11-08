// app/painting/roof-coatings/page.tsx (Full Code - Roof Coatings Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Home, Zap, Layers, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; 
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Professional Roof Painting & Restoration | Alberton & Johannesburg', // Primary Keyword + Local Focus
    description: 'Expert roof painting and restoration services for tiled, galvanized, and concrete roofs. Full process includes high-pressure cleaning, defect repair, and application of durable, weather-resistant coatings.',
    keywords: 'roof painting Alberton, roof painting contractors, metal roof painting, tile roof painting, roof restoration services', // High-urgency and local keywords
};

// --- Restoration Steps ---
const restorationSteps = [
    { title: 'High-Pressure Cleaning', description: 'Thorough removal of all moss, lichen, and old, flaking paint to ensure a clean substrate for maximum adhesion.' },
    { title: 'Defect Identification & Repair', description: 'Repairing all leaks, structural defects, and ensuring roof sheets or tiles are correctly secured and sealed.' },
    { title: 'Primer & Preparation', description: 'Application of the correct primer (e.g., rust treatment for metal roofs) to ensure chemical bonding of the final coating.' },
    { title: 'Durable Top Coat Application', description: 'Application of two coats of weather-resistant, UV-stable coating, ensuring film thickness meets manufacturer specification.' },
];

// --- Component Definition ---
export default function RoofCoatingsPage() {
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
                        Professional Roof Painting & Restoration
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Specialized restoration for all roof types in Alberton and greater Johannesburg. We provide a guaranteed system that protects against the harsh Gauteng sun and storms.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Restoration Process & Local SEO */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE THESIS: Full Restoration */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                More Than Just a Coat of Paint: The Full Restoration Process
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                The failure of roof paint is almost always due to inadequate preparation or defect identification. Our process is a full restoration, starting with structural integrity and ending with a manufacturer-guaranteed protective coating.
                            </p>
                        </div>
                        
                        {/* 2. THE 4-STEP PROCESS */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Our Guaranteed 4-Step Roof Restoration System
                            </h2>
                            <div className="space-y-6">
                                {restorationSteps.map((step, index) => (
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

                        {/* 3. LOCAL SEO INTEGRATION */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Local Expertise: Trusted Roof Painting in Alberton & JHB
                            </h2>
                            <p className="text-gray-700 mb-4">
                                We actively serve high-demand local areas, including **Alberton, New Redruth, Meyersdal, and the Alrode industrial area**[cite: 4194]. Our local presence ensures quick response times and detailed knowledge of the common roof issues specific to these Gauteng suburbs.
                            </p>
                            <Link href="/contact" passHref>
                                <Button
                                    variant="outline"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between border-[#5AD5E2] text-[#5AD5E2] hover:bg-[#5AD5E2] hover:text-white transition-colors')}
                                >
                                    Get Your Alberton Roof Quote <MapPin className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule a Roof Inspection</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Start the restoration process with a full defect assessment and guaranteed system specification.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}