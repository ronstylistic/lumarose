import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, CheckCircle } from "lucide-react";
import Link from "next/link";


const plans = [
  {
    name: "Virtual Primary & General Care",
    price: "$200",
    period: "/visit",
    description:
      "Appropriate for:",
    features: [
      "General medical concerns",
      "Preventive or wellness visits",
      "Stable chronic condition check-ins",
      "Routine lab review",
      "Medication review (non-controlled)",
      "Health guidance and education"
    ],
    notes: "Includes clinical evaluation, treatment planning, and patient education."
  },
  {
    name: "Urgent Virtual Care (Non-Emergency)",
    price: "$175",
    period: "/visit",
    description:
      "For short-term or acute concerns, including:",
    features: [
      "Cold, flu, or respiratory symptoms",
      "Rashes, UTIs, gastrointestinal concerns",
      "Minor infections",
      "Medication-related questions"
    ],
    notes: "This service does not replace emergency or urgent in-person care."
  }
];


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
            Flexible care without a monthly commitment.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            LumaRose Health & Wellness offers self-pay medical visits for patients seeking one-time or occasional care. This option is ideal for individuals who want high-quality, personalized care without enrolling in a membership plan.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
            Visits are provided through secure virtual care and select in-home concierge services.
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
             "Patients seeking care for a specific or short-term concern",
              "Individuals who prefer pay-per-visit care",
              "Those exploring LumaRose before choosing a membership",
              "Patients who do not require ongoing follow-up or continuous access",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`
                  relative
                  flex flex-col
                  bg-gray-100/40
                  shadow-lg
                  border-0
                `}
              >
                
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

                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {plan.notes && (
                    <p className="text-sm text-muted-foreground mt-4">
                      {plan.notes}
                    </p>
                  )}

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      <section className="bg-white py-8">        
        <div className="max-w-7xl mx-auto px-6">
          <ServiceColumn title="Sexual Health Services"
            tagline="(Confidential, inclusive care)">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card
                className={`
                  relative
                  flex flex-col
                  bg-gray-100/40
                  shadow-lg
                  border-0
                `}
              >
                <CardHeader className="space-y-4">

                  <h3 className="text-lg font-semibold text-primary">
                      Sexual Health Visit
                  </h3>

                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      $175
                    </span>
                    <span className="text-muted-foreground">
                      /visit
                    </span>
                  </div>

                     
                  <p className="text-sm text-muted-foreground">
                    Includes:
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6">
                    {[
                      "Sexual health risk assessment and counseling",
                      "Evaluation of symptoms or exposure concerns",
                      "STD / STI testing coordination",
                      "Treatment for select STDs / STIs when clinically appropriate",
                      "Preventive education and guidance",
                    ].map((feature) => (
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

              <Card
                className={`
                  relative
                  flex flex-col
                  bg-gray-100/40
                  shadow-lg
                  border-0
                `}
              >
                <CardHeader className="space-y-4">

                  <h3 className="text-lg font-semibold text-primary">
                      Follow-Up Sexual Health Visit
                  </h3>

                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      $125
                    </span>
                    <span className="text-muted-foreground">
                      /visit
                    </span>
                  </div>

                     
                  <p className="text-sm text-muted-foreground">
                    Includes:
                  </p>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-6">
                    {[
                      "Review of results",
                      "Treatment follow-up or symptom reassessment",
                      "Additional counseling as needed"
                    ].map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-secondary mt-0.5" />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                   <p className="text-sm text-muted-foreground mt-4">
                  Lab fees are billed separately by third-party laboratories.
                  </p>

                </CardContent>
              </Card>
            </div>
          </ServiceColumn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* COLUMN 1 */}
            <ServiceColumn title="Prescription Refill Services"
              tagline="(Non-Controlled Medications Only)">
              <Card
                  className={`
                    relative
                    flex flex-col
                    bg-gray-100/40
                    shadow-lg
                    border-0
                  `}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-end justify-between gap-1">
                      <h3 className="text-lg font-semibold text-primary">
                        Single Medication Refill
                      </h3>

                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          $100
                        </span>
                        <span className="text-muted-foreground">
                          /visit
                        </span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-1">
                      <h3 className="text-lg font-semibold text-primary">
                        Multiple Medication Review & Refill
                      </h3>

                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          $150
                        </span>
                        <span className="text-muted-foreground">
                          /visit
                        </span>
                      </div>
                    </div>
                              
                    <p className="text-sm text-muted-foreground">
                      Includes:
                    </p>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6">
                      {[
                        "Clinical review of current medication(s)",
                        "Assessment for safety, appropriateness, and ongoing need",
                        "Refill authorization when clinically appropriate",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary mt-0.5" />
                          <span className="text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-muted-foreground mt-4">
                    Prescription quantity and duration are determined by clinical judgment.
  Controlled substances are not prescribed.
                    </p>
                  </CardContent>
                </Card>
            </ServiceColumn>


            <ServiceColumn title="In-Home Concierge Medical Visits"
              tagline="(Houston Area Only)">
              
              <Card
                  className={`
                    relative
                    flex flex-col
                    bg-gray-100/40
                    shadow-lg
                    border-0
                  `}
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-end justify-between gap-1">
                      <h3 className="text-lg font-semibold text-primary">
                        In-Home Medical Visit (≤20 miles)
                      </h3>

                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold text-foreground">
                          $250
                        </span>
                        <span className="text-muted-foreground">
                          /visit
                        </span>
                      </div>
                    </div>

                    <div className="flex items-end justify-between gap-1">
                      <h3 className="text-lg font-semibold text-primary">
                        Extended Distance or Complex Visit
                      </h3>

                      <div className="flex flex-col gap-1">
                        <div className="flex items-end gap-1">
                          <span className="text-4xl font-bold text-foreground">
                            $300
                          </span>
                          <span className="text-muted-foreground">
                            /visit
                          </span>
                        </div>

                        <span className="text-xs text-muted-foreground">
                          + (quoted prior to visit)
                        </span>
                      </div>
                      
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground mt-4">
                    In-home services are limited and subject to availability and clinical appropriateness.
                    </p>
                  </CardContent>
                </Card>
                
              {/* <PriceGroup
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
              /> */}
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
                "Pricing is confirmed prior to your visit",
                "Labs, imaging, medications, and supplies are not included unless stated",
                "Non-membership care does not include ongoing access outside the scheduled visit",
                "Controlled substances are not prescribed",
                "Concierge and in-home services are subject to availability",
                "This practice does not replace emergency care"
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
      {/* <section className="bg-white py-8 mx-auto">
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
      </section> */}

      {/* SEXUAL HEALTH */}
      {/* <section className="bg-white py-8">
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
 */}
      {/* WOUND CARE */}
      {/* <section className="bg-white py-8">
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
      </section> */}

      {/* WHAT TO EXPECT */}
      {/* <section className="bg-white py-8 mb-16">
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
      </section> */}

      {/* CTA */}
      <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Schedule?
        </h2>

        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Book a non-membership visit online to determine if this care option is right for you.
        </p>

        <Button size="lg" className="bg-primary text-white px-10">
          <Link href="/book">Book a Non-Membership Visit</Link>
        </Button>
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
  tagline,
  children,
}: {
  title: string;
  tagline?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl space-y-8">
      <div className="">
      <h1 className="text-3xl font-semibold text-primary">
        {title}
      </h1>
      {tagline && <span className="text-sm text-muted-foreground">{tagline}</span>}
      </div>
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