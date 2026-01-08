import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function NonMembershipPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white mt-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Non-Membership Services & Pricing
          </h1>

          <p className="text-foreground mb-6">
            Personalized Care—On Your Terms
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            LumaRose offers flexible, self-pay medical care without a monthly
            commitment. These services are ideal for individuals seeking
            high-quality, professional healthcare on a one-time or occasional
            basis.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            All care is provided by a board-certified Family Nurse Practitioner
            with over 17 years of clinical experience through secure virtual
            visits and select in-home concierge services.
          </p>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-8">
            Who Non-Membership Care Is For
          </h2>

          <ul className="space-y-4">
            {[
             "Seeking care for a specific or short-term concern",
              "Interested in one-time or occasional visits without a subscription",
              "Exploring LumaRose before enrolling in a membership",
              "Looking for professional, high-quality care without ongoing commitment",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground mt-6">
            We welcome patients of all genders, identities, orientations, and
            health backgrounds. All care is delivered confidentially,
            respectfully, and without judgment.
          </p>
        </div>
      </section>


      <section className="bg-white py-8">        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* COLUMN 1 */}
          <ServiceColumn title="Virtual Care Services">
            <PriceGroup
              title="Virtual Primary Care"
              items={[
                ["Initial Visit", "$150 – $250"],
                ["Follow-Up Visit", "$100 – $175"],
                ["Complex or Chronic Care Visit", "$175 – $275"],
              ]}
            />

            <PriceGroup
              title="Urgent Virtual Care (Non-Emergency)"
              items={[
                ["Urgent Visit", "$125 – $200"],
                ["Extended / Complex Visit", "$175 – $250"],
              ]}
              note="Common conditions include infections, rashes, respiratory symptoms, UTIs, GI concerns, and medication-related issues."
            />

            <PriceGroup
              title="Prescription Refill Services"
              items={[
                ["Single Medication Refill", "$75 – $125"],
                ["Multiple Medication Review", "$100 – $175"],
                ["Chronic Medication Management", "$125 – $200"],
              ]}
              note="Non-controlled medications only. Controlled substances are not prescribed."
            />

            <PriceGroup
              title="Sexual Health Services"
              items={[
                ["Evaluation & Testing Coordination", "$150 – $225"],
                ["Treatment Visit", "$150 – $225"],
                ["Follow-Up Visit", "$100 – $150"],
              ]}
              note="Lab fees are not included and are paid directly to the laboratory if applicable."
            />

            <PriceGroup
              title="Preventive Wellness & Reviews"
              items={[
                ["Preventive Health Planning", "$125 – $200"],
                ["Lab Review Visit", "$100 – $175"],
                ["Complex Lab Review", "$150 – $225"],
                ["Medication Review / Deprescribing", "$125 – $200"],
              ]}
            />
          </ServiceColumn>

          {/* COLUMN 2 */}
          <ServiceColumn title="Specialty & Concierge Care">
            <PriceGroup
              title="Local Concierge Medical Care (In-Home)"
              items={[
                ["≤20 miles", "$200 – $250"],
                ["Extended Distance", "$250+"],
                ["Follow-Up Visit", "$175 – $225"],
                ["Extended Care Planning", "$75 – $125"],
              ]}
            />

            <PriceGroup
              title="Post-Operative Wound Care"
              items={[
                ["Initial Wound Evaluation", "$225 – $300"],
                ["In-Home Wound Visit (≤20 miles)", "$200 – $250"],
                ["Extended Distance Visit", "$250+"],
                ["Follow-Up Wound Visit", "$175 – $225"],
                ["Advanced Wound Care Planning", "$75 – $125"],
              ]}
            />
            <PriceGroup
              title="Medical Clearance & Documentation"
              items={[
                ["Work, School, or Travel Clearance", "$75 – $150"],
              ]}
            />
          </ServiceColumn>
        </div>

        {/* IMPORTANT NOTES */}
        <div className="mx-auto mt-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-semibold text-primary text-2xl">
              Important Notes
            </h3>
          </div>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "All services are self-pay and non-membership",
              "Final pricing is reviewed prior to your visit",
              "Pricing may vary based on medical complexity, time, and distance",
              "Labs, medications, imaging, and supplies are not included unless stated",
              "Controlled substances are not prescribed",
              "Concierge and in-home services are subject to provider availability",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
          
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="bg-white py-8 mx-auto">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-5">
            What’s Included
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <IncludedCard
              title="Virtual Visits"
              text="One-time telehealth appointments focused on evaluation, treatment, and patient education."
            />
            <IncludedCard
              title="Preventive & Acute Care"
              text="Support for acute concerns, symptom evaluation, and preventive health guidance."
            />
            <IncludedCard
              title="Chronic Condition Support"
              text="Ongoing management and follow-up for stable chronic conditions requiring clinical oversight."
            />
            <IncludedCard
              title="Whole-Person Support"
              text="Care addressing weight, stress, mood, and overall wellness—because health is never one-dimensional."
            />
          </div>
        </div>
      </section>

      {/* SEXUAL HEALTH */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Sexual & Reproductive Health
          </h2>

          <p className="text-muted-foreground mb-6">
            Confidential, inclusive, judgment-free care for adults of all
            identities.
          </p>

          <ul className="space-y-3">
            {[
              "Sexual health risk assessment and counseling",
              "STD / STI screening coordination",
              "Evaluation of symptoms or exposure concerns",
              "Treatment of select STDs / STIs",
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
      </section>

      {/* WOUND CARE */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Post-Operative Wound Care Support
          </h2>

          <p className="text-muted-foreground mb-6">
            Specialized support to promote healing and recovery following
            surgery, led by an experienced clinician with a strong background in
            wound care.
          </p>

          <ul className="space-y-3">
            {[
              "Virtual or in-home wound assessments",
              "Monitoring of healing progress",
              "Wound care education and dressing guidance",
              "Infection prevention support",
              "Care coordination with your surgical team",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm text-muted-foreground mt-4">
            These services support healing and do not replace surgical follow-up
            or emergency care.
          </p>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="bg-white py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            What to Expect
          </h2>

          <ul className="space-y-3">
            {[
              "Confidential, inclusive, and respectful care",
              "Focused, one-on-one visits that prioritize quality",
              "Clear communication and patient education",
              "Evidence-based treatment plans tailored to your needs",
              "Secure follow-up guidance and care coordination",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-4 w-4 text-secondary mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Schedule a Visit?
        </h2>

        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book online or contact us to determine if non-membership care is right
          for you.
        </p>

        <Button size="lg" className="bg-primary text-white px-10">
          <Link href="/book">Book a Non-Membership Visit</Link>
        </Button>

        <p className="text-xs text-muted-foreground mt-8 max-w-3xl mx-auto">
          LumaRose does not replace emergency care. If you are experiencing a
          medical emergency, please call 911 or go to the nearest emergency
          department.
        </p>
      </section>
    </>
  );
}

/* ---------- COMPONENT ---------- */

function IncludedCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="bg-gray-100/40 rounded-2xl p-6 shadow-sm">
      <h3 className="font-semibold mb-2 text-lg text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}


function ServiceColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl space-y-8">
      <h1 className="text-3xl font-semibold text-primary flex items-center gap-3">
        {title}
      </h1>
      {children}
    </div>
  );
}

function PriceGroup({
  title,
  items,
  note,
}: {
  title: string;
  items: [string, string][];
  description?: string[];
  note?: string;
}) {
  return (
    <div className="bg-gray-100/40 shadow-sm rounded-2xl p-6 flex flex-col">
      <h3 className="font-semibold text-foreground mb-4">
        {title}
      </h3>

      <div className="space-y-3">
        {items.map(([label, price]) => (
          <div
            key={label}
            className="flex justify-between border-b border-primary/40 border-dashed"
          >
            <span className="text-sm">{label}</span>
            <span className="font-semibold text-primary">
              {price}
            </span>
          </div>
        ))}
      </div>

      {note && (
        <p className="text-xs text-muted-foreground mt-3">
          {note}
        </p>
      )}
    </div>
  );
}