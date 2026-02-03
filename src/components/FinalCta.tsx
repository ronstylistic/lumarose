import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="bg-primary/20 py-28">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Content */}
        <div
          className="
            animate-in fade-in slide-in-from-bottom-4
            duration-700
          "
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-foreground mb-10 max-w-2xl mx-auto">
            Take the next step toward personalized, intentional care.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="
                bg-primary text-white
                hover:bg-secondary
                transition-colors
                px-8
              "
            >
              <Link href="/book">Book Your Visit</Link>
            </Button>

            <Button
              size="lg"
              className="
               bg-secondary text-white
               hover:bg-primary
               transition-colors
               px-8
              "
            >
              <Link href="/membership">
                Learn More About Membership
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
