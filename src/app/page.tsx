import { CaseStudyPreview } from "@/components/sections/home/CaseStudyPreview";
import { DifferentiatorSection } from "@/components/sections/home/DifferentiatorSection";
import { FinalCTA } from "@/components/sections/home/FinalCTA";
import { Hero } from "@/components/sections/home/Hero";
import { ProblemSection } from "@/components/sections/home/ProblemSection";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { TeamSection } from "@/components/sections/home/TeamSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <DifferentiatorSection />
      <ProcessSection />
      <CaseStudyPreview />
      <TeamSection />
      <FinalCTA />
    </>
  );
}
