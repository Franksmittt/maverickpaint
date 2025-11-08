// app/not-found.tsx (Full Code - Custom 404 Page)
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Zap, Home, ArrowRight } from 'lucide-react';

export default function NotFound() {
    const PRIMARY_COLOR_BG = 'bg-[#121111]';
    const TERTIARY_COLOR = 'text-[#A9D834]';
    const SECONDARY_COLOR = 'text-[#5AD5E2]';
    const WHITE_TEXT = 'text-white';

    return (
        // Set height to fill viewport minus header/footer for a full-screen feel
        <div className={cn("flex flex-col items-center justify-center py-24 md:py-48 min-h-[70vh]", PRIMARY_COLOR_BG)}>
            
            <Zap className={cn("w-20 h-20 mb-6", TERTIARY_COLOR)} />
            
            <h1 className={cn("text-7xl font-extrabold mb-4", WHITE_TEXT)}>404</h1>
            
            <h2 className={cn("text-3xl font-semibold text-center mb-6", WHITE_TEXT)}>
                Page Not Found: Critical Error
            </h2>
            
            <p className="text-lg text-gray-400 text-center max-w-md mb-10">
                The URL you requested does not exist. The page may have moved or been decommissioned.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/" passHref>
                    <button className={cn("flex items-center px-6 h-12 rounded-lg text-lg font-bold", TERTIARY_COLOR, PRIMARY_COLOR_BG, "border-2 border-[#A9D834] hover:bg-white hover:text-[#121111]")}>
                        <Home className="w-5 h-5 mr-2" /> Back to Homepage
                    </button>
                </Link>
                <Link href="/contact" passHref>
                    <button className={cn("flex items-center px-6 h-12 rounded-lg text-lg font-bold", SECONDARY_COLOR, PRIMARY_COLOR_BG, "border-2 border-[#5AD5E2] hover:bg-white hover:text-[#121111]")}>
                        Contact Support <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                </Link>
            </div>
        </div>
    );
}