// app/page.tsx (Full Corrected Code - Removing White Space)
import { HeroSection } from './_components/hero-section';
import { ContactForm } from './_components/contact-form'; 
import { TrustBar } from './_components/trust-bar'; 
import { ServicesOverview } from './_components/services-overview';
import { ProjectSpotlight } from './_components/project-spotlight';
import { FinalCtaBanner } from './_components/final-cta-banner'; 

export default function Home() {
  return (
    <>
      {/* 1. Primary Conversion Zone */}
      <HeroSection />

      {/* 2. Primary Trust Signals */}
      <TrustBar />

      {/* 3. Service Navigation & Thesis */}
      <ServicesOverview />

      {/* 4. Project Portfolio Proof (Below Services) */}
      <ProjectSpotlight />

      {/* 5. Final Conversion Hook */}
      <FinalCtaBanner />

      {/* FIX: REMOVED the placeholder <section> that was causing white space/padding. */}
    </>
  );
}