// app/repairs/concrete-cancer-spalling-repair/page.tsx (Full Code - Structural Repair Silo Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wrench, Zap, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Concrete Cancer & Spalling Repair Services | Johannesburg', // Primary Keyword [cite: 236]
    description: 'Expert structural repair for concrete cancer, spalling, and corroding rebar in Gauteng. We provide a guaranteed, turn-key solution from defect identification to protective coating.',
    keywords: 'concrete cancer repair Johannesburg [cite: 247], spalling concrete repair Gauteng [cite: 247], rebar repair, structural repairs Johannesburg [cite: 233]',
};

// --- Component Definition ---
export default function SpallingRepairPage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const PRIMARY_COLOR_TEXT = 'text-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const SECONDARY_COLOR = 'text-[#5AD5E2]';
    
    // Technical steps for the repair process 
    const repairSteps = [
        { title: 'Diagnosis & Breakout', description: 'Break out all unsound and delaminated concrete until a stable, healthy substrate is exposed[cite: 240].' },
        { title: 'Rebar Treatment', description: 'Expose the reinforcing steel (rebar), clean it completely, and apply a rust inhibitor and protective primer[cite: 241, 242].' },
        { title: 'Profile Reinstatement', description: 'Re-establish the profile using a specialized high build shrinkage compensated repair mortar[cite: 243].' },
        { title: 'Protective Coating', description: 'Apply a final protective and waterproof coating system to prevent moisture ingress and recurrence of spalling[cite: 244].' },
    ];
    
    // Custom CTA style for the form in the sidebar
    const CTA_BUTTON_STYLE = cn('w-full h-12 text-lg font-bold', TERTIARY_COLOR, 'bg-[#121111] hover:bg-[#2C2C2C] border border-[#A9D834]');

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <Wrench className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", SECONDARY_COLOR)}>
                        Concrete Cancer & Spalling Repair Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
                        We don't just paint over problems; we **solve them from the structure up**[cite: 13]. Get a guaranteed, technical solution for corroding rebar and damaged concrete in Gauteng.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Problem/Solution/Cost */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                What is Concrete Cancer and Why Does it Fail?
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                **Concrete Cancer (Spalling)** [cite: 237, 32] is not a cosmetic issue; it's a structural failure where the reinforcing steel (rebar) inside the concrete corrodes due to moisture ingress[cite: 231]. As the steel rusts, it expands up to **seven times** its original volume, forcing the concrete slab to crack and spall off[cite: 237, 33].
                            </p>
                            <p className="text-lg text-gray-700">
                                Attempting to cover spalling with plaster or paint without addressing the corroding rebar will result in **immediate failure**[cite: 231]. Our service eliminates the cause of the failure before any finish is applied.
                            </p>
                        </div>
                        
                        {/* 2. THE SOLUTION: TECHNICAL PROCESS (Infographic Style) */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Our Guaranteed 4-Step Technical Repair Process
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

                        {/* 3. COST & QA SECTION */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Addressing Cost and Verifiable Quality
                            </h2>
                            
                            {/* Cost Explanation */}
                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cost to Fix Spalling Concrete [cite: 247]</h3>
                                <p className="text-gray-700">
                                    The cost varies widely based on the **extent of the damage**, ranging from minor patches (under R2,500) to extensive structural restoration (R50,000 or more)[cite: 245]. Providing a simple price-per-meter is irresponsible.
                                </p>
                                <p className="text-gray-700 mt-2 font-semibold">
                                    A precise quote requires an **on-site assessment** to determine the correct repair methodology[cite: 245, 210].
                                </p>
                            </div>

                            {/* Maverick QA Module Integration */}
                            <QAModule />
                            
                        </div>

                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6">Schedule Your Inspection</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Our structural specialists will assess the extent of the damage on site.
                            </p>
                            
                            {/* Custom Contact Form for Sidebar */}
                            <ContactForm isHeroForm={false} />
                            
                            {/* Quick Link */}
                            <div className="mt-6 text-center">
                                <Link href="/our-process-independent-qa" className={cn("text-sm font-semibold", SECONDARY_COLOR)}>
                                    Learn More About Our Guarantees &gt;
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}