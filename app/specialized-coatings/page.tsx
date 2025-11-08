// app/specialized-coatings/page.tsx (Full Code - Specialized Coatings Pillar Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PaintBucket, Shield, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { QAModule } from '@/app/_components/qa-module';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Specialist Coating Applicators: Floor, Wall & Textured Finishes | South Africa', // Primary Keyword
    description: 'Expert application of high-performance coatings, including hygienic food-grade flooring (Sika Ucrete), epoxy, and decorative Marmoran finishes. Certified applicators for demanding projects.',
    keywords: 'specialized floor coating applicators Gauteng, Marmoran approved applicators, hygienic food-grade flooring, epoxy flooring specialists', // Niche, high-value keywords
};

// --- Service Links (Cluster Pages) ---
const COATING_SERVICES = [
    {
        title: "Hygienic Food-Grade Flooring",
        description: "Specialized systems for dairies, abattoirs, and food manufacturing that resist thermal shock, chemicals, and bacteria (e.g., Polyurethane Screeds).",
        href: "/coatings/hygienic-food-grade-flooring", // Links to Cluster Page 1
        icon: Shield,
    },
    {
        title: "Epoxy & Polyurethane Floor Coatings",
        description: "Seamless, durable floor systems for warehouses, factories, and commercial spaces, providing resistance against heavy loads and industrial chemicals.",
        href: "/coatings/specialized-floor-coatings", // Links to Cluster Page 2
        icon: Layers,
    },
    {
        title: "Decorative Textured Wall Finishes",
        description: "Approved Master Applicators for premium Marmoran, Gamazine, and stone coatings, transforming building aesthetics with guaranteed, durable finishes.",
        href: "/coatings/decorative-textured-wall-finishes", // Links to Cluster Page 3
        icon: PaintBucket,
    },
    {
        title: "Industrial Protective Coatings",
        description: "Application of systems for structural steel and machinery to prevent rust, corrosion, and chemical degradation in harsh industrial environments.",
        href: "/painting/industrial-painting", // Links to Industrial Painting Silo
        icon: Zap,
    },
];

// --- Component Definition ---
export default function SpecializedCoatingsPillarPage() {
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
                    <PaintBucket className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Specialized High-Performance Coating Applicators
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We are certified applicators for systems like Sika Ucrete and Marmoran. We deliver high-performance solutions for hygiene, chemical resistance, and extreme durability.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Service Links & Conversion */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 space-y-16">
                    
                    {/* THE THESIS */}
                    <div className="border-l-4 border-[#A9D834] pl-6 pb-6 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                            We Provide a System, Not Just a Coating
                        </h2>
                        <p className="text-lg text-gray-700">
                            Our clients are not looking for paint; they are looking for a high-performance **system**—whether it's thermal shock resistance for a food plant or chemical resistance for a warehouse floor. We use our approved applicator status to specify and guarantee the correct product for your technical requirements.
                        </p>
                    </div>

                    {/* COATINGS SERVICES GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
                        {COATING_SERVICES.map((service) => (
                            <Link 
                                key={service.title} 
                                href={service.href} 
                                className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#A9D834]"
                            >
                                <service.icon className={cn("w-8 h-8 mb-3", service.icon === PaintBucket ? TERTIARY_COLOR : SECONDARY_COLOR)} />
                                <h3 className="text-xl font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <span className={cn("text-sm font-semibold flex items-center", TERTIARY_COLOR)}>
                                    View Technical Service <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* QA Module at the bottom */}
                    <div className="pt-10 border-t border-gray-200">
                        <QAModule />
                    </div>

                    {/* Contact CTA */}
                    <div className="text-center pt-8">
                        <Link href="/contact" passHref>
                            <Button
                                size="xl"
                                className={cn('text-lg font-bold px-10 h-14 rounded-lg bg-[#121111] hover:bg-[#2C2C2C] text-[#A9D834] border border-[#A9D834]')}
                            >
                                Schedule a Technical Coatings Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}