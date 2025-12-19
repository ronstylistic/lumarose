import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/elder.jpg')", // replace if needed
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Thoughtful Care.
            <br />
            Modern Medicine.
            <br />
            <span className="text-secondary">
              Whole-Person Wellness.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Personalized, nurse practitioner–led care designed to support your
            health, prevent illness, and help you feel your best—at every stage
            of life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-secondary hover:text-white transition-colors px-8"
            >
              <Link href="/book">Book Your Visit</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8"
            >
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Trust Bar */}
          <div className="text-sm text-white/90 space-y-1 animate-in fade-in duration-700 delay-500">
            <p>
              Board-Certified Family Nurse Practitioner
              <span className="mx-2">•</span>
              17+ Years of Clinical Experience
            </p>
            <p>Virtual care for adults 18+</p>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-white/70 max-w-lg animate-in fade-in duration-700 delay-700">
            Disclaimer: Services are individualized and provided based on
            clinical appropriateness.
          </p>
        </div>
      </div>
    </section>
  );
}
