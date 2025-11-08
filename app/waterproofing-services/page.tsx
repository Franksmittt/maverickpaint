// app/waterproofing-services/page.tsx (Full Code - Waterproofing Pillar Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Droplet, CheckCircle, ArrowRight, Home, Zap, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Expert Waterproofing Contractors | Roofs, Balconies & Slabs | Gauteng', // Primary Keyword
    description: 'Guaranteed waterproofing solutions for flat concrete roofs, leaking balconies, and basements. We stop leaks permanently by specifying the correct liquid, torch-on, or polyurethane system.',
    keywords: 'waterproofing contractors Gauteng, waterproofing specialists Johannesburg, flat roof waterproofing, leaking balcony repair', // High-urgency problem keywords [cite: 4769]
};

// --- Service Links (Cluster Pages) ---
const WATERPROOFING_SERVICES = [
    {
        title: "Flat Concrete Roof Waterproofing",
        description: "Specializing in Liquid Applied Membranes (LAM) and Torch-On systems to create a permanent, monolithic seal over roof slabs.",
        href: "/waterproofing/flat-roof-waterproofing", // Links to Cluster Page 1
        icon: Droplet,
    },
    {
        title: "Leaking Balcony & Patio Repair",
        description: "High-pain-point solution: Guaranteed under-tile waterproofing system that eliminates leaks without compromising aesthetic appeal.",
        href: "/waterproofing/leaking-balcony-repair", // Links to Cluster Page 2
        icon: Home,
    },
    {
        title: "Damp Proofing & Rising Damp Treatment",
        description: "Diagnosis and remediation of rising, lateral, and penetrating damp using chemical DPC injection to create a permanent barrier.",
        href: "/damp-proofing-services", // Links to Damp Pillar Page
        icon: Zap,
    },
    {
        title: "Basement & Below-Ground Waterproofing",
        description: "Technical solutions for retaining walls, basements, and below-ground structures using specialized cementitious and membrane systems.",
        href: "/waterproofing/basement-waterproofing",
        icon: Wrench,
    },
];

// --- Component Definition ---
export default function WaterproofingPillarPage() {
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
                    <Droplet className={cn("w-16 h-16 mx-auto mb-4", SECONDARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Expert Waterproofing Contractors in Gauteng
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-4xl mx-auto">
                        We provide guaranteed, effective solutions for active water ingress problems, from flat roofs and balconies to rising damp and foundation leaks.
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
                                Stop Active Leaks: Immediate Diagnosis and Guaranteed Systems
                            </h2>
                            <p className="text-lg text-gray-700">
                                A leak is an emergency. We build confidence immediately by only specifying **manufacturer-guaranteed products** [Query] from reputable suppliers. Our independent QA process ensures the system is applied correctly, eliminating the risk of failure down the line.
                            </p>
                        </div>

                        {/* WATERPROOFING SERVICES GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                            {WATERPROOFING_SERVICES.map((service) => (
                                <Link 
                                    key={service.title} 
                                    href={service.href} 
                                    className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#5AD5E2]"
                                >
                                    <service.icon className={cn("w-8 h-8 mb-3", service.icon === Droplet || service.icon === Home ? SECONDARY_COLOR : TERTIARY_COLOR)} />
                                    <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{service.title}</h3>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <span className={cn("text-sm font-semibold flex items-center", SECONDARY_COLOR)}>
                                        See Technical Process <ArrowRight className="w-4 h-4 ml-2" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Book Your Urgent Leak Assessment</h3>
                            <p className="text-center text-gray-600 mb-6">
                                We will dispatch a specialist to diagnose your active water ingress problem immediately.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}