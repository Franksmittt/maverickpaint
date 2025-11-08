// app/_components/final-cta-banner.tsx (Full Corrected Code - Naming Fix)
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Zap, ShieldCheck } from "lucide-react";

export function FinalCtaBanner() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]'; // Primary Black
    const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue
    const TERTIARY_COLOR_BG = 'bg-[#A9D834]'; // Tertiary Green
    const WHITE_TEXT = 'text-white';
    
    // Custom styling for the primary CTA button (Tertiary Green background, Primary Black text)
    const CTA_BUTTON_STYLE = cn(
        TERTIARY_COLOR_BG, 
        "hover:bg-[#A9D834]/80", 
        "text-[#121111]" // Text is Primary Black
    );

    return (
        // Set background to Primary Black for maximum impact
        <section className={cn("py-16 md:py-20", PRIMARY_COLOR_BG)}>
            <div className="container mx-auto px-5">
                <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                    
                    {/* Left Side: USP and Heading */}
                    <div className="max-w-3xl">
                        <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                            {/* Icon background is Tertiary Green, icon color is Primary Black */}
                            <ShieldCheck className={cn("w-8 h-8", TERTIARY_COLOR_BG, "text-[#121111] p-1 rounded-full")} />
                            {/* USP text is Tertiary Green for contrast against black */}
                            <p className={cn("text-xl font-bold uppercase text-[#A9D834]")}> 
                                The Gold Standard: Independently Verified Quality
                            </p>
                        </div>
                        
                        {/* Heading uses White text */}
                        <h2 className={cn("text-4xl sm:text-5xl font-extrabold tracking-tight", WHITE_TEXT)}>
                            Ready to Guarantee Your Project Success?
                        </h2>
                        {/* Body text uses White text */}
                        <p className={cn("mt-3 text-xl font-medium", WHITE_TEXT)}>
                            Stop fighting with guarantees. Get objective, third-party verification on preparation and application standards.
                        </p>
                    </div>

                    {/* Right Side: CTA Button */}
                    <div className="mt-10 lg:mt-0 lg:ml-8 flex-shrink-0">
                        <Link href="/contact" passHref>
                            <Button
                                size="xl"
                                className={cn('text-lg font-bold px-10 h-14 rounded-lg shadow-2xl', CTA_BUTTON_STYLE)}
                            >
                                Request Your Free Assessment
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}