import Link from "next/link";
import { ArrowRight, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { revealFade, revealPrimary, revealSection } from "@/lib/motion";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section
      className="relative isolate flex min-h-[min(100dvh,56rem)] flex-col justify-center overflow-hidden px-6 py-20 md:py-28"
      aria-labelledby="not-found-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-2xl text-center">
        <div
          className={cn(
            "pointer-events-none select-none text-[clamp(5.5rem,22vw,11rem)] font-bold leading-none tabular-nums tracking-tighter text-primary/[0.07]",
            revealFade
          )}
          aria-hidden
        >
          404
        </div>

        <div className="-mt-[clamp(3.5rem,12vw,7rem)] space-y-8">
          <div className={cn("inline-flex items-center gap-2", revealPrimary)}>
            <span className="inline-flex h-9 items-center justify-center rounded-full border border-primary/15 bg-primary/[0.06] px-3 text-primary">
              <Sparkles className="h-4 w-4" strokeWidth={2} aria-hidden />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              Page not found
            </span>
          </div>

          <div className={cn("space-y-5", revealSection)}>
            <h1
              id="not-found-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl md:leading-tight"
            >
              This page isn&apos;t here—but your care journey can be.
            </h1>
            <p className="mx-auto max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              The link may be outdated or the address was mistyped. Return home,
              explore our services, or book a visit—we&apos;re glad to help you
              find what you need.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4",
              revealSection,
              "motion-safe:delay-100"
            )}
          >
            <Button
              size="lg"
              asChild
              className={cn(
                "min-h-12 w-full rounded-full bg-primary px-8 text-base font-semibold text-white shadow-md",
                "transition-colors duration-200 hover:bg-primary/90 hover:text-white",
                "sm:w-auto sm:min-w-[12rem]"
              )}
            >
              <Link href="/" className="inline-flex items-center justify-center gap-2">
                <Home className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                Back to home
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className={cn(
                "min-h-12 w-full rounded-full border-slate-200/90 bg-background/80 px-8 text-base font-semibold backdrop-blur-sm",
                "hover:bg-muted/50 sm:w-auto sm:min-w-[12rem]"
              )}
            >
              <Link href="/book" className="inline-flex items-center justify-center gap-2">
                Book a visit
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <nav
            className={cn(
              "border-t border-border/60 pt-10",
              revealFade,
              "motion-safe:delay-150"
            )}
            aria-label="Popular destinations"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Popular pages
            </p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-primary/90">
              <li>
                <Link
                  href="/services"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Care services
                </Link>
              </li>
              <li className="text-border" aria-hidden>
                ·
              </li>
              <li>
                <Link
                  href="/membership"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Membership
                </Link>
              </li>
              <li className="text-border" aria-hidden>
                ·
              </li>
              <li>
                <Link
                  href="/weight-management"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Weight management
                </Link>
              </li>
              <li className="text-border" aria-hidden>
                ·
              </li>
              <li>
                <Link
                  href="/contact"
                  className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
