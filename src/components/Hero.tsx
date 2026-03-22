import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { revealHeroBody, revealHeroPanel, revealPrimary } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const TRUST_POINTS = [
  "Board-Certified Family Nurse Practitioner",
  "17+ Years of Clinical Experience",
  "Virtual care for adults 18+",
] as const;

export default function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[min(100dvh,56rem)] items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20"
      aria-label="Hero"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/elder.jpg"
          alt="Clinician consulting with a patient in a calm care setting"
          fill
          priority
          quality={72}
          sizes="100vw"
          className="object-cover object-center scale-105 motion-reduce:scale-100"
        />
      </div>

      {/* Layered overlays: depth + readable contrast */}
      <div
        className="absolute inset-0 -z-10 bg-slate-950/35 motion-reduce:backdrop-blur-0 backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/80 via-primary/65 to-secondary/55"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-[1.15]",
              revealPrimary
            )}
          >
            <span className="block">
              Finally, Healthcare That Feels Personal.
            </span>
            <span className="mt-3 block text-2xl font-medium text-white/95 sm:text-3xl md:text-4xl md:font-semibold">
              Trusted Care. Consistent Support. On Your Terms.
            </span>
          </h1>

          <p
            className={cn(
              "mx-auto mt-8 max-w-prose text-pretty text-base leading-relaxed text-white/90 sm:text-lg md:text-xl",
              revealHeroBody,
              "motion-safe:delay-100"
            )}
          >
            Personalized virtual care for busy adults focused on prevention,
            chronic care, and whole-person wellness so you can feel your best
            at every stage of life.
          </p>

          <div
            className={cn(
              "mt-10 flex flex-col items-stretch gap-3 sm:mx-auto sm:max-w-xl sm:flex-row sm:justify-center sm:gap-4",
              revealHeroBody,
              "motion-safe:delay-200"
            )}
          >
            <Button
              size="lg"
              asChild
              className="min-h-12 w-full rounded-full px-8 text-base font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-primary/90 hover:text-white sm:min-w-[12.5rem] sm:w-auto"
            >
              <Link
                href="/book"
                className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Book Your Visit
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="min-h-12 w-full rounded-full border border-white/25 bg-secondary px-8 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-secondary/90 hover:text-white sm:min-w-[12.5rem] sm:w-auto"
            >
              <Link
                href="/services"
                className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Explore Our Services
              </Link>
            </Button>
          </div>

          <div
            className={cn(
              "mx-auto mt-12 max-w-2xl rounded-2xl border border-white/15 bg-black/30 px-5 py-5 text-left shadow-md backdrop-blur-md sm:text-center sm:px-6",
              revealHeroPanel,
              "motion-safe:delay-300"
            )}
            role="region"
            aria-label="Credentials and disclaimer"
          >
            <ul className="mx-auto flex max-w-lg flex-col gap-2.5 text-sm font-medium leading-snug text-white sm:max-w-none sm:items-center sm:text-[0.9375rem]">
              {TRUST_POINTS.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2.5 sm:items-center sm:justify-center"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-white sm:mt-0"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/90 sm:text-sm">
              <span className="font-medium text-white">Disclaimer:</span>{" "}
              Services are individualized and provided based on clinical
              appropriateness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
