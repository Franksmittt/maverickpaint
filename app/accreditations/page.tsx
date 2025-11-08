// app/accreditations/page.tsx (Full Code - Proof of Expertise Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Trophy, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; // Reusable QA Module

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Approved & Certified Applicators | Sika, Plascon, Marmoran & More', // Primary Keyword
    description: 'Maverick Painting is one of a select few applicators certified by Sika, a.b.e., Plascon, and Marmoran. We deliver quality guaranteed by the industry leaders.',
    keywords: 'approved applicator Sika, Plascon Preferred Applicator, Dulux Accredited Painter, Marmoran Master Applicator, certified waterproofing contractor', // Key terms [cite: 4890]
};

// --- Accreditation Data ---
const ACCREDITATIONS = [
    {
        name: "Plascon Preferred Applicator",
        logo: "/images/logos/plascon.png", // Placeholder for logo
        status: "Eligible for the Plascon 360° Partnership Pledge.",
        color: "text-red-600",
    },
    {
        name: "Dulux Accredited Painter",
        logo: "/images/logos/dulux.png", // Placeholder for logo
        status: "Certified and monitored by Dulux to maintain the highest standards.",
        color: "text-blue-600",
    },
    {
        name: "Sika Approved Contractor",
        logo: "/images/logos/sika.png", // Placeholder for logo
        status: "Certified for specialist concrete and waterproofing systems.",
        color: "text-orange-600",
    },
    {
        name: "a.b.e. Approved Waterproofing Contractor",
        logo: "/images/logos/abe.png", // Placeholder for logo
        status: "Expert status for a.b.e. construction chemicals and waterproofing products.",
        color: "text-green-600",
    },
    {
        name: "Marmoran Master Applicator",
        logo: "/images/logos/marmoran.png", // Placeholder for logo
        status: "Certified for decorative renders and textured wall finishes.",
        color: "text-yellow-600",
    },
];

// --- Component Definition ---
export default function AccreditationsPage() {
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
                    <Trophy className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Certified Applicators & Industry Approvals
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We are one of a select few contractors certified by the industry's premier manufacturers, guaranteeing our work meets the highest technical standards[cite: 4610].
                    </p>
                </div>
            </section>

            {/* Main Content Area: Accreditation Grid */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5">
                    
                    <h2 className={cn("text-4xl font-extrabold text-center mb-16", PRIMARY_COLOR_TEXT)}>
                        Technical Mastery, Verified by the Leaders
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {ACCREDITATIONS.map((acc, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:border-[#5AD5E2]">
                                
                                {/* Logo Placeholder (Requires image creation) */}
                                <div className="w-24 h-24 mb-4 bg-gray-100 flex items-center justify-center rounded-full border">
                                    <span className="text-xs font-semibold text-gray-500">Logo</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{acc.name}</h3>
                                <p className="text-lg text-gray-700 mb-4">{acc.status}</p>
                                
                                <div className="mt-auto">
                                    <p className={cn("text-sm font-semibold flex items-center space-x-2", acc.color)}>
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Official Partner Status</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA/QA Module */}
            <section className={cn("py-16", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5">
                    <h2 className={cn("text-4xl font-extrabold text-center mb-10", WHITE_TEXT)}>
                        Compliance + Verification = Guaranteed Workmanship
                    </h2>
                    <QAModule />
                </div>
            </section>
        </div>
    );
}