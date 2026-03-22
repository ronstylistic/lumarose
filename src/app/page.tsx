import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FounderWelcome from "@/components/FounderWelcome";
import ScrollReveal from "@/components/ScrollReveal";
import WhyChooseLumaRose from "@/components/ui/WhyLumaRose";
import WhatToExpect from "@/components/ui/WhatToExpect";
import MembershipCare from "@/components/MembershipCare";
import FinalCTA from "@/components/FinalCta";

export const metadata: Metadata = {
  title: "Home | LumaRose Health & Wellness",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScrollReveal variant="primary">
        <FounderWelcome />
      </ScrollReveal>
      <ScrollReveal variant="card">
        <WhyChooseLumaRose />
      </ScrollReveal>
      <ScrollReveal variant="card">
        <WhatToExpect />
      </ScrollReveal>
      <ScrollReveal variant="card">
        <MembershipCare />
      </ScrollReveal>
      <ScrollReveal variant="primary">
        <FinalCTA />
      </ScrollReveal>
    </>
  );
}
