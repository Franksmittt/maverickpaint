// app/damp-proofing/rising-damp-treatment/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Changed InjectionSite to Syringe
import { Droplet, Syringe, CheckCircle, ArrowRight, TrendingDown } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Rising Damp Treatment & Chemical DPC Injection | Gauteng', // Primary Keyword
    description: 'Permanent rising damp treatment using chemical DPC injection to create a horizontal waterproof barrier. Expert diagnosis and guaranteed solution across Johannesburg and Pretoria.',
    keywords: 'rising damp treatment Gauteng, chemical DPC injection, damp proof course, rising damp specialists, damp diagnosis', // Key technical and urgency terms
};

// --- Technical Steps ---
const injectionSteps = [
    { title: 'Damp Diagnosis', description: 'Begin with an expert assessment to confirm the damp is rising damp (and not penetrating or lateral damp, which require different fixes).' },
    { title: 'Precision Drilling', description: 'Drill precise holes into the mortar course at specific intervals along the affected wall.' },
    { title: 'DPC Injection', description: 'High-pressure injection of a specialized DPC cream or liquid into the mortar, which diffuses to form a new, permanent waterproof barrier.' },
    { title: 'Plaster Restoration', description: 'Remove and replace any contaminated, salt-affected plaster, and apply specialized replastering systems to allow the wall to dry fully.' },
];

// --- Component Definition ---
export default function RisingDampPage() {
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
                    <Syringe className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} /> {/* FIX: Use Syringe icon */}
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Rising Damp Treatment & Chemical DPC Injection
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We eliminate rising damp at its source using a guaranteed chemical DPC injection method, providing a permanent solution that stops upward moisture migration.
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
                                Stop the Upward Moisture: Why Plastering Over Damp Fails
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Rising damp is moisture absorbed from the ground through capillary action. It carries ground salts that contaminate plaster and cause paint to blister, flake, and crumble. Covering it with a 'waterproof' paint is a temporary fix that guarantees failure.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold">
                                The **correct solution** is to create a new damp proof course (DPC) at the base of the wall using chemical injection, stopping the capillary action permanently.
                            </p>
                        </div>
                        
                        {/* 2. THE SOLUTION: TECHNICAL PROCESS (DPC Injection) */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Our Guaranteed 4-Step DPC Injection Process
                            </h2>
                            <div className="space-y-6">
                                {injectionSteps.map((step, index) => (
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

                        {/* 3. DIAGNOSIS AND WARNING */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Warning: Damp is Often Misdiagnosed
                            </h2>
                            <p className="text-gray-700 font-semibold">
                                An underqualified contractor may misdiagnose penetrating damp (from a roof or burst pipe) as rising damp. Treating the wrong source will not solve the problem.
                            </p>
                            <p className="text-gray-700 mt-2">
                                Our initial assessment includes a **full moisture profile** to guarantee we are treating the correct source of water ingress—whether it requires chemical DPC, membrane application, or structural repair.
                            </p>
                            <div className="mt-8">
                                <Link href="/damp-proofing-services" passHref>
                                    <Button
                                        variant="outline"
                                        className={cn('h-12 text-md font-bold w-full md:w-auto justify-between border-[#5AD5E2] text-[#5AD5E2] hover:bg-[#5AD5E2] hover:text-white transition-colors')}
                                    >
                                        Compare Damp Types: Lateral vs. Penetrating <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Book Your Damp Diagnosis & Quote</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get an expert to confirm the source of the moisture and quote the permanent DPC injection solution.
                            </p>
                            
                            <ContactForm isHeroForm={false} />
                            
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}