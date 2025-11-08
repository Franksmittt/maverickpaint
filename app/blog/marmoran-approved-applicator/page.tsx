// app/blog/marmoran-approved-applicator/page.tsx (Full Code - Marmoran Article)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PaintBucket, Shield, Trophy, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Key Benefits ---
const MARMORAN_BENEFITS = [
    { title: "Exclusive Finishes", description: "Access to high-end textured finishes, decorative renders, and stone coatings not available to standard contractors." },
    { title: "Guaranteed Durability", description: "Marmoran systems provide superior protection against weathering and color fade compared to traditional paint." },
    { title: "Certified Application", description: "Our Master Applicator status ensures the product is applied exactly to Marmoran's technical specifications, validating their product guarantee." },
];

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Maverick Painting: Certified Marmoran Master Applicator Gauteng', // Primary Keyword
    description: 'We are certified Marmoran applicators for high-end textured wall finishes and decorative renders in Johannesburg. Combine premium products with guaranteed application.', //
    keywords: 'Marmoran applicators Gauteng, certified Marmoran contractor, decorative renders applicator, textured wall finishes Johannesburg',
};

// --- Component Definition ---
export default function MarmoranArticlePage() {
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
                        Certified Marmoran Master Applicator Gauteng
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        Elevate your asset's aesthetic with high-end, durable textured wall finishes applied by one of a select few certified Master Applicators.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. BRAND AUTHORITY */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Why Choose a Marmoran Certified Applicator?
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Marmoran is a premium product known for decorative renders and superior durability. Its successful application requires specific training and adherence to strict protocols. Our Master Applicator status is your guarantee that the investment in this high-end coating is protected.
                            </p>
                        </div>
                        
                        {/* 2. BENEFITS */}
                        <div>
                            <h3 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Key Benefits of Using a Master Applicator
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {MARMORAN_BENEFITS.map((benefit, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-lg font-bold mb-2" style={{ color: PRIMARY_COLOR_TEXT }}>{benefit.title}</h3>
                                        <p className="text-sm text-gray-700">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. CROSS-SELL AND FINAL PUSH */}
                        <div className="pt-10 border-t border-gray-200">
                            <h3 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Combine Decorative Finishes with Structural Guarantees
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                We are certified for both structural integrity (Sika) and aesthetic finishes (Marmoran). Ensure the surface beneath the beautiful finish is structurally sound and waterproofed.
                            </p>
                            <Link href="/accreditations" passHref>
                                <Button
                                    variant="default"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between bg-[#121111] hover:bg-gray-800 text-[#A9D834] border border-[#A9D834]')}
                                >
                                    View All Certified Applicator Statuses <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Schedule a Finishes Consultation</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Discuss your custom texture and color requirements with a Master Applicator.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Related Services</h3>
                            <ul className="space-y-2">
                                <li><Link href="/coatings/specialized-floor-coatings" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Specialized Floor Coatings</Link></li>
                                <li><Link href="/structural-repairs" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Structural Repair Services</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}