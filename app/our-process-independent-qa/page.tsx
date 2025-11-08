// app/our-process-independent-qa/page.tsx (Full Corrected Code - Variable Naming Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { ShieldCheck, ArrowRight, XCircle, FileText, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Independent Quality Assurance Process | New Standard in Contracting', // Primary Keyword
    description: 'Learn why our third-party quality control process eliminates project risk, prevents disputes, and guarantees verifiable proof that work meets manufacturer specifications and standards.',
    keywords: 'independent quality assurance construction, third-party quality control painting, verifiable proof of quality, risk-free guarantee', // Key terms
};

// --- Component Definition ---
export default function IndependentQAPage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary Black Background
    const PRIMARY_COLOR_TEXT = 'text-[#121111]'; // Primary Black Text
    const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green Text
    const TERTIARY_COLOR_BG = 'bg-[#A9D834]'; // FIX: Defined Tertiary Green Background
    const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue Text
    const WHITE_TEXT = 'text-white';
    
    const problemPoints = [
        { title: "In-House QC is Biased", description: "A contractor checking their own work introduces a clear conflict of interest—their incentive is speed, not identifying costly defects." },
        { title: "Manufacturer Guarantees are Limited", description: "Manufacturer warranties typically guarantee the product, not the application. Failures are often blamed on 'incorrect installation,' leaving the client with no recourse." },
    ];

    const qaSteps = [
        { title: "On-Site Assessment & Specification", description: "Dedicated Project Manager conducts the initial assessment and determines the substrate-specific, guaranteed coating system required." },
        { title: "Third-Party Engagement", description: "A trusted, independent quality assurance company is engaged to oversee the process from start to finish." },
        { title: "Continuous Inspections", description: "The independent body conducts application inspections at every critical stage (e.g., film thickness, surface preparation, primer application)." },
        { title: "Bi-Weekly Reporting", description: "You receive bi-weekly progress and substrate reports, providing a complete, recorded history and verifiable proof of quality." },
    ];

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-24 md:py-32", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <ShieldCheck className={cn("w-20 h-20 mx-auto mb-6", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-7xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Our Independent Quality Assurance Process
                    </h1>
                    <p className="mt-4 text-2xl text-gray-300 max-w-4xl mx-auto">
                        The **Gold Standard** in contracting: objective, third-party verification that guarantees quality and eliminates the risk of costly future disputes.
                    </p>
                </div>
            </section>

            {/* Section 1: The Problem (Why Traditional Guarantees Fail) */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-5">
                    <h2 className={cn("text-4xl font-extrabold text-center mb-12", PRIMARY_COLOR_TEXT)}>
                        Why Traditional Contractor Guarantees Fail
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {problemPoints.map((point, index) => (
                            <div key={index} className="p-6 border border-red-300 rounded-lg bg-white shadow-md">
                                <XCircle className="w-6 h-6 text-red-500 mb-3" />
                                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                                <p className="text-gray-700">{point.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: The Maverick Solution (The 4-Step Process) */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5">
                    <div className="max-w-6xl mx-auto">
                        <h2 className={cn("text-4xl font-extrabold text-center mb-4", PRIMARY_COLOR_TEXT)}>
                            The Verifiable 4-Step Maverick QA Solution
                        </h2>
                        <p className="text-xl text-gray-600 text-center mb-16">
                            We introduce an objective, third-party expert whose role is to verify the **process**, not just the result.
                        </p>

                        <div className="space-y-10">
                            {qaSteps.map((step, index) => (
                                <div key={index} className={cn("flex items-start space-x-6 p-6 rounded-lg", index % 2 === 0 ? 'bg-gray-100' : 'bg-white')}>
                                    <div 
                                        // FIX: Corrected TERTIARY_COLOR_BG to use the defined variable
                                        className={cn("w-12 h-12 flex items-center justify-center rounded-full font-extrabold text-xl", TERTIARY_COLOR_BG, PRIMARY_COLOR_TEXT === 'text-[#121111]' ? WHITE_TEXT : PRIMARY_COLOR_TEXT)}
                                    >
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className={cn("text-3xl font-bold mb-2", PRIMARY_COLOR_TEXT)}>{step.title}</h3>
                                        <p className="text-lg text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA to Contact */}
            <section className={cn("py-16 md:py-20", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <h3 className={cn("text-3xl sm:text-4xl font-extrabold mb-4", SECONDARY_COLOR)}>
                        De-Risk Your Next Multi-Million Rand Asset Project
                    </h3>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        If you are a facility manager or body corporate trustee, the Independent QA process is your single most powerful selling point for peace of mind.
                    </p>
                    <Link href="/contact" passHref>
                        <Button
                            size="xl"
                            // FIX: Corrected TERTIARY_COLOR_BG to use the defined variable
                            className={cn('text-lg font-bold px-10 h-14 rounded-lg shadow-2xl', TERTIARY_COLOR_BG, "hover:bg-[#A9D834]/80 text-[#121111]")}
                        >
                            Schedule Your Free Technical Assessment
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}