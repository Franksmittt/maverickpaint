// app/blog/cost-to-paint-house-johannesburg/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Changed Rouble to DollarSign
import { DollarSign, Wrench, CheckCircle, ArrowRight } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form'; // Reusable Contact Form

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'How Much Does It *Really* Cost to Paint a House in Johannesburg? (2025 Guide)', // Primary Keyword
    description: 'A 2025 pricing guide for house painting in Johannesburg. We break down the true cost by pivoting from cheap quotes to long-term value, guarantees, and expert surface preparation.', 
    keywords: 'how much to paint a house Johannesburg, painting prices per square meter South Africa, cost of house painting quote',
};

// --- Component Definition ---
export default function CostArticlePage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const PRIMARY_COLOR_TEXT = 'text-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const SECONDARY_COLOR = 'text-[#5AD5E2]';
    const WHITE_TEXT = 'text-white';

    const valuePoints = [
        { title: "Expert Surface Preparation", description: "This accounts for 60% of the job. Cheap quotes skip this, guaranteeing premature paint failure." },
        { title: "Manufacturer-Backed Guarantees", description: "Guarantees are based on using certified products applied correctly—a system cheap contractors cannot offer." },
        { title: "Defect Remediation", description: "We include structural and plaster repair in our process, ensuring the fix lasts years, not months." },
    ];

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <DollarSign className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} /> {/* FIX: Used DollarSign icon */}
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        How Much Does It *Really* Cost to Paint a House in Johannesburg?
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        A 2025 pricing guide that pivots from cheap quotes to long-term value, certified quality, and guaranteed structural integrity.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. INITIAL PRICING TRANSPARENCY */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Understanding the Price Range (R/m²)
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Painting costs in Johannesburg can range dramatically, from a seemingly low R60 per square meter to R200+ per square meter for full restoration, preparation, and premium coatings. **Warning:** Quotes below a certain threshold almost guarantee skipping the non-negotiable preparation steps.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold border-l-4 border-[#A9D834] pl-4">
                                A quality, guaranteed exterior paint job typically starts closer to the middle-to-high end of the market due to the intensive preparation required for Gauteng weather.
                            </p>
                        </div>
                        
                        {/* 2. PIVOT: VALUE VS. PRICE */}
                        <div>
                            <h2 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                Why Value Trumps Price: The Risk of the Cheap Quote
                            </h2>
                            <div className="space-y-6">
                                {valuePoints.map((point, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-1" style={{ color: PRIMARY_COLOR_TEXT }}>{point.title}</h3>
                                        <p className="text-gray-700">{point.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. CONCLUSION AND CONTACT PUSH */}
                        <div className="pt-10 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Final Recommendation: Get a Value-Focused Quote
                            </h2>
                            <p className="text-gray-700 mb-6">
                                Do not accept a quote based solely on price per square meter. Demand to know the contractor’s preparation process, their structural repair capabilities, and their guarantee process.
                            </p>
                            <Link href="/contact" passHref>
                                <Button
                                    variant="default"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between bg-[#121111] hover:bg-gray-800 text-[#A9D834] border border-[#A9D834]')}
                                >
                                    Request Your Structural Assessment & Quote <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Need a Quote Now?</h3>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Related Topics</h3>
                            <ul className="space-y-2">
                                <li><Link href="/repairs/concrete-cancer-spalling-repair" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Concrete Cancer Repair Costs</Link></li>
                                <li><Link href="/blog/diy-vs-professional-painter" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>DIY vs Professional Painter (Value)</Link></li>
                                <li><Link href="/our-process-independent-qa" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Our Independent QA Process</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}