// app/access-solutions/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Added Wrench to the import list
import { Mountain, Users, Clock, DollarSign, ArrowRight, Wrench } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module'; 

// --- Access Methods ---
const ACCESS_METHODS = [
    { 
        title: "Rope Access (Industrial Abseiling)", 
        description: "The most cost-effective and least disruptive solution for high-rise façade maintenance and painting. Safer and faster than traditional scaffolding.",
        icon: Mountain,
    },
    { 
        title: "Swing Scaffolds & Aerial Lifts", 
        description: "Utilization of swing scaffolds and cherry pickers for medium-rise buildings where stability and rapid repositioning are key requirements.",
        icon: Users,
    },
    { 
        title: "Custom Scaffolding Solutions", 
        description: "Full structural scaffolding for extensive, long-term repairs or areas that require sustained, complex access for structural work.",
        icon: Wrench, // Wrench icon is now defined
    },
];

// --- Component Definition ---
export default function AccessSolutionsPage() {
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
                    <Mountain className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Difficult Access Painting & Maintenance
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Rope access, swing scaffolds, and cherry pickers. We offer a hybrid approach to ensure the most cost-effective and safest solution for your high-rise asset.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Problem/Solution/Capability Proof */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 space-y-16">
                    
                    {/* 1. THE THESIS: Hybrid Approach */}
                    <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                            Selecting the Safest, Most Cost-Effective Access Method
                        </h2>
                        <p className="text-lg text-gray-700">
                            Many high-rise contractors only push one solution (e.g., rope access). As a full-service asset maintenance partner, we assess the site complexity, duration, and height, and utilize a **hybrid approach**—combining rope access, swing scaffolds, and cherry pickers—to select the solution that delivers the best value for your project.
                        </p>
                    </div>

                    {/* 2. ACCESS METHODS GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {ACCESS_METHODS.map((method, index) => (
                            <div key={index} className="p-6 border-2 border-gray-200 rounded-lg shadow-md">
                                <method.icon className={cn("w-10 h-10 mb-4", SECONDARY_COLOR)} />
                                <h3 className="text-2xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{method.title}</h3>
                                <p className="text-gray-700">{method.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* 3. QA and Final CTA */}
                    <div className="pt-10 border-t border-gray-200 max-w-6xl mx-auto">
                        <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                            Safety Compliance and Verifiable High-Level Execution
                        </h2>
                        <QAModule />
                    </div>
                </div>
            </section>
        </div>
    );
}