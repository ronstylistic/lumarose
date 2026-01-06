import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Laptop,
  Bandage,
  HeartPulse,
  Brain,
  Stethoscope,
  Home,
  ArrowRight,
} from "lucide-react";

export default function NonMembershipPage() {
  return (
    <>
      {/* INTRO */}
      <section className="bg-white py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Non-Membership Services
          </h1>

          <p className="text-lg md:text-xl text-foreground mb-6">
            Personalized care—when you need it.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            LumaRose offers flexible, pay-per-visit care without a monthly
            commitment. All services are provided by a board-certified Family
            Nurse Practitioner with over 17 years of clinical experience through
            secure virtual visits and select in-home concierge care.
          </p>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-10">
            Who Non-Membership Care Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              "Care for a specific or short-term concern",
              "One-time or occasional visits without subscription",
              "Exploring LumaRose before joining membership",
              "Professional care without ongoing commitment",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-muted/40 p-5 rounded-xl"
              >
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <p className="text-muted-foreground max-w-3xl">
            We welcome patients of all genders, orientations, identities, and
            health histories. Care is delivered confidentially, respectfully,
            and without judgment.
          </p>
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="bg-muted/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-12">
            What’s Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Laptop,
                title: "Virtual Visits",
                text: "One-time telehealth visits focused on evaluation, treatment, and education.",
              },
              {
                icon: Stethoscope,
                title: "Preventive & Acute Care",
                text: "Support for common concerns, acute symptoms, and preventive guidance.",
              },
              {
                icon: HeartPulse,
                title: "Chronic Condition Support",
                text: "Management and follow-up for stable chronic health issues.",
              },
              {
                icon: Brain,
                title: "Whole-Person Support",
                text: "Weight management, stress, mood, and overall wellness support.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-gray-100/40 rounded-2xl p-6 shadow-sm"
              >
                <Icon className="h-6 w-6 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED CARE */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Sexual Health */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Sexual & Reproductive Health
            </h2>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Confidential, inclusive, judgment-free care for adults of all
              identities.
            </p>

            <ul className="space-y-3">
              {[
                "Sexual health risk assessment and counseling",
                "STD / STI screening coordination",
                "Evaluation of symptoms or exposure concerns",
                "Treatment of select STDs/STIs",
                "Preventive guidance and safer-sex education",
                "Follow-up care and coordination",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground mt-4">
              Lab fees are billed separately by third-party laboratories.
            </p>
          </div>

          {/* Wound Care */}
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Post-Operative Wound Care Support
            </h2>

            <ul className="space-y-3">
              {[
                "Virtual or in-home wound assessment",
                "Monitoring healing progress",
                "Wound care education and dressing guidance",
                "Infection prevention support",
                "Care coordination with your surgeon",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Bandage className="h-4 w-4 text-secondary mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-muted-foreground mt-4">
              These services support healing and do not replace surgical follow-up
              or emergency care.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-8">
            Transparent Pricing (Self-Pay)
          </h2>

          <p className="text-muted-foreground mb-10">
            Final pricing is reviewed with you prior to your visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PricingCard
              title="Virtual Visits"
              items={[
                ["Initial Visit", "$150 – $250"],
                ["Follow-Up Visit", "$100 – $175"],
                ["Complex / Chronic Visit", "$175 – $275"],
              ]}
            />

            <PricingCard
              title="Sexual Health Services"
              items={[
                ["Evaluation", "$125 – $200"],
                ["Testing Coordination", "$50 – $100"],
                ["Treatment Visit", "$150 – $225"],
                ["Follow-Up", "$100 – $150"],
              ]}
            />
          </div>
        </div>
      </section>

      {/* CONCIERGE */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-8">
            Concierge / In-Home Care
          </h2>

          <PricingCard
            title="In-Home Services"
            items={[
              ["In-Home Wound Care (≤20 miles)", "$200 – $250"],
              ["Extended Distance", "$250+"],
              ["Follow-Up Visit", "$175 – $225"],
              ["Extended Care Planning", "$75 – $125"],
            ]}
          />

          <p className="text-sm text-muted-foreground mt-4">
            Concierge services are subject to provider availability and location.
          </p>
        </div>
      </section>

      {/* EXPECTATIONS */}
      <section className="bg-muted/40 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            What to Expect
          </h2>

          <ul className="space-y-3">
            {[
              "Confidential, inclusive, respectful care",
              "Thoughtful, unhurried visits",
              "Clear education and communication",
              "Evidence-based treatment plans",
              "Secure follow-up guidance",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MEMBERSHIP BRIDGE */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Considering Membership Care?
          </h2>

          <p className="text-muted-foreground mb-6">
            Membership may offer greater continuity and value if you anticipate
            ongoing care needs.
          </p>

          <Link
            href="/membership"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:text-primary"
          >
            Learn More About Membership Care
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Schedule?
        </h2>

        <p className="text-muted-foreground mb-8">
          LumaRose is here to support you—when you need care, without commitment.
        </p>

        <Button size="lg" className="bg-primary text-white px-10">
          Book a Non-Membership Visit
        </Button>
      </section>

      {/* FOOTNOTE */}
      <section className="bg-white py-12">
        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto px-6">
          All services are provided based on clinical appropriateness. Certain
          conditions may require in-person evaluation or referral. Emergency
          care is not provided.
        </p>
      </section>
    </>
  );
}

/* Pricing Card */
function PricingCard({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div className="bg-gray-100/40 rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map(([label, price]) => (
          <li key={label} className="flex justify-between border-b border-dotted border-primary/40">
            <span>{label}</span>
            <span className="font-medium">{price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
