// app/blog/signs-of-rising-damp/page.tsx (Full Corrected Code - Component Import Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Droplet, Zap, TrendingDown, ArrowRight, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
// FIX: Added ContactForm to the import list
import { ContactForm } from '@/app/_components/contact-form'; 

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'The 5 Signs of Rising Damp in Your Walls (And How to Fix It Permanently)', // Primary Keyword
    description: 'A visual guide to identifying rising damp vs. penetrating damp. Look for tide marks, blistering paint, and crumbling plaster. Permanent treatment requires chemical DPC injection.', 
    keywords: 'signs of rising damp in walls, how to treat rising damp, what does rising damp look like, rising damp diagnosis',
};

// --- Diagnostic Signs ---
const DIAGNOSTIC_SIGNS = [
    { title: "The 'Tide Mark' Effect", description: "A visible, horizontal watermark line on the internal wall, usually starting 1 meter above the floor." },
    { title: "Peeling/Blistering Paint", description: "Moisture pushes paint films off the wall, often accompanied by the paint feeling damp or cold." },
    { title: "Crumbling Plaster", description: "Ground salts carried by the water crystallize within the plaster, causing it to soften, bubble, and crumble away." },
    { title: "Musty/Salty Smell", description: "A persistent, earthy, or musty odor in the affected room, often worse during humid weather." },
    { title: "Decaying Skirting Boards", description: "Wood in direct contact with the damp wall absorbs moisture, leading to decay and warping." },
];

// --- Component Definition ---
export default function DampSignsPage() {
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
                    <Droplet className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        The 5 Signs of Rising Damp in Your Walls
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        A visual guide to diagnosing rising damp vs. penetrating damp and why expert treatment is essential for permanent structural stability.
                    </p>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* LEFT/MAIN ARTICLE COLUMN (Col 1 & 2) */}
                    <div className="lg:col-span-2 space-y-10">
                        
                        {/* 1. DIAGNOSTIC SIGNS */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>
                                Visual Guide: What Rising Damp Looks Like
                            </h2>
                            <div className="space-y-6">
                                {DIAGNOSTIC_SIGNS.map((sign, index) => (
                                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-1" style={{ color: PRIMARY_COLOR_TEXT }}>{index + 1}. {sign.title}</h3>
                                        <p className="text-gray-700">{sign.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. WARNING AND PIVOT */}
                        <div className="pt-8 border-t border-gray-200">
                            <h2 className={cn("text-3xl font-bold mb-4", PRIMARY_COLOR_TEXT)}>
                                Warning: Do Not Misdiagnose Penetrating Damp
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Rising damp (upward movement) is often confused with **penetrating damp** (lateral movement, often from a faulty roof, pipe, or cracked plaster). Treating one when the source is the other is a costly mistake. Our initial assessment determines the exact source of moisture before any treatment begins.
                            </p>
                        </div>
                        
                        {/* 3. THE SOLUTION PUSH */}
                        <div className="p-6 bg-gray-50 rounded-lg border-l-4 border-[#A9D834]">
                            <h3 className={cn("text-2xl font-bold mb-3", SECONDARY_COLOR)}>
                                The Permanent Fix: Chemical DPC Injection
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Once rising damp is confirmed, the only permanent solution is to install a **Chemical Damp Proof Course (DPC)**. This stops the capillary action permanently, allowing the wall to dry out.
                            </p>
                            <Link href="/damp-proofing/rising-damp-treatment" passHref>
                                <Button
                                    variant="outline"
                                    className={cn('h-12 text-md font-bold w-full md:w-auto justify-between border-[#A9D834] text-[#121111] hover:bg-[#A9D834] hover:text-[#121111]')}
                                >
                                    See the Technical DPC Injection Process <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    
                    {/* RIGHT COLUMN (Col 3): CONTACT FORM & LINKS */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-28 p-6 rounded-xl border border-[#A9D834] bg-gray-50 shadow-lg">
                            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR_TEXT }}>Need a Diagnosis?</h3>
                            <p className="text-center text-gray-600 mb-6">
                                Book an expert inspection to confirm the exact source of your damp problem.
                            </p>
                            <ContactForm isHeroForm={false} />
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-200 rounded-lg">
                            <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>Other Problems</h3>
                            <ul className="space-y-2">
                                <li><Link href="/structural-repairs" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Structural Repairs (Spalling)</Link></li>
                                <li><Link href="/waterproofing-services" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>Leaking Roofs & Balconies</Link></li>
                                <li><Link href="/painting-services" className={cn("text-sm hover:text-[#5AD5E2]", PRIMARY_COLOR_TEXT)}>General Painting Services</Link></li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    );
}