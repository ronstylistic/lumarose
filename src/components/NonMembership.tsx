"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import {
  Stethoscope,
  Home,
  Scale,
  TestTube,
  Activity,
  ClipboardList,
  FileText,
  FlaskConical,
} from "lucide-react";

type Service = {
  name: string;
  price: string;
  note?: string;
  badge?: string;
};

type Section = {
  id: string;
  title: string;
  icon: React.ElementType;
  services: Service[];
};

const sections: Section[] = [
  {
    id: "virtual",
    title: "Virtual Visits for Non-Members",
    icon: Stethoscope,
    services: [
      { name: "Sick visit / urgent concern", price: "$89", badge: "Urgent" },
      { name: "Medication refill visit", price: "$49" },
      { name: "Chronic condition visit", price: "$125" },
      { name: "Weight-loss consultation", price: "$149" },
      { name: "Labs-only follow-up", price: "$45", badge: "Lab" },
    ],
  },
  {
    id: "home",
    title: "Home Visits (Distance-Based)",
    icon: Home,
    services: [
      { name: "0–20 miles", price: "$200" },
      { name: ">20 miles", price: "$250" },
      {
        name: "30+ miles (case-by-case)",
        price: "$300",
        note: "Includes exam, treatment plan, and applicable procedures",
      },
    ],
  },
  {
    id: "weight",
    title: "Weight-Loss Program Add-Ons",
    icon: Scale,
    services: [
      {
        name: "GLP-1 script refill (cash medication)",
        price: "$30",
        note: "Management fee",
      },
      { name: "Nutritional meal plan (PDF)", price: "$49 / month", badge: "Monthly" },
      { name: "Monthly accountability coaching", price: "$99 / month", badge: "Monthly" },
    ],
  },
  {
    id: "std",
    title: "STD Testing & Treatment",
    icon: TestTube,
    services: [
      {
        name: "STD panel order only",
        price: "$55",
        note: "Labs billed through insurance or lab",
        badge: "Lab",
      },
      { name: "STD panel + treatment visit", price: "$99" },
      {
        name: "Urgent STD visit (same day)",
        price: "$129 / month",
        badge: "Urgent",
      },
      { name: "Partner treatment", price: "$49 / month", badge: "Monthly" },
    ],
  },
  {
    id: "mens",
    title: "Men’s Health",
    icon: Activity,
    services: [
      { name: "Testosterone / HRT consult", price: "$149" },
      {
        name: "TRT ongoing management",
        price: "$300",
        note: "Includes labs & interpretation",
      },
    ],
  },
  {
    id: "procedures",
    title: "Procedure Fees & Add-On Services",
    icon: ClipboardList,
    services: [
      { name: "Ear irrigation", price: "$45" },
      { name: "Medical excuse letters", price: "$25" },
      { name: "Prior authorizations (complex)", price: "$35" },
      { name: "FMLA / work forms", price: "$75" },
      { name: "Lab draw coordination fee", price: "$15 – $25" },
    ],
  },
  {
    id: "forms",
    title: "Forms & Documentation",
    icon: FileText,
    services: [
      {
        name: "Physical exam",
        price: "$79",
        note: "Virtual unless in-person required",
      },
      { name: "School / work clearance", price: "$25" },
      {
        name: "Letters (school, jury duty, employer)",
        price: "$99 / month",
        badge: "Monthly",
      },
    ],
  },
  {
    id: "labs",
    title: "Laboratory (Cash Pricing)",
    icon: FlaskConical,
    services: [
      { name: "CBC", price: "$15 – $20" },
      { name: "CMP", price: "$15 – $20" },
      { name: "HbA1c", price: "$10 – $15" },
      { name: "Lipid panel", price: "$20 – $25" },
      { name: "Thyroid panel", price: "$25 – $35" },
      { name: "Vitamin D", price: "$45" },
      { name: "STD panel (full)", price: "$99 – $149" },
    ],
  },
];

export default function NonMembershipAccordion() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-serif italic text-primary text-center mb-12">
          Add-On / Non-Membership Prices
        </h2>

        <Accordion type="single" collapsible className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="bg-white px-6 border-0 data-[state=open]:border-primary data-[state=open]:border-2 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-secondary" />
                    <span className="text-lg font-semibold">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>

                <AccordionContent
                  className="
                    overflow-hidden
                    data-[state=open]:animate-accordion-down
                    data-[state=closed]:animate-accordion-up
                  "
                >
                  <div className="space-y-2">
                    {section.services.map((service, i) => (
                      <div
                        key={service.name}
                        className="relative flex justify-between gap-6 py-4"
                      >
                        {/* LEFT */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-medium">
                              {service.name}
                            </p>
                            {service.badge && (
                              <Badge variant="default" className="text-[10px] text-white">
                                {service.badge}
                              </Badge>
                            )}
                          </div>

                          {service.note && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {service.note}
                            </p>
                          )}
                        </div>

                        {/* PRICE */}
                        <span className="text-lg font-semibold whitespace-nowrap">
                          {service.price}
                        </span>

                        {/* DASHED DIVIDER */}
                        {i !== section.services.length - 1 && (
                          <span className="absolute left-0 bottom-0 w-full border-b border-dashed border-primary/50" />
                        )}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
