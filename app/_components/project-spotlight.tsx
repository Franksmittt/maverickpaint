// app/_components/project-spotlight.tsx (Full File Content - Updated CTA Text)
"use client" 

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, MapPin, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define the featured projects based on the SEO Strategy (Part 6)
const FEATURED_PROJECTS = [
    {
        title: "Munyaka Lifestyle Estate",
        location: "Midrand",
        description: "Large-scale Body Corporate redecoration and high-level maintenance.",
        href: "/projects/munyaka-kikuyu",
        image: "/images/munyaka.jpg", // FILE: munyaka.jpg
    },
    {
        title: "Kikuyu Lifestyle Centre",
        location: "Midrand",
        description: "Residential redecoration focusing on quality standards and long-term asset protection.",
        href: "/projects/munyaka-kikuyu",
        image: "/images/kikuyu.jpeg", // FILE: kikuyu.jpeg (Note: jpeg extension used)
    },
    {
        title: "The Blyde Riverwalk Estate",
        location: "Pretoria East",
        description: "Specialist waterproofing and redecoration solutions.",
        href: "/projects/the-blyde",
        image: "/images/blyde.jpg", // FILE: blyde.jpg
    },
    {
        title: "Eastlands Mature Lifestyle",
        location: "Benoni",
        description: "Complete exterior painting and asset protection for large-scale mature lifestyle facilities.",
        href: "/projects/eastlands",
        image: "/images/eastlands.jpg", // FILE: eastlands.jpg
    },
    {
        title: "Celebration Retirement",
        location: "North Riding",
        description: "Full exterior maintenance and painting for retirement complexes.",
        href: "/projects/celebration",
        image: "/images/celebration.jpg", // FILE: celebration.jpg
    },
    {
        title: "Greencreek Riverwalk",
        location: "Pretoria East",
        description: "High-volume residential development painting, managing quick turnovers and high quality control.",
        href: "/projects/greencreek",
        image: "/images/greencreek.jpg", // FILE: greencreek.jpg
    },
];

export function ProjectSpotlight() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary Black
    const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue
    const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green
    const WHITE_TEXT = 'text-white';
    
    // Custom Box Shadow for the glow effect
    const GLOW_SHADOW = '0 0 15px 0 rgba(90, 213, 226, 0.7)'; // Glow color: #5AD5E2

    return (
        <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
            <div className="container mx-auto px-5">
                
                {/* Section Header */}
                <header className="max-w-3xl mx-auto text-center mb-16">
                    <p className={cn("text-lg font-semibold uppercase", TERTIARY_COLOR)}>Our Portfolio of Excellence</p>
                    <h2 className={cn("text-4xl font-extrabold mt-2 tracking-tight sm:text-5xl", WHITE_TEXT)}>
                        High-Impact Projects in Gauteng's Key Assets
                    </h2>
                </header>

                {/* Projects Grid (Fixed 3-Column Layout) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {FEATURED_PROJECTS.map((project, index) => (
                        // Project Card
                        <Link 
                            key={index} 
                            href={project.href} 
                            className={cn(
                                "relative overflow-hidden group rounded-xl shadow-2xl transition-all duration-300",
                                "h-96" // Set a consistent height for all cards
                            )}
                            style={{ 
                                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.0)', // Default state (no glow)
                                transition: 'box-shadow 0.3s ease-in-out',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = GLOW_SHADOW;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Image Placeholder */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ 
                                    backgroundImage: `url(${project.image})`,
                                    // Fallback background color if image fails to load
                                    backgroundColor: index % 2 === 0 ? '#1f2937' : '#374151' 
                                }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                            </div>
                            
                            {/* Text Overlay */}
                            <div className="absolute bottom-0 left-0 p-6 z-10 w-full text-white">
                                <h3 className="text-xl font-bold mb-1 group-hover:text-[#A9D834] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm font-medium flex items-center space-x-2 opacity-80">
                                    <MapPin className="w-4 h-4" />
                                    <span>{project.location}</span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Projects CTA (Optional - secondary link) */}
                <div className="text-center mt-16">
                    <Link href="/projects" passHref>
                        <Button 
                            size="lg"
                            className={cn('text-md font-bold px-8 h-12 rounded-lg', 'bg-transparent hover:bg-gray-800 text-white border-2 border-white')}
                            variant="outline"
                        >
                            See Latest Projects {/* FIX: Updated text here */}
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}