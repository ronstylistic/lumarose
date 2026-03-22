"use client";

import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQ_SECTIONS, type FAQSection } from "./faq-data";
import {
  revealFade,
  revealPrimary,
  revealSection,
  staggerClass,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

const accordionItemShell = cn(
  "overflow-hidden rounded-2xl border border-slate-200/65 bg-gray-100/40 !border-b-0",
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]",
  "transition-shadow duration-300 motion-reduce:transition-none",
  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.05),0_18px_48px_-10px_rgba(15,23,42,0.095)] motion-reduce:hover:shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

export default function FAQPageContent() {
  return (
    <>
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-background via-muted/25 to-background py-24 md:py-28"
        aria-labelledby="faq-heading"
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
              id="faq-heading"
              className="text-balance text-4xl font-semibold tracking-tight text-primary md:text-5xl"
            >
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg md:leading-relaxed">
              Quick answers about membership, care options, and practice
              policies—so you know what to expect before you book.
            </p>
          </header>

          <div className="mx-auto max-w-3xl space-y-14 pb-8 md:space-y-16 md:pb-12">
            {FAQ_SECTIONS.map((section, sectionIndex) => (
              <SectionBlock
                key={section.id}
                section={section}
                sectionIndex={sectionIndex}
              />
            ))}
          </div>

          <p
            className={cn(
              "mx-auto max-w-3xl border-t border-primary/70 pt-8 text-sm leading-relaxed text-muted-foreground",
              revealFade,
              "motion-safe:delay-100"
            )}
          >
            Information here is general in nature. Your provider will discuss
            what applies to you during your visit. For emergencies, call{" "}
            <span className="font-medium text-foreground">911</span> or go to
            the nearest emergency department.
          </p>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-primary py-16"
        aria-labelledby="faq-cta-heading"
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
              id="faq-cta-heading"
              className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:leading-tight"
            >
              Still have questions?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/90 md:text-lg">
              Book a visit or reach out—we&apos;re happy to help you find the
              right care option.
            </p>
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
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
                  href="/book"
                  className="text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Book a visit
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className={cn(
                  "min-h-12 w-full rounded-full border-2 border-white/50 bg-transparent px-8 text-base font-semibold text-white",
                  "shadow-none transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
                  "hover:border-white/80 hover:bg-white/10 hover:text-white hover:shadow-sm hover:shadow-black/10",
                  "sm:w-auto sm:min-w-[min(100%,14rem)] sm:px-10"
                )}
              >
                <Link
                  href="/contact"
                  className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionBlock({
  section,
  sectionIndex,
}: {
  section: FAQSection;
  sectionIndex: number;
}) {
  return (
    <section
      id={section.id}
      className={cn(
        "scroll-mt-28",
        revealSection,
        staggerClass(sectionIndex)
      )}
      aria-labelledby={`faq-heading-${section.id}`}
    >
      <h2
        id={`faq-heading-${section.id}`}
        className="mb-5 text-xs font-semibold uppercase tracking-wider text-primary md:text-sm"
      >
        {section.title}
      </h2>
      <Accordion type="multiple" defaultValue={[]} className="space-y-3">
        {section.items.map((item, idx) => {
          const value = `${section.id}-${idx}`;
          return (
            <AccordionItem
              key={value}
              value={value}
              className={accordionItemShell}
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "group flex min-h-12 w-full flex-1 cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5",
                    "text-base font-medium leading-snug text-foreground",
                    "transition-colors duration-200 motion-reduce:transition-none",
                    "hover:bg-white/40 data-[state=open]:bg-white/60",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                  )}
                >
                  <span className="min-w-0 flex-1 pr-2">{item.q}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-primary"
                    aria-hidden
                  >
                    <Plus
                      className="h-4 w-4 shrink-0 group-data-[state=open]:hidden"
                      strokeWidth={2.35}
                      aria-hidden
                    />
                    <Minus
                      className="hidden h-4 w-4 shrink-0 group-data-[state=open]:block"
                      strokeWidth={2.35}
                      aria-hidden
                    />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="border-t border-primary/20 px-5 pb-5 pt-0 md:px-6">
                <div className="pt-4 text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
