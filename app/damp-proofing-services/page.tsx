// app/damp-proofing-services/page.tsx (Full Code - Damp Proofing Pillar Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Droplet, Zap, TrendingDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Damp Proofing Specialists Johannesburg | Rising & Lateral Damp', // Primary Keyword
    description: 'Expert diagnosis and permanent chemical DPC injection for rising damp. We treat lateral and penetrating damp, guaranteeing structural integrity and eliminating moisture issues.',
    keywords: 'rising damp treatment Gauteng, damp proofing specialists Johannesburg, chemical damp proof course, lateral damp repair', // High-urgency keywords
};

// --- Service Links (Cluster Pages) ---
const DAMP_SERVICES = [
    {
        title: "Rising Damp Treatment (Chemical DPC)",
        description: "The modern, permanent solution: Chemical DPC injection into the mortar course creates a horizontal waterproof barrier to stop upward capillary action.",
        href: "/damp-proofing/rising-damp-treatment", 
        icon: Zap,
        color: "text-[#A9D834]", // Tertiary Green
    },
    {
        title: "Lateral Damp Repair (Retaining Walls)",
        description: "Addressing water pressure pushing through basement and retaining walls. Requires specialized external or internal membrane systems to divert moisture.",
        href: "/damp-proofing/lateral-damp-treatment", // Placeholder link
        icon: TrendingDown,
        color: "text-[#5AD5E2]", // Secondary Blue
    },
    {
        title: "Penetrating Damp Diagnosis",
        description: "Identifying and sealing specific failure points (e.g., cracked plaster, faulty window seals, deteriorated mortar) that allow external water to soak through walls.",
        href: "/damp-proofing/penetrating-damp-diagnosis", // Placeholder link
        icon: Droplet,
        color: "text-red-500", // Accent color
    },
];

// --- Component Definition ---
export default function DampProofingPillarPage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const PRIMARY_COLOR_TEXT = 'text-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const WHITE_TEXT = 'text-white';

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <Droplet className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Damp Proofing Specialists Johannesburg
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
                        Permanent treatment for rising, lateral, and penetrating damp. We eliminate the source of moisture using guaranteed systems, restoring structural integrity and air quality.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Service Links & Conversion */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-12">
                        
                        {/* THE URGENCY THESIS */}
                        <div className="border-l-4 border-[#A9D834] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Stop the Damage: Permanent Solutions for All Types of Damp
                            </h2>
                            <p className="text-lg text-gray-700">
                                Damp is often misdiagnosed. We begin with a full defect assessment to confirm the type of damp—Rising, Lateral, or Penetrating—before recommending the precise, guaranteed treatment methodology.
                            </p>
                        </div>

                        {/* DAMP SERVICES GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            {DAMP_SERVICES.map((service) => (
                                <Link 
                                    key={service.title} 
                                    href={service.href} 
                                    className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#A9D834]"
                                >
                                    <service.icon className={cn("w-8 h-8 mb-3", service.color)} />
                                    <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <span className={cn("text-sm font-semibold flex items-center", TERTIARY_COLOR)}>
                                        Read Technical Guide <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Book Your Damp Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Get an expert to diagnose the type of damp and quote the permanent solution.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}