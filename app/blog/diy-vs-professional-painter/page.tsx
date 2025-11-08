// app/blog/diy-vs-professional-painter/page.tsx (Full Corrected Code - Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Added CheckCircle to the import list
import { Wrench, User, DollarSign, ArrowRight, XCircle, CheckCircle } from 'lucide-react'; 
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'DIY Painting vs. Hiring a Professional in Gauteng: A Cost vs. Value Breakdown', // Primary Keyword
    description: 'Compare the cost of DIY painting versus hiring a professional contractor in Johannesburg. We highlight the risks of skipping expert preparation, safety compliance, and manufacturer guarantees.', //
    keywords: 'DIY vs professional painter South Africa, is it worth hiring a painter, cost vs value painting',
};

// --- Comparison Points ---
const COMPARISON_POINTS = [
    { 
        title: "Preparation & Substrate Repair", 
        diy: "Often skipped or done improperly (e.g., ignoring hairline cracks or spalling). Results in premature peeling.",
        pro: "Includes defect identification, structural repair, and guaranteed surface preparation (60% of the job).",
        icon: Wrench,
    },
    { 
        title: "Safety & Access", 
        diy: "High risk of injury from falls, especially on high-level work (roofs, façades). No OHS compliance.",
        pro: "Fully insured and OHS compliant teams certified for safe work at heights (e.g., rope access).",
        icon: User,
    },
    { 
        title: "Guarantees & Liability", 
        diy: "Zero guarantee on workmanship or product performance. Liability for any failure falls entirely on the homeowner.",
        pro: "Issued with a workmanship guarantee and backed by manufacturer product guarantees (third-party verified).",
        icon: DollarSign,
    },
];

// --- Component Definition ---
export default function DIYVsProPage() {
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
                        DIY Painting vs. Hiring a Professional in Gauteng
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        A clear breakdown of the true cost versus the long-term value, focusing on guaranteed quality, safety compliance, and structural integrity.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. INITIAL PIVOT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4" style={{ color: PRIMARY_COLOR_TEXT }}>
                                The True Cost is in the Prep Work (Not the Paint)
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Most homeowners focus solely on the price of the paint and the labor. However, the largest cost risk lies in **surface preparation**. A DIY job or a cheap quote risks neglecting structural defects, leading to paint failure within 1-2 years.
                            </p>
                            <p className="text-lg text-gray-700 font-semibold border-l-4 border-[#A9D834] pl-4">
                                The long-term value of a professional service lies entirely in the **verifiable guarantee** that the substrate was prepared correctly.
                            </p>
                        </div>
                        
                        {/* 2. COMPARISON TABLE */}
                        <div>
                            <h3 className={cn("text-4xl font-bold mb-8", PRIMARY_COLOR_TEXT)}>
                                3 Critical Differences: DIY vs. Professional
                            </h3>
                            <div className="overflow-x-auto border border-gray-200 rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Factor</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">DIY Risk / Outcome</th>
                                            <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Maverick Painting (Value)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {COMPARISON_POINTS.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap text-md font-medium" style={{ color: PRIMARY_COLOR_TEXT }}>{item.title}</td>
                                                <td className="px-6 py-4 text-sm text-red-700 font-semibold flex items-center space-x-2">
                                                    <XCircle className="w-4 h-4 shrink-0" />
                                                    <span>{item.diy}</span>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-green-700 font-semibold flex items-center space-x-2">
                                                    <CheckCircle className="w-4 h-4 shrink-0" /> {/* FIX: CheckCircle is now defined */}
                                                    <span>{item.pro}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* 3. CONCLUSION AND CONTACT PUSH */}
                        <div className="pt-10 border-t border-gray-200">
                            <h3 className={cn("text-3xl font-bold mb-6", PRIMARY_COLOR_TEXT)}>
                                Invest in the Guarantee, Not Just the Cost
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                If you are maintaining a high-value asset, the decision should pivot on who can offer **verifiable quality** and assume the liability for the next 5-10 years. That requires expertise in structural repair, OHS compliance, and third-party QA.
                            </p>
                            <Link href="/our-process-independent-qa" passHref>
                                <Button
                                    variant="default"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between bg-[#121111] hover:bg-gray-800 text-[#5AD5E2] border border-[#5AD5E2]')}
                                >
                                    See Our Verifiable QA Process <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Need a Quote?</h3>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Related Topics</h3>
                            <ul className="space-y-2">
                                <li><Link href="/painting-services" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Our Core Painting Services</Link></li>
                                <li><Link href="/repairs/concrete-cancer-spalling-repair" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>The Importance of Structural Repair</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}