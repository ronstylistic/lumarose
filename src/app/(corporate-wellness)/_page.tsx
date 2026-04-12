import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { revealCard, revealPrimary, revealSection } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description:
    "LumaRose partners with Texas businesses to provide clinically guided preventive and chronic disease support designed to strengthen workforce health, reduce risk, and improve long-term productivity.",
};

const whyMattersBullets = [
  "Reduce absenteeism",
  "Strengthen chronic disease awareness",
  "Encourage preventive engagement",
  "Support sustainable employee wellness",
  "Promote long-term health outcomes",
];

const screeningFeatures = [
  "Blood pressure screening",
  "BMI and metabolic risk assessment",
  "Individual mini-consultations",
  "Preventive education",
  "Optional lab coordination",
  "De-identified employer summary report",
];

const partnershipFeatures = [
  "Quarterly screening events",
  "Monthly virtual educational sessions",
  "Priority scheduling for employees",
  "Discounted membership options",
  "Chronic disease management support pathways",
  "De-identified quarterly health trend reporting",
];

const executiveFeatures = [
  "Comprehensive lab evaluation",
  "Cardiometabolic risk review",
  "Personalized health strategy plan",
  "Quarterly follow-up visits",
  "Priority scheduling access",
];

const whoWeServe = [
  "Small to mid-size businesses",
  "Churches and faith-based organizations",
  "Professional service firms",
  "Real estate teams",
  "Construction companies",
  "Healthcare organizations",
  "Women- and minority-owned businesses",
];

const whyPartner = [
  "Board-certified Nurse Practitioner leadership",
  "Executive healthcare systems experience",
  "Data-driven chronic disease management",
  "Structured preventive care model",
  "Houston-based with statewide virtual capability",
];

const premiumCardClass = cn(
  "relative flex flex-col overflow-visible rounded-2xl border border-slate-200/65 bg-gray-100/40",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  revealCard
);

function CheckListRow({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3.5">
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

export default function Page() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="corporate-wellness-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <header
            className={cn(
              "mx-auto mb-16 max-w-3xl text-center md:mb-20",
              revealPrimary
            )}
          >
            <h1
              id="corporate-wellness-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Corporate Wellness
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-foreground md:text-xl md:leading-relaxed">
              Corporate Health Strategy — Simplified.
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              LumaRose partners with Texas businesses to provide clinically guided
              preventive and chronic disease support designed to strengthen
              workforce health, reduce risk, and improve long-term productivity.
            </p>
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                asChild
                className="min-h-12 rounded-full bg-primary px-8 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary/90 hover:text-white"
              >
                <Link
                  href="/book"
                  className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Schedule a Corporate Consultation
                </Link>
              </Button>
            </div>
          </header>

          <h2
            className={cn(
              "mb-12 text-center text-3xl font-semibold tracking-tight text-primary md:mb-14",
              revealSection,
              "motion-safe:delay-75"
            )}
          >
            Our Corporate Services
          </h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-9">
            <Card className={premiumCardClass}>
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  On-Site or Virtual Wellness Screening Events
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Structured health screening experiences tailored to your
                  organization.
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-4">
                <ul className="space-y-3">
                  {screeningFeatures.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
                <p className="pt-2 text-sm font-semibold text-primary">
                  Investment begins at $1,500 per event.
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Customized proposals available based on company size and needs.
                </p>
              </CardContent>
            </Card>

            <Card className={premiumCardClass}>
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  Monthly Corporate Wellness Partnerships
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Ongoing clinical partnership to support workforce health and
                  prevention.
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-4">
                <ul className="space-y-3">
                  {partnershipFeatures.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
                <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
                  Monthly partnerships are customized based on workforce size and
                  service scope.
                </p>
              </CardContent>
            </Card>

            <Card className={premiumCardClass}>
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  Executive Health &amp; Performance Package
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Designed for leadership teams seeking comprehensive health
                  oversight and metabolic clarity.
                </p>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col space-y-4">
                <ul className="space-y-3">
                  {executiveFeatures.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
                <p className="pt-2 text-xs leading-relaxed text-muted-foreground">
                  Executive packages available upon consultation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-3 lg:gap-9">
            <Card className={premiumCardClass}>
              <CardHeader className="space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  Why Corporate Wellness Matters
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Employee health directly impacts performance, morale, and
                  operational stability. Chronic conditions such as hypertension,
                  obesity, and diabetes often go unmanaged due to limited
                  preventive oversight.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  LumaRose brings structured medical guidance into the workplace
                  — proactively supporting health rather than reacting to
                  complications.
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {whyMattersBullets.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className={premiumCardClass}>
              <CardHeader className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  Who We Serve
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  LumaRose partners with:
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {whoWeServe.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className={premiumCardClass}>
              <CardHeader>
                <h3 className="text-xl font-semibold tracking-tight text-primary">
                  Why Partner With LumaRose
                </h3>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {whyPartner.map((item) => (
                    <CheckListRow key={item}>{item}</CheckListRow>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16 md:py-20"
        aria-labelledby="corporate-wellness-cta-heading"
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
              id="corporate-wellness-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl"
            >
              Let&apos;s Build a Healthier Workforce.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-white/85 md:text-lg">
              Schedule a 15-minute consultation to discuss your organization&apos;s
              goals and explore a customized partnership.
            </p>
            <div className="mt-10 sm:mt-12">
              <Button
                size="lg"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-0 bg-white px-8 text-base font-semibold text-primary",
                  "shadow-md shadow-black/20 ring-1 ring-white/40",
                  "transition-[box-shadow,background-color] duration-300 motion-reduce:transition-none",
                  "hover:bg-white hover:text-primary hover:shadow-lg hover:shadow-black/25 motion-safe:hover:shadow-xl",
                  "sm:mx-auto sm:w-auto sm:min-w-[min(100%,16rem)] sm:px-10"
                )}
              >
                <Link
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Request Corporate Consultation
                </Link>
              </Button>
            </div>
            <div className="mt-10 space-y-2 text-sm text-white/85">
              <p>
                <a
                  href="mailto:care@lumarosewellness.com"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  care@lumarosewellness.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+13466232689"
                  className="underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  (346) 623-2689
                </a>
              </p>
              <p className="text-white/75">Houston, Texas</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
