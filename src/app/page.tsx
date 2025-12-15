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

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services/>
      <Practitioner />
      <AboutLumaRose />
      <MembershipPlans />
      <NonMembership />
      <Contact  />
    
    </>
  );
}
