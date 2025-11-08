// app/_components/services-overview.tsx (Full Corrected Code - Final Background Fix)
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, Wrench, Droplet, PaintBucket, HardHat } from "lucide-react"; 
import { Button } from "@/components/ui/button";

// Define the strategic silos and assign specific visual traits
const SERVICE_SILOS = [
    {
        icon: Wrench,
        title: "Structural & Concrete Repairs",
        description: "We solve complex damage from the structure up: treating concrete cancer (spalling), crack injection, and expansion joint failures to ensure permanent stability.",
        href: "/structural-repairs",
        cta: "Explore Remediation Solutions",
        color: "text-[#A9D834]", // Tertiary Green
        bg_primary: true, // Black background for this item
        image_path: "/images/structural-repair.jpg", 
    },
    {
        icon: Droplet, 
        title: "Guaranteed Waterproofing & Damp",
        description: "Stop leaks permanently. We eliminate rising damp with chemical DPC injection and use guaranteed liquid, torch-on, or polyurethane systems for roofs and balconies.",
        href: "/waterproofing-services",
        cta: "View Waterproofing Systems",
        color: "text-[#5AD5E2]", // Secondary Blue
        bg_primary: false, // White background for this item
        image_path: "/images/waterproofing.jpg", 
    },
    {
        icon: PaintBucket,
        title: "Specialized High-Performance Coatings",
        description: "Certified applicators for advanced systems: hygienic, chemical-resistant flooring (Sika Ucrete), epoxy/polyurethane, and decorative Marmoran finishes.",
        href: "/specialized-coatings",
        cta: "See Applicator Status",
        color: "text-red-500", // Accent color
        bg_primary: true, // Black background for this item
        image_path: "/images/specialized-coating.jpg", 
    },
    {
        icon: HardHat,
        title: "Commercial & Industrial Painting",
        description: "Large-scale asset redecoration: warehouses, office parks, hospitals, and body corporate complexes. Owner-supervised, OHS compliant projects.",
        href: "/painting-services",
        cta: "Get a Commercial Quote",
        color: "text-yellow-500", // Accent color
        bg_primary: false, // White background for this item
        image_path: "/images/commercial-painting.jpg", 
    },
];

export function ServicesOverview() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary Black Background
    const PRIMARY_COLOR_TEXT = 'text-[#121111]'; // Primary Black Text Color (for white cards)
    const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green
    const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue
    const WHITE_TEXT = 'text-white';

    return (
        // FIX: Set the outer section background to Primary Black
        <section className={cn("py-16 md:py-24", PRIMARY_COLOR_BG)}>
            <div className="container mx-auto px-5">
                
                {/* Section Header - Text colors set for contrast against black background */}
                <header className="max-w-3xl mx-auto text-center mb-16">
                    <p className={cn("text-lg font-semibold uppercase", TERTIARY_COLOR)}>Our Proven Expertise</p>
                    <h2 className={cn("text-4xl font-extrabold mt-2 tracking-tight sm:text-5xl", WHITE_TEXT)}>
                        De-Risking Your Asset: Full-Spectrum Technical Solutions
                    </h2>
                    <p className={cn("mt-4 text-xl font-medium", WHITE_TEXT)}> 
                        As a specialized asset maintenance partner, we manage the four critical areas of long-term property value, ensuring verifiable quality and structural integrity.
                    </p>
                </header>

                {/* Dynamic List Layout */}
                <div className="space-y-12">
                    {SERVICE_SILOS.map((silo, index) => {
                        const isBlackBackground = silo.bg_primary;
                        // Determine background (Black or White)
                        const bgColor = isBlackBackground ? PRIMARY_COLOR_BG : 'bg-white';
                        // Determine text color based on background
                        const textColor = isBlackBackground ? WHITE_TEXT : PRIMARY_COLOR_TEXT;
                        const descriptionColor = isBlackBackground ? 'text-gray-300' : 'text-gray-600';
                        const iconColor = isBlackBackground ? TERTIARY_COLOR : silo.color;
                        const isReversed = index % 2 !== 0; 
                        
                        // Determine the button's final styling
                        const buttonColorClass = cn(
                            // Text color is Primary Black on White BG, or Tertiary Green on Black BG
                            isBlackBackground ? TERTIARY_COLOR : PRIMARY_COLOR_TEXT, 
                            // Hover effect: Tertiary Green background fill with appropriate text color
                            isBlackBackground ? 'hover:bg-white hover:text-[#121111]' : 'hover:bg-[#A9D834] hover:text-[#121111]', 
                            // Border: Tertiary Green/Secondary Blue border for visual cue
                            silo.title.includes('Repair') || silo.title.includes('Coatings') ? 'border border-[#A9D834]' : 'border border-[#5AD5E2]'
                        );

                        return (
                            <div 
                                key={silo.title}
                                // Added 2px white border and ensures the background is correctly applied
                                className={cn(
                                    "p-8 md:p-16 rounded-xl shadow-xl transition-all border-2 border-white", // White Stroke
                                    bgColor, 
                                    textColor
                                )}
                            >
                                <div 
                                    className={cn(
                                        "grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
                                        isReversed ? 'md:grid-flow-col-dense' : ''
                                    )}
                                >
                                    {/* Text Content (Left Column / Alternates Right) */}
                                    <div className={cn(isReversed ? 'md:col-start-2' : '')}>
                                        <silo.icon className={cn("w-12 h-12 mb-4", iconColor)} />
                                        <h3 className={cn("text-4xl font-bold mb-4", textColor)}>{silo.title}</h3>
                                        <p className={cn("text-lg mb-6", descriptionColor)}>{silo.description}</p>
                                        <Link href={silo.href} passHref>
                                            <Button 
                                                variant="outline" 
                                                className={cn("h-12 text-md font-bold w-full md:w-auto justify-between", buttonColorClass)}
                                            >
                                                {silo.cta} <ArrowRight className="w-5 h-5 ml-2" />
                                            </Button>
                                        </Link>
                                    </div>

                                    {/* Visual/Image Placeholder (Right Column / Alternates Left) */}
                                    <div 
                                        className={cn(
                                            "min-h-[300px] rounded-lg shadow-inner bg-cover bg-center transition-opacity duration-500", 
                                            isReversed ? 'md:col-start-1 md:row-start-1' : '' 
                                        )}
                                        style={{ backgroundImage: `url(${silo.image_path})` }}
                                    >
                                        {/* Placeholder text removed, replaced by image via style */}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}