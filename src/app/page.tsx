import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FounderWelcome from "@/components/FounderWelcome";
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
      <FounderWelcome />
      <WhyChooseLumaRose />
      <WhatToExpect />
      <MembershipCare />
      <FinalCTA />
    </>
  );
}
