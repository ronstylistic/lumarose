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
              Personalized Care for <br />
              Modern, Balanced Living
            </h1>

            <p className="text-white/90 text-lg max-w-xl mb-8">
              Virtual primary care, preventive wellness, and weight management —
              thoughtfully designed around your lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Button className="bg-white text-primary hover:bg-secondary/90 text-4xl py-10 px-8 font-bold cursor-pointer transition-all duration-300 uppercase">
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
