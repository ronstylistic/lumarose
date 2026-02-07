import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import FounderWelcome from "@/components/FounderWelcome";
import WhyChooseLumaRose from "@/components/ui/WhyLumaRose";
import WhatToExpect from "@/components/ui/WhatToExpect";
import MembershipCare from "@/components/MembershipCare";
import FinalCTA from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FounderWelcome />
      <WhyChooseLumaRose />
      <WhatToExpect />
      <MembershipCare />
      <FinalCTA />
    
    </>
  );
}
