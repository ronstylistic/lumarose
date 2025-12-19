import Practitioner from "@/components/Practitioner";
import Navbar from "@/components/Navbar"; 
import AnimatedHero from "@/components/AnimatedHero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutLumaRose from "@/components/AboutLumaRose";
import MembershipPlans from "@/components/MembershipPlans";
import NonMembership from "@/components/NonMembership";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Provider from "@/components/Provider";
import FounderWelcome from "@/components/FounderWelcome";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <Provider />
      <FounderWelcome />
      <Services/>
      <Practitioner />
      <AboutLumaRose />
      <MembershipPlans />
      <NonMembership />
      <Contact  />
    
    </>
  );
}
