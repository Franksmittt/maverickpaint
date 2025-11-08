// app/_components/qa-module.tsx (Full Corrected Code - Variable Naming Fix)
'use client';

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ShieldCheck, Calendar, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QAModule() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green Text
    const SECONDARY_COLOR_BG = 'bg-[#5AD5E2]'; // Secondary Blue Background
    const SECONDARY_COLOR = 'text-[#5AD5E2]'; // Secondary Blue Text (for icons/accents)
    const WHITE_TEXT = 'text-white';
    
    // Custom button style: Tertiary Green background with Primary Black text
    const CTA_BUTTON_STYLE = cn('bg-[#A9D834]', "hover:bg-[#A9D834]/80 text-[#121111]");

    return (
        <div className={cn("p-8 md:p-12 rounded-xl shadow-2xl transition-all", PRIMARY_COLOR_BG)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Left Side: USP Header */}
                <div className="lg:col-span-1 text-center lg:text-left">
                    {/* FIX: Changed SECONDARY_COLOR to SECONDARY_COLOR_BG (since it is used as background for the icon) */}
                    <ShieldCheck className={cn("w-16 h-16 mx-auto lg:mx-0 mb-4", SECONDARY_COLOR, "p-1 rounded-full bg-[#5AD5E2] text-white")} />
                    <h3 className={cn("text-3xl font-extrabold mb-2", WHITE_TEXT)}>
                        Verifiable Quality. Guaranteed.
                    </h3>
                    <p className={cn("text-lg", TERTIARY_COLOR)}>
                        Our Independent Third-Party QA Process
                    </p>
                </div>

                {/* Center/Right: Feature Points */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-start space-x-4">
                        <FileText className={cn("w-6 h-6 mt-1 shrink-0", TERTIARY_COLOR)} />
                        <div>
                            <p className="font-semibold text-xl">Continuous Application Inspections</p>
                            <p className="text-gray-400">
                                An objective third-party expert verifies the **process**, not just the result. This includes surface preparation and material compliance at every critical stage.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <Calendar className={cn("w-6 h-6 mt-1 shrink-0", TERTIARY_COLOR)} />
                        <div>
                            <p className="font-semibold text-xl">Bi-Weekly Progress Reports</p>
                            <p className="text-gray-400">
                                You receive detailed substrate and progress reports every two weeks, providing verifiable proof and **ultimate transparency** for risk-averse clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-8 pt-6 border-t border-gray-700">
                <Link href="/our-process-independent-qa" passHref>
                    <Button 
                        size="lg"
                        className={cn('text-md font-bold px-8 h-12 rounded-lg', CTA_BUTTON_STYLE)}
                    >
                        See the Full QA Process <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}