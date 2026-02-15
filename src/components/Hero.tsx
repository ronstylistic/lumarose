import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" aria-label="Hero section">
      
      {/* Background Image */}
      <Image
        src="/images/elder.jpg"
        alt="Virtual primary care consultation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-2xl">

          {/* SEO H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
            Personalized Virtual Primary Care & Weight Management
          </h1>

          {/* Branding Tagline */}
          <p className="text-2xl text-secondary font-medium mb-6">
            Thoughtful Care. Modern Medicine. Whole-Person Wellness.
          </p>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10">
            Personalized virtual care for busy adults focused on prevention,
            chronic care, and whole-person wellness so you can feel your best
            at every stage of life.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/book" aria-label="Book a virtual primary care visit">
              <Button
                size="lg"
                className="hover:bg-primary/80 text-white transition-colors px-8"
              >
                Book Your Visit
              </Button>
            </Link>

            <Link href="/services" aria-label="Explore healthcare services">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/80 px-8"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Bar */}
          <div className="text-sm text-white/90 space-y-1">
            <p>
              Board-Certified Family Nurse Practitioner
              <span className="mx-2">•</span>
              17+ Years of Clinical Experience
            </p>
            <p>Virtual care for adults 18+</p>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs text-white/70 max-w-lg">
            Disclaimer: Services are individualized and provided based on
            clinical appropriateness.
          </p>

        </div>
      </div>
    </section>
  );
}
