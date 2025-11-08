// app/blog/page.tsx (Full Corrected Code - Final Icon Fix)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
// FIX: Added missing icons (Zap, Layers, Wrench, TrendingUp)
import { BookOpen, Calendar, ArrowRight, Zap, Layers, Wrench, TrendingUp } from 'lucide-react'; 
import { Button } from '@/components/ui/button';

// --- Placeholder Data (Based on Content Strategy) ---
const FEATURED_ARTICLES = [
    {
        title: "How Much Does it *Really* Cost to Paint a House in Johannesburg?",
        summary: "A 2025 pricing guide that pivots the cost conversation toward long-term value, warranties, and avoiding cheap failures.",
        date: "Oct 24, 2025",
        category: "Pricing & Value",
        href: "/blog/cost-to-paint-house-johannesburg",
        icon: TrendingUp, // TrendingUp is now defined
    },
    {
        title: "The 5 Signs of Rising Damp in Your Walls (and How to Fix it Permanently)",
        summary: "A diagnostic tool for users. Helps identify 'tide marks,' 'peeling wallpaper,' and generates high-urgency damp proofing leads.",
        date: "Oct 15, 2025",
        category: "Problem Diagnosis",
        href: "/blog/signs-of-rising-damp",
        icon: Zap, 
    },
    {
        title: "Epoxy vs. Polyurethane Flooring: A Technical Guide for Plant Managers",
        summary: "An objective comparison of the two main industrial flooring systems, detailing resistance to thermal shock, chemicals, and structural load.",
        date: "Sep 28, 2025",
        category: "Technical Systems",
        href: "/blog/epoxy-vs-polyurethane-flooring",
        icon: Layers, 
    },
    {
        title: "DIY Painting vs. Hiring a Professional: A Cost vs. Value Breakdown",
        summary: "Interception content that converts potential DIY users by highlighting safety, guaranteed quality, and risk reduction.",
        date: "Sep 1, 2025",
        category: "Value Proposition",
        href: "/blog/diy-vs-professional-painter",
        icon: Wrench, 
    },
];

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Technical Guides & Insights | Maverick Painting Blog', 
    description: 'Expert articles on painting costs, damp diagnosis, waterproofing systems, and structural repair best practices, positioning Maverick as a technical advisor.',
    keywords: 'painting blog, rising damp guide, epoxy vs polyurethane, cost of painting Johannesburg',
};

// --- Component Definition ---
export default function BlogPage() {
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
                    <BookOpen className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Technical Guides & Expert Insights
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        We provide objective advice on coatings, structural issues, and waterproofing, ensuring you make an informed decision for your asset maintenance.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Article List */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5">
                    
                    <h2 className={cn("text-4xl font-extrabold text-center mb-16", PRIMARY_COLOR_TEXT)}>
                        Featured Articles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_ARTICLES.map((article, index) => (
                            <Link 
                                key={index} 
                                href={article.href} 
                                className="block p-6 border-2 border-gray-200 rounded-lg transition-all hover:shadow-lg hover:border-[#A9D834]"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <p className={cn("text-xs font-bold uppercase", TERTIARY_COLOR)}>{article.category}</p>
                                    <p className="text-xs text-gray-500 flex items-center space-x-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{article.date}</span>
                                    </p>
                                </div>
                                
                                <h3 className="text-xl font-bold mb-3" style={{ color: PRIMARY_COLOR_TEXT }}>{article.title}</h3>
                                <p className="text-gray-700 mb-4 text-sm">{article.summary}</p>
                                
                                <span className={cn("text-sm font-semibold flex items-center", SECONDARY_COLOR)}>
                                    Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}