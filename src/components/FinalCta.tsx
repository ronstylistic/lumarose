import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCTA() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary py-16"
      aria-labelledby="final-cta-heading"
    >
      {/* Restrained depth: soft radial lift + bottom vignette (reads as solid mauve) */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(255,255,255,0.14),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.12]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2
          id="final-cta-heading"
          className="text-balance text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.15]"
        >
          Ready to get started?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-pretty text-base font-normal leading-relaxed text-white/85 md:max-w-lg md:text-lg md:leading-relaxed">
          Take the next step toward personalized, intentional care—on your
          schedule.
        </p>

        <div className="mt-12 flex flex-col items-stretch gap-4 sm:mt-14 sm:flex-row sm:justify-center sm:gap-5">
            <Button
              size="lg"
              asChild
              className={cn(
                "min-h-12 w-full rounded-full border-0 bg-white px-10 text-base font-semibold text-primary",
                "shadow-md shadow-black/20 ring-1 ring-white/40",
                "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                "sm:min-w-[13rem] sm:w-auto"
              )}
            >
              <Link
                href="/book"
                className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Book your visit
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "min-h-12 w-full rounded-full border-2 border-white/50 bg-transparent px-10 text-base font-semibold text-white",
                "shadow-none transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
                "hover:border-white/80 hover:bg-white/10 hover:text-white hover:shadow-sm hover:shadow-black/10",
                "sm:min-w-[13rem] sm:w-auto"
              )}
            >
              <Link
                href="/membership"
                className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Learn more about membership
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
