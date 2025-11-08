// app/_components/trust-bar.tsx (Full File Content)
import { cn } from "@/lib/utils";
import { Shield, Users, CheckSquare } from "lucide-react";

// Note: In a real project, these would be SVG/Image components.
// Here, we use text placeholders for logos and compliance.
const TRUST_SIGNALS = [
    {
        icon: Shield,
        text: "Independent 3rd Party QA",
        description: "Objective quality assurance on every project."
    },
    {
        icon: Users,
        text: "OHS Compliant Teams",
        description: "Fully insured and compliant with occupational health & safety standards."
    },
    {
        icon: CheckSquare,
        text: "Sika, Dulux, Marmoran Approved",
        description: "Certified applicators for leading coating manufacturers."
    },
];

export function TrustBar() {
    const PRIMARY_COLOR = 'bg-[#121111]'; // Primary Black
    const TERTIARY_COLOR = 'text-[#A9D834]'; // Tertiary Green

    return (
        // Renders immediately below the Hero section
        <div className={cn("py-4", PRIMARY_COLOR, "border-b border-white/20")}>
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
                    {TRUST_SIGNALS.map((signal) => (
                        <div key={signal.text} className="flex items-center justify-center space-x-3">
                            <signal.icon className={cn("w-6 h-6 shrink-0", TERTIARY_COLOR)} />
                            <div>
                                <p className="text-sm font-bold uppercase">{signal.text}</p>
                                <p className="text-xs text-gray-400 hidden sm:block">{signal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}