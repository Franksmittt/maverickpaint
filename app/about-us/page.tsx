// app/about-us/page.tsx (Full Code - About Us Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Users, Shield, Wrench, Trophy, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; 

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'About Maverick Painting | Owner-Supervised & Safety Compliant', // Primary Keyword
    description: 'Maverick Painting was established in 2004. Our management team has over 50 years of experience, ensuring daily owner supervision, verifiable safety, and guaranteed quality workmanship.',
    keywords: 'owner supervised painting services Gauteng, owner managed painting contractors Johannesburg, painting company safety record, established painting contractor', // Trust and expertise keywords
};

// --- Value Propositions ---
const VALUE_PROPOSITIONS = [
    { 
        title: "50+ Years Combined Experience", 
        description: "Our management team provides unmatched expertise in coating application solutions for South Africa's largest developers.",
        icon: Trophy,
        color: "text-[#A9D834]",
    },
    { 
        title: "Owner Supervised Daily", 
        description: "All projects receive daily owner supervision, ensuring hands-on quality control and commitment to the final result.",
        icon: Clock,
        color: "text-[#5AD5E2]",
    },
    { 
        title: "Verifiable Safety & OHS", 
        description: "Strong emphasis on Occupational Health and Safety (OHS) with continuous training for our highly skilled teams.",
        icon: Shield,
        color: "text-red-500",
    },
];

// --- Component Definition ---
export default function AboutUsPage() {
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
                    <Users className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        About Our Owner-Supervised Painting Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Established in 2004, Maverick Painting delivers the highest quality painting and most professional service to the corporate, commercial, and industrial markets.
                    </p>
                </div>
            </section>

            {/* Main Content Area: History and Value Props */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5">
                    
                    {/* Core Narrative */}
                    <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                        <p className="text-lg text-gray-700">
                            Our management team provides over **50 years of combined experience** in the coatings application solution industry, serving some of the largest developers in South Africa[cite: 4923]. We are committed to a successful record of safety, reliability, guaranteed quality workmanship, and efficient service delivery[cite: 4924].
                        </p>
                        <p className="text-lg text-gray-700 font-semibold border-t pt-4">
                            We use close working relationships with the best quality paint & waterproofing manufacturers in the country, and their continuous involvement in all our projects is key[cite: 4927].
                        </p>
                    </div>

                    {/* Value Propositions Grid */}
                    <h2 className={cn("text-4xl font-extrabold text-center mb-12", PRIMARY_COLOR_TEXT)}>
                        Why Choose Our Team?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {VALUE_PROPOSITIONS.map((prop, index) => (
                            <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md text-center">
                                <prop.icon className={cn("w-10 h-10 mx-auto mb-4", prop.color)} />
                                <h3 className="text-2xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{prop.title}</h3>
                                <p className="text-gray-700">{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Trust Conversion: QA Module */}
            <section className={cn("py-16 md:py-20", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5">
                    <h2 className={cn("text-4xl font-extrabold text-center mb-10", WHITE_TEXT)}>
                        Our Guarantee: Verifiable Quality and Peace of Mind
                    </h2>
                    <QAModule />
                </div>
            </section>
        </div>
    );
}