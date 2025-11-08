// app/structural-repairs/page.tsx (Full Code - Pillar Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Wrench, CheckCircle, ArrowRight, Shield, Construction, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Structural, Concrete & Plaster Repair Specialists | Johannesburg', // Pillar Page Primary Keyword
    description: 'Expert remediation of concrete cancer, spalling, and structural cracks. We fix the structure before we apply the coating, guaranteeing long-term asset integrity. Certified Sika Applicators.',
    keywords: 'structural repairs Johannesburg, concrete repairs Gauteng, plaster repairs, structural crack repair', // Broad keywords [cite: 4718]
};

// --- Service Links ---
const REPAIR_SERVICES = [
    {
        title: "Concrete Cancer (Spalling) Repair",
        description: "Eliminate corroding rebar and structural failure. Our process removes all unsound concrete and chemically treats the steel before profile reinstatement.",
        href: "/repairs/concrete-cancer-spalling-repair", // Links to Page 1
        icon: Wrench,
    },
    {
        title: "Structural Crack Injection",
        description: "Precision high-pressure injection using epoxy (for structural strength) or polyurethane (for flexible waterproofing) to restore concrete integrity.",
        href: "/repairs/structural-crack-injection", // Links to Page 2
        icon: TrendingUp,
    },
    {
        title: "Expansion & Polyurethane Joint Repair",
        description: "Specialized sealing and creation of expansion joints to manage movement and prevent water ingress in concrete slabs and façades.",
        href: "/repairs/expansion-joint-repair", // Links to Page 3
        icon: Construction,
    },
    {
        title: "Plaster & General Concrete Repair",
        description: "Turn-key defect identification and repair for movement cracks, hairline cracks, and general plaster damage, ensuring a flawless foundation for the final coating.",
        href: "/repairs/plaster-repair",
        icon: Shield,
    },
];

// --- Component Definition ---
export default function StructuralRepairsPillarPage() {
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
                    <Wrench className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Structural, Concrete & Plaster Repair Specialists
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
                        **Painting is not enough.** We diagnose and repair deeper structural defects—from spalling and rebar corrosion to crack injection—ensuring your asset is sound before the final coat.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Service Links & Conversion */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-12">
                        
                        {/* THE THESIS */}
                        <div className="border-l-4 border-[#5AD5E2] pl-6 pb-6">
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                We Solve Problems From The Structure Up.
                            </h2>
                            <p className="text-lg text-gray-700">
                                Visible cracks and deteriorating concrete are often symptoms of deep structural problems (like corroding rebar) that must be remediated **structurally** before any cosmetic finish can be applied[cite: 4716]. We eliminate failure points by providing a guaranteed, turn-key repair service that includes defect identification and technical remediation[cite: 4495].
                            </p>
                        </div>

                        {/* REPAIR SERVICES GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            {REPAIR_SERVICES.map((service) => (
                                <Link 
                                    key={service.title} 
                                    href={service.href} 
                                    className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#A9D834]"
                                >
                                    <service.icon className={cn("w-8 h-8 mb-3", service.icon === Wrench ? TERTIARY_COLOR : SECONDARY_COLOR)} />
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
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule Your Technical Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Our structural specialists will assess the extent of the damage on site.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}