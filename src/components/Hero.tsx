import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Video, DollarSign } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image */}
      <Image
        src="/images/healthmembership.jpg" // replace with your photo
        alt="LumaRose Health & Wellness"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Thoughtful Care. Modern Medicine. Whole-Person Wellness
            </h1>

            <p className="text-white/90 text-lg max-w-xl mb-8">
              Personalized, nurse practitioner–led care designed to support your health, prevent illness, and help you feel your best—at every stage of life.
            </p>

            <p className="text-white/90 text-lg max-w-xl mb-8">
              Book Your Visit <br/>
              Explore Our Services
            </p>

            <p className="text-white/90 text-lg max-w-xl mb-8">
              Board-Certified Family Nurse Practitioner | 17+ Years of Clinical Experience Virtual care for adults 18+
            </p>

             <p className="text-white/90 text-lg max-w-xl mb-8">
              Disclaimer:  Services are individualized and provided based on clinical appropriateness.
            </p>

          
    
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button
                className="
                  bg-white
                  text-primary
                  hover:bg-secondary/90
                  font-bold
                  uppercase
                  transition-all
                  duration-300
                  w-full

                  text-base
                  py-4
                  px-6

                  sm:text-lg
                  sm:py-5
                  sm:px-8
                

                  md:text-2xl
                  md:py-6
                  md:px-10
                  md:w-auto

                  lg:text-4xl
                  lg:py-8
                  lg:px-12
                  lg:w-auto
                "
              >
                Book Your Consultation Today
              </Button>
            </div>

          </div>

          {/* Right column intentionally empty or subtle image focus */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
