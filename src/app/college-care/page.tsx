import Link from "next/link";
import { CircleCheck, CheckCircle, XCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


const includes = [
  {
    text: "Virtual primary care visits",
    icon: CircleCheck,
  },
  {
    text: "Acute care visits for common student health concerns (colds, sinus infections, uncomplicated UTIs, minor skin conditions)",
    icon: CircleCheck,
  },
  {
    text: "Birth control management for non-invasive methods only; routine medication refills included",
    icon: CircleCheck,
  },
  {
    text: "General emotional wellness check-ins as part of primary care support (not therapy or psychiatric care)",
    icon: CircleCheck,
  },
  {
    text: "Preventive care guidance and health education",
    icon: CircleCheck,
  },
  {
    text: "Secure messaging with your provider",
    icon: CircleCheck,
  }
];

const plans = [
 {
    name: "Monthly",
    price: "$60",
    period: "/month",
    features: [
      "Auto-billed monthly",
      "Proof of enrollment required"
    ],
  },
  {
    name: "Annual (Paid in Full)",
    price: "$600",
    period: "/year",
    popular: true,
    features: [
      "One-time annual payment",
      "Equivalent to two months free"
    ],
  },
   {
    name: "Annual (Split Pay)",
    price: "$600",
    period: "/every 6 months",
    features: [
      "$300 now + $300 later",
      "Second payment billed at 6 months",
      "Membership remains active while payments are current"
    ],
  }
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
                    College Care
                </h1>

                <p className="text-muted-foreground mb-6">
                    Simple, virtual primary care for actively enrolled college students
                </p>

                <p className="text-muted-foreground leading-relaxed">
                    The LumaRose College Care Membership is a virtual, membership-based
                    primary care option designed specifically for college students who
                    need convenient, reliable access to care while balancing academics
                    and life away from home.
                </p>

            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10">

                <div className="flex-2 px-6">
                    <h2 className="text-3xl font-semibold text-primary mb-8">
                        Eligibility Requirements
                    </h2>

                    <ul className="space-y-4 max-w-3xl">
                        {[
                        "Be 18–25 years old",
                        "Be actively enrolled in an accredited college or university",
                        "Provide proof of current enrollment at the time of sign-up",
                        ].map((item) => (
                        <li key={item} className="flex gap-3">
                            <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>

                    <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
                        Proof of enrollment is required to activate services and may be
                        requested annually to maintain eligibility.
                    </p>
                </div>
                

                <div className="flex-1 px-6">
                  <h2 className="text-3xl font-semibold text-primary mb-6">
                      Enrollment Verification
                  </h2>

                  <ul className="space-y-3 max-w-3xl">
                      {[
                      "Current class schedule",
                      "Student ID with current term",
                      "Enrollment verification letter",
                      "Tuition receipt for the current academic term",
                      ].map((item) => (
                      <li key={item} className="flex gap-3">
                          <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                          <span>{item}</span>
                      </li>
                      ))}
                  </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-10 mt-16">
              <div className="flex-2 px-6">
                <h2 className="text-3xl font-semibold text-primary mb-12">
                  What’s Included
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {includes.map(({ text, icon: Icon }) => (
                    <IncludedItem key={text} text={text} icon={Icon} />
                  ))}
                </div>
              </div>

              <div className="flex-1 px-6">
                <h2 className="text-3xl font-semibold text-primary mb-8">
                  Services Not Included
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Weight-loss programs",
                    "GLP-1 medications",
                    "Complex chronic disease management",
                    "In-person or procedural services",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 bg-white border border-border rounded-xl p-5"
                    >
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="mt-16 mx-auto px-6">
              <h2 className="text-3xl font-semibold text-primary mb-6">
                Visit Structure
              </h2>

              <p className="text-muted-foreground mb-6">
                Virtual visits are included as clinically appropriate and provided
                based on medical necessity and appropriate use, as determined by the
                provider.
              </p>

              <p className="text-muted-foreground">
                This membership is intended for routine and acute student healthcare
                needs and is not designed for complex, high-frequency, or specialty
                medical care. Students requiring more comprehensive care may be
                recommended to transition to a standard adult membership plan.
              </p>
            </div>


            <div className="mt-16 mx-auto px-6">
              <h2 className="text-3xl font-semibold text-primary mb-12">
                Pricing Options
              </h2>

              {/* Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8">
                {plans.map((plan) => (
                  <Card
                    key={plan.name}
                    className={`relative flex flex-col shadow-lg border-0 ${
                      plan.popular
                        ? "bg-primary/5"
                        : "bg-gray-100/40"
                    }`}>
                    
                    <CardHeader className="space-y-4">
                      <h3 className="text-xl font-semibold text-primary">
                        {plan.name}
                      </h3>

                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          {plan.price}
                        </span>
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-secondary mt-0.5" />
                            <span className="text-sm text-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm mt-16 px-6">
                LumaRose Health & Wellness is a virtual, cash-based medical practice.
                Insurance is not required. Laboratory testing, imaging, and
                medications ordered through third-party providers are not included
                and are billed separately.
              </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Enroll?
        </h2>

        <Button size="lg" className="bg-primary text-white px-12">
          <Link href="/book">Enroll in the College Care Membership</Link>
        </Button>
      </section>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function IncludedItem({ text, icon: Icon }: { text: string; icon: any }) {
  return (
    <div
      key={text}
      className="
        group
        bg-white/40
        rounded-2xl
        p-6
        shadow-sm
        transition
      "
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="
          flex h-12 w-12 items-center justify-center
          rounded-xl
          bg-secondary/15
          text-secondary
          shrink-0
        ">
          <Icon className="h-6 w-6" />
        </div>

        {/* Text */}
        <p className="text-foreground leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  features,
  highlight,
}: {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl shadow-sm p-8 text-center ${
        highlight
          ? "bg-primary/5"
          : "bg-gray-100/40"
      }`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-semibold text-primary mb-6">
        {price}
      </div>

      <ul className="space-y-3 text-sm text-muted-foreground">
        {features.map((item) => (
          <li key={item} className="flex justify-center gap-2">
            <Check className="h-5 w-5 text-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
