// app/painting/body-corporate-painting/page.tsx (Full Code - Body Corporate Cluster Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Home, Users, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; 
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Body Corporate & Sectional Title Painting Specialists | Johannesburg', // Primary Keyword [cite: 213, 219]
    description: 'Specialists in large-scale sectional title painting. We guarantee transparency and peace of mind for all trustees through structured communication and Independent Quality Assurance.',
    keywords: 'body corporate painting services Johannesburg, sectional title painting specialists, complex redecoration, property manager painters', // Key management keywords [cite: 219]
};

// --- Stakeholder Concerns ---
const STAKEHOLDER_CONCERNS = [
    { 
        title: "Logistical Complexity", 
        description: "Managing access, scheduling, and minimizing disruption for hundreds of residents across the complex.",
        icon: Home,
    },
    { 
        title: "Financial Transparency", 
        description: "Ensuring every cent of the levied funds is accounted for and spent on verifiable, high-quality workmanship.",
        icon: Users,
    },
    { 
        title: "Communication Overhead", 
        description: "Providing clear, structured communication updates to trustees, managers, and residents without constant intervention.",
        icon: MessageSquare,
    },
];

// --- Component Definition ---
export default function BodyCorporatePaintingPage() {
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
                    <Home className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Body Corporate & Sectional Title Painting
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Your partner for large-scale residential redecoration. We manage complexity and guarantee peace of mind for every trustee and resident involved.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Stakeholder Management & USP */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* 1. THE PROBLEM: Complexity and Stakeholders */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Addressing the Complexity of Multi-Stakeholder Projects
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Body corporate redecoration is a **COMPLEX operation**[cite: 215]. It involves managing levies, coordinating access, and ensuring dozens of residents are minimally disturbed. Our structured approach minimizes logistical headaches for property managers and trustees[cite: 217].
                            </p>
                        </div>
                        
                        {/* 2. CORE CONCERNS ADDRESSED */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Trustee & Property Manager Pain Points
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {STAKEHOLDER_CONCERNS.map((concern, index) => (
                                    <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                        <concern.icon className={cn("w-8 h-8 mb-3", TERTIARY_COLOR)} />
                                        <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{concern.title}</h3>
                                        <p className="text-gray-700 text-sm">{concern.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. THE KEY DIFFERENTIATOR: INDEPENDENT QA */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                The Ultimate Peace of Mind for All Trustees
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Our **Independent QA Process** provides ultimate transparency and peace of mind for every stakeholder. The 5- or 10-year guarantee is based on **verifiable, third-party-inspected quality**, removing all ambiguity from the project.
                            </p>
                            <QAModule />
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Request a Detailed Specification & Quote</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Start the process with a full site assessment and our structured communication plan.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}