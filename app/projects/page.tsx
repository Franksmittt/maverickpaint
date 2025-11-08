// app/projects/page.tsx (Full Code - Project Gallery Hub Page)
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { GalleryHorizontal, MapPin, Building, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/app/_components/contact-form';

// --- Placeholder Data (Matches data from Project Spotlight) ---
const ALL_PROJECTS = [
    { title: "Munyaka & Kikuyu Estates", location: "Midrand", service: "Body Corporate", image: "/images/munyaka.jpg", href: "/projects/munyaka-kikuyu" },
    { title: "The Blyde Riverwalk Estate", location: "Pretoria East", service: "Waterproofing", image: "/images/blyde.jpg", href: "/projects/the-blyde" },
    { title: "Eastlands Mature Lifestyle", location: "Benoni", service: "Commercial", image: "/images/eastlands.jpg", href: "/projects/eastlands" },
    { title: "Celebration Retirement", location: "North Riding", service: "Residential", image: "/images/celebration.jpg", href: "/projects/celebration" },
    { title: "Structural Repair Project", location: "Sandton CBD", service: "Structural Repairs", image: "/images/structural-repair.jpg", href: "/projects/sandton-repair" },
    { title: "Food Manufacturing Plant", location: "Isando", service: "Specialized Coatings", image: "/images/specialized-coating.jpg", href: "/projects/food-plant" },
];

const FILTERS = ["All", "Commercial", "Body Corporate", "Waterproofing", "Structural Repairs", "Specialized Coatings"];

// --- Metadata for SEO ---
export const metadata: Metadata = {
    title: 'Completed Painting & Structural Projects | Maverick Portfolio', // Primary Keyword
    description: 'View our portfolio of high-impact completed projects across Gauteng, including large-scale body corporate redecoration, structural repairs, and specialized industrial coatings.',
    keywords: 'painting project gallery, commercial painting portfolio, structural repair case studies, completed waterproofing projects',
};

// --- Component Definition ---
export default function ProjectsPage() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const PRIMARY_COLOR_TEXT = 'text-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const WHITE_TEXT = 'text-white';

    return (
        <div className="bg-white">
            
            {/* Page Header / H1 Section */}
            <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center">
                    <GalleryHorizontal className={cn("w-16 h-16 mx-auto mb-4", TERTIARY_COLOR)} />
                    <h1 className={cn("text-5xl md:text-6xl font-extrabold tracking-tight", WHITE_TEXT)}>
                        Completed Projects & Case Studies
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-4xl mx-auto">
                        View the tangible proof of our work. Our portfolio showcases our expertise in high-value asset maintenance and verifiable quality.
                    </p>
                </div>
            </section>

            {/* Main Content Area: Filterable Gallery */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-5">
                    
                    {/* Filter Bar (Placeholder/UI) */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {FILTERS.map((filter) => (
                            <Button 
                                key={filter} 
                                variant={filter === 'All' ? 'default' : 'outline'}
                                className={cn("text-sm font-semibold rounded-full px-4", filter === 'All' ? 'bg-[#121111] text-white hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-100')}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ALL_PROJECTS.map((project, index) => (
                            <Link 
                                key={index} 
                                href={project.href} 
                                className="relative overflow-hidden group rounded-xl shadow-lg h-80"
                            >
                                {/* Image Display */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                                </div>
                                
                                {/* Text Overlay */}
                                <div className="absolute bottom-0 left-0 p-6 z-10 w-full text-white">
                                    <p className="text-sm font-semibold mb-1 uppercase text-[#A9D834]">{project.service}</p>
                                    <h3 className="text-xl font-bold group-hover:text-[#5AD5E2] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-medium flex items-center space-x-2 opacity-80 mt-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{project.location}</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA/Contact */}
            <section className={cn("py-16", PRIMARY_COLOR_BG)}>
                <div className="container mx-auto px-5 text-center max-w-4xl">
                    <h2 className={cn("text-4xl font-extrabold mb-4", WHITE_TEXT)}>
                        Ready to Start Your Next High-Impact Project?
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        If your project is complex, multi-faceted, or requires specialized technical skills, schedule a consultation with our team.
                    </p>
                    <Link href="/contact" passHref>
                        <Button
                            size="lg"
                            className={cn('text-md font-bold px-8 h-12 rounded-lg', 'bg-[#A9D834] hover:bg-[#A9D834]/80 text-[#121111]')}
                        >
                            Get a Technical Assessment Quote <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}