import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  Briefcase,
  Check,
  Clock,
  Download,
  LayoutGrid,
  Plus,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  revealPrimary,
  revealSection,
  revealCard,
  staggerClass,
} from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FeatureCheckGrid } from "./FeatureCheckGrid";

export const metadata: Metadata = {
  title: "Weight Management",
  description:
    "Virtual medical weight and metabolic care at LumaRose—membership options for ongoing support, transparent self-pay program and visit pricing, medications when appropriate, and a personalized, evidence-informed approach.",
};

/** Static plan labels—compact row, left-aligned; width follows content. */
const membershipPlanNameTile = cn(
  "flex min-h-[3rem] w-fit max-w-full items-center rounded-none border border-primary bg-white px-5 py-3.5 text-left text-sm font-normal leading-snug text-primary sm:px-6"
);

/** Shown inline (reference layout); only Advanced features are listed in the grid below. */
const membershipPlanStripLabels = [
  "Advanced Health + Weight Management",
  "Concierge Advanced VIP",
] as const;

const membershipWeightFeatures = [
  "Monthly weight management visits",
  "Personalized weight loss plan",
  "Lifestyle and nutrition guidance",
  "Medication management when appropriate",
  "GLP-1 support when prescribed",
  "Ongoing monitoring & adjustments",
  "Annual labs included",
  "Supplement recommendations included",
] as const;

const nonMemberProgramFeatures = [
  "Comprehensive weight management evaluation",
  "Personalized weight loss plan",
  "Lifestyle & nutrition guidance",
  "Medication evaluation when appropriate",
  "Initial labs included",
  "3 total visits included",
  "Up to 3 prescription refills when appropriate",
  "Supplement recommendations & ongoing guidance",
];

const singleVisitFeatures = [
  "Weight management consultation",
  "Medical history & goals review",
  "Personalized recommendations",
  "Lifestyle & nutrition guidance",
  "Medication evaluation when appropriate",
  "Prescription provided when appropriate",
  "Supplement recommendations included",
  "Labs ordered if needed (billed separately)",
];

const followUpItems = [
  "Progress review",
  "Plan adjustments",
  "Medication management when appropriate",
  "Prescription refills when appropriate",
  "Continued weight loss guidance",
];

const medicationItems = [
  "GLP-1 medications",
  "Tirzepatide-based therapy",
  "Semaglutide-based therapy",
  "Oral weight management",
  "Metabolic support",
  "Vitamin support",
];

const differentiators: {
  icon: LucideIcon;
  text: string;
  fullWidth?: boolean;
}[] = [
  {
    icon: User,
    text: "Personalized care — not cookie-cutter treatment",
  },
  {
    icon: Star,
    text: "Medical evaluation before starting treatment",
  },
  {
    icon: LayoutGrid,
    text: "Flexible options — membership or single visit",
  },
  {
    icon: Download,
    text: "Ongoing provider support throughout your journey",
  },
  {
    icon: Clock,
    text: "Focus on long-term, sustainable success",
  },
  {
    icon: Plus,
    text: "Labs & monitoring included with membership",
  },
  {
    icon: Briefcase,
    text: "Transparent pricing — no hidden fees or surprises",
    fullWidth: true,
  },
];

function MembershipPlanNameStrip() {
  return (
    <div
      className="flex flex-col items-start gap-4 sm:flex-row sm:items-stretch sm:gap-5"
      role="group"
      aria-label="Membership weight management plan names"
    >
      {membershipPlanStripLabels.map((label) => (
        <div key={label} className={membershipPlanNameTile}>
          {label}
        </div>
      ))}
    </div>
  );
}


function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-semibold uppercase tracking-widest text-secondary",
        className
      )}
    >
      {children}
    </p>
  );
}

function MedicationCell({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5 rounded-lg border border-slate-200/65 bg-white px-4 py-4 shadow-sm md:px-5 md:py-5">
      <span
        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
        aria-hidden
      >
        <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
      </span>
      <span className="min-w-0 text-sm leading-relaxed text-foreground md:text-base">
        {children}
      </span>
    </li>
  );
}

