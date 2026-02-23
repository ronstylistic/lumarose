"use client";

import { Plus, Minus } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { FAQ_SECTIONS, type FAQSection } from "./faq-data";
import { cn } from "@/lib/utils";

export default function FAQPageContent() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
       
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground">
                Quick answers about membership, care options, and policies.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="space-y-10 pb-24">
            {FAQ_SECTIONS.map((section) => (
              <SectionBlock key={section.id} section={section} />
            ))}
          </div>
        </div>
    </section>
  );
}

function SectionBlock({ section }: { section: FAQSection }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28"
      aria-labelledby={`faq-heading-${section.id}`}
    >
      <h2
        id={`faq-heading-${section.id}`}
        className="text-sm text-primary font-semibold uppercase tracking-wider text-muted-foreground mb-4"
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
              className={cn(
                "rounded-xl border border-gray-200 bg-gray-100/40 shadow-sm last:!border-b",
                "overflow-hidden"
              )}
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "group flex flex-1 items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-foreground",
                    "transition-colors hover:bg-muted/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2",
                    "data-[state=open]:bg-white data-[state=open]:shadow-none"
                  )}
                >
                  <span className="flex-1 pr-2">{item.q}</span>
                  <span className="flex shrink-0 items-center justify-center text-primary">
                    <Plus className="h-4 w-4 shrink-0 group-data-[state=open]:hidden" />
                    <Minus className="h-4 w-4 shrink-0 hidden group-data-[state=open]:block" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="px-5 pb-4 pt-0 text-sm leading-relaxed text-muted-foreground">
                <div className="pl-0">{item.a}</div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
