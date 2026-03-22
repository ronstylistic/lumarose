import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { revealPrimary, revealSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a visit",
  description:
    "Schedule a virtual appointment with LumaRose Health & Wellness using our secure online calendar.",
};

const DRCHRONO_SRC =
  "https://drchrono.com/scheduling/offices/dGhpcyBpcyAxNiBjaGFyc_tz9UWb6JvSpwcGgyD7fDQ=";

const schedulerShell = cn(
  "overflow-hidden rounded-2xl border border-slate-200/65 bg-white",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

export default function BookPage() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="book-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-12 max-w-3xl text-center md:mb-14",
              revealPrimary
            )}
          >
            <h1
              id="book-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Book a visit
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Choose a time that works for you. All visits are virtual; you&apos;ll
              complete intake and consents through our secure patient portal
              before your appointment.
            </p>
          </header>

          <div
            className={cn(
              schedulerShell,
              revealSection,
              "motion-safe:delay-75"
            )}
          >
            <div className="border-b border-slate-200/70 bg-muted/30 px-5 py-4 text-left md:px-6">
              <p className="text-sm font-semibold text-primary">
                Online scheduling
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Powered by our clinical scheduling partner. If the calendar
                doesn&apos;t load, try disabling content blockers or{" "}
                <Link
                  href="/contact"
                  className="font-medium text-foreground underline-offset-2 transition-colors hover:text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
            <iframe
              title="LumaRose Health & Wellness — schedule a virtual appointment"
              src={DRCHRONO_SRC}
              className="block h-[min(1000px,92vh)] w-full min-h-[520px] border-0 bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="book-cta-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_-10%,rgba(255,255,255,0.14),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.12]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <div className={revealPrimary}>
            <h2
              id="book-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Questions before you book?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Our team can help with membership, services, or what to expect at
              your first visit.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:w-auto sm:min-w-[min(100%,14rem)] sm:px-10"
                )}
              >
                <Link
                  href="/contact"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Contact us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-2 border-white/55 bg-transparent px-8 text-base font-semibold text-white",
                  "shadow-none transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
                  "hover:border-white hover:bg-white/10 hover:text-white",
                  "focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
                  "sm:w-auto sm:min-w-[min(100%,14rem)] sm:px-10"
                )}
              >
                <Link
                  href="/faq"
                  className="focus-visible:outline-none"
                >
                  Read FAQ
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