function ApproachCard({
  icon: Icon,
  text,
  fullWidth,
  staggerIndex,
}: {
  icon: LucideIcon;
  text: string;
  fullWidth?: boolean;
  staggerIndex: number;
}) {
  return (
    <div
      className={cn(
        "flex gap-4 rounded-lg border border-slate-200/65 bg-white p-5 shadow-sm md:gap-5 md:p-6",
        fullWidth && "md:col-span-2",
        revealCard,
        staggerClass(staggerIndex)
      )}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary md:h-12 md:w-12"
        aria-hidden
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} />
      </div>
      <p className="min-w-0 self-center text-left text-base font-normal leading-snug text-foreground md:text-[1.0625rem]">
        {text}
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="weight-management-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-14 max-w-3xl text-center md:mb-16",
              revealPrimary
            )}
          >
            <h1
              id="weight-management-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Weight Management
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Personalized, medically guided care for sustainable results—not
              just a number on the scale.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              We evaluate metabolism, lifestyle, hormones, and history to build
              a plan that fits you. Choose membership for ongoing support, a
              structured program, or flexible single visits.
            </p>
          </header>

          {/* Membership weight management */}
          <div className={cn(revealSection, "motion-safe:delay-75")}>
            <Eyebrow>Best for ongoing support</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Membership Weight Management
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Included with membership for long-term, continuous guidance.
            </p>
            <div className="mt-10">
              <MembershipPlanNameStrip />
            </div>
            <div className={cn("mt-10", revealCard)}>
              <h3 className="sr-only">
                {
                  "Advanced Health + Weight Management — what's included"
                }
              </h3>
              <FeatureCheckGrid variant="panel" items={membershipWeightFeatures} />
            </div>
          </div>

          {/* Non-member program — layout matches membership block (no outer shell) */}
          <div className={cn(revealSection, "motion-safe:delay-100 mt-16 md:mt-20")}>
            <Eyebrow>One-time program</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Non-Member Weight Loss Program
            </h2>
            
            <p className="mt-2 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-2xl font-bold tabular-nums tracking-tight text-foreground md:text-3xl">
                $449
              </span>
            </p>

            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A structured program to help you start safely and confidently — with everything you need for a strong foundation.
            </p>
            <div className={cn("mt-10", revealCard)}>
              <FeatureCheckGrid
                variant="panel"
                items={nonMemberProgramFeatures}
              />
            </div>
          </div>

          {/* Single visit */}
          <div className={cn(revealSection, "motion-safe:delay-100 mt-16 md:mt-20")}>
            <Eyebrow>Flexible option</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Single Visit Consultation
            </h2>
            <p className="mt-2 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-2xl font-bold tabular-nums tracking-tight text-foreground md:text-3xl">
                $225
              </span>
              <span className="text-sm font-normal text-muted-foreground md:text-base">
                /visit
              </span>
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Ideal when you need a focused visit, a tune-up to an existing
              plan, or a second opinion before committing to a longer path.
            </p>
            <div className={cn("mt-10", revealCard)}>
              <FeatureCheckGrid variant="panel" items={singleVisitFeatures} />
            </div>
          </div>

          {/* Follow-up */}
          <div
            className={cn(
              revealSection,
              "motion-safe:delay-150 mt-16 md:mt-20"
            )}
          >
            <Eyebrow>CONTINUED CARE</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
              Weight Management Follow-Up
            </h2>
            <p className="mt-2 flex flex-wrap items-baseline gap-x-1.5">
              <span className="text-2xl font-bold tabular-nums tracking-tight text-foreground md:text-3xl">
                $175
              </span>
              <span className="text-sm font-normal text-muted-foreground md:text-base">
                /visit
              </span>
            </p>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              For continued progress, plan adjustments, and ongoing support.
            </p>
            <div className={cn("mt-10", revealCard)}>
              <FeatureCheckGrid variant="panel" items={followUpItems} />
            </div>
          </div>
        </div>

        {/* Medications — full-bleed gray band (matches site sections e.g. About, Trust) */}
        <div className="relative mt-20 w-full">
          <div className="relative left-1/2 w-screen max-w-none -translate-x-1/2 bg-gray-100 px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-7xl">
              <div className={cn(revealSection)}>
                <Eyebrow>When clinically appropriate</Eyebrow>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                  Medications May Include
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                All medications are prescribed based on individual medical evaluation. Medication cost is separate from visit or membership pricing.
                </p>
                <ul
                  className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  role="list"
                >
                  {medicationItems.map((line, i) => (
                    <MedicationCell key={i}>{line}</MedicationCell>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          {/* Differentiators */}
          <div className="mt-20 md:mt-24">
            <div className={cn(revealSection, "text-left")}>
              <Eyebrow>OUR APPROACH</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                What Makes LumaRose Different
              </h2>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                We believe lasting results come from personalized care, not
                one-size-fits-all solutions.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7">
              {differentiators.map((d, i) => (
                <ApproachCard
                  key={d.text}
                  icon={d.icon}
                  text={d.text}
                  fullWidth={d.fullWidth}
                  staggerIndex={i % 6}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA — same primary band + white button as non-membership page */}
      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="weight-management-cta-heading"
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
              id="weight-management-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Ready to Begin?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
            Choose the option that fits your needs. Whether you're just starting out or ready for ongoing support, we're here to help you succeed.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold uppercase tracking-wide text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:mx-auto sm:w-auto sm:min-w-[min(100%,18rem)] sm:px-10"
                )}
              >
                <Link
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Book a weight management visit
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
