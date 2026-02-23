import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Corporate Wellness
          </h1>

          <p className="text-xl font-medium text-foreground mb-4">
            Corporate Health Strategy — Simplified.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            LumaRose partners with Texas businesses to provide clinically guided
            preventive and chronic disease support designed to strengthen
            workforce health, reduce risk, and improve long-term productivity.
          </p>

          <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link href="/book">Schedule a Corporate Consultation</Link>
          </Button>
        </div>
      </section>

      {/* OUR CORPORATE SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-12 text-center">
            Our Corporate Services
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Screening Events */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  On-Site or Virtual Wellness Screening Events
                </h3>
                <p className="text-sm text-muted-foreground">
                  Structured health screening experiences tailored to your
                  organization.
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {screeningFeatures.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-medium text-primary pt-2">
                  Investment begins at $1,500 per event.
                </p>
                <p className="text-xs text-muted-foreground">
                  Customized proposals available based on company size and needs.
                </p>
              </CardContent>
            </Card>

            {/* Monthly Partnerships */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Monthly Corporate Wellness Partnerships
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing clinical partnership to support workforce health and
                  prevention.
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {partnershipFeatures.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground pt-2">
                  Monthly partnerships are customized based on workforce size and
                  service scope.
                </p>
              </CardContent>
            </Card>

            {/* Executive Package */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Executive Health & Performance Package
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designed for leadership teams seeking comprehensive health
                  oversight and metabolic clarity.
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {executiveFeatures.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground pt-2">
                  Executive packages available upon consultation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* THREE COLUMNS: Why Corporate Wellness Matters | Who We Serve | Why Partner */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Why Corporate Wellness Matters */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Why Corporate Wellness Matters
                </h3>
                <p className="text-sm text-muted-foreground">
                  Employee health directly impacts performance, morale, and
                  operational stability. Chronic conditions such as hypertension,
                  obesity, and diabetes often go unmanaged due to limited
                  preventive oversight.
                </p>
                <p className="text-sm text-muted-foreground">
                  LumaRose brings structured medical guidance into the workplace
                  — proactively supporting health rather than reacting to
                  complications.
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {whyMattersBullets.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Who We Serve */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Who We Serve
                </h3>
                <p className="text-sm text-muted-foreground">
                  LumaRose partners with:
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {whoWeServe.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Why Partner With LumaRose */}
            <Card className="flex flex-col shadow-lg border border-gray-200 bg-gray-100/40">
              <CardHeader>
                <h3 className="text-xl font-semibold text-primary">
                  Why Partner With LumaRose
                </h3>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <ul className="space-y-2">
                  {whyPartner.map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <Check className="h-4 w-4 text-secondary mt-1 shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100/40 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Let&apos;s Build a Healthier Workforce.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Schedule a 15-minute consultation to discuss your organization&apos;s
            goals and explore a customized partnership.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 mb-10"
          >
            <Link href="/book">Request Corporate Consultation</Link>
          </Button>
          <div className="text-muted-foreground text-sm space-y-1">
            <p>
              <a
                href="mailto:care@lumarosewellness.com"
                className="text-primary hover:underline"
              >
                care@lumarosewellness.com
              </a>
            </p>
            <p>
              <a
                href="tel:+13466232689"
                className="text-primary hover:underline"
              >
                (346) 623-2689
              </a>
            </p>
            <p>Houston, Texas</p>
          </div>
        </div>
      </section>
    </>
  );
}
