import { CheckCircle, AlertCircle, Check } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Lab Information & Estimated Pricing
          </h1>

          <p className="text-foreground mb-6">
           Clear, transparent guidance for self-pay laboratory testing
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            LumaRose Health & Wellness coordinates laboratory testing when clinically appropriate to support preventive care, weight management, sexual health, and chronic disease monitoring.
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto mt-4">
           Lab services are self-pay and billed directly by the laboratory, not by LumaRose Health & Wellness. Pricing is determined by the lab and may vary based on test type and location.
          </p>
        </div>
      </section>

      {/* HOW LAB TESTING WORKS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-primary mb-8">
                  How Lab Testing Works
              </h2>

              <ul className="space-y-4">
                {[
                  "Lab tests are ordered only when clinically appropriate",
                  "Specimens are collected at a participating lab location or approved collection site",
                  "Lab services are billed directly by the laboratory",
                  "Payment is handled with the lab at the time of collection or billing",
                  "Final pricing is confirmed by the laboratory prior to testing",
                  "LumaRose does not mark up or collect payment for lab services"
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground mt-6">
                Patients may use Quest Diagnostics or their preferred laboratory when available.
    Cash-pay pricing may vary by laboratory, test type, and location.
              </p>
            </div>

            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold text-primary mb-8">
                  Estimated Self-Pay Lab Pricing
              </h2>

              <p className="text-muted-foreground mb-12">
                Ranges shown are estimates only. Final pricing is confirmed by the
                laboratory prior to testing.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <LabCard
                  title="Preventive & Routine Labs"
                  range="$25 – $150"
                  items={[
                    "Complete Blood Count (CBC)",
                    "Comprehensive Metabolic Panel (CMP)",
                    "Lipid Panel",
                    "Hemoglobin A1C",
                  ]}
                />

                <LabCard
                  title="Weight & Metabolic Health Labs"
                  range="$50 – $250"
                  items={[
                    "Thyroid studies",
                    "Fasting insulin",
                    "A1C",
                    "Vitamin D",
                  ]}
                />

                <LabCard
                  title="Sexual Health / STI Testing"
                  range="$50 – $300"
                  items={[
                    "Chlamydia & Gonorrhea",
                    "HIV",
                    "Syphilis",
                    "Hepatitis panels",
                  ]}
                />

                <LabCard
                  title="Hormonal & Nutritional Labs"
                  range="$50 – $300"
                  items={[
                    "Vitamin B12",
                    "Iron studies",
                    "Thyroid testing",
                    "Nutrient levels",
                  ]}
                />

                <LabCard
                  title="Inflammatory & Specialty Labs"
                  range="$75 – $400"
                  items={[
                    "CRP",
                    "ESR",
                    "Advanced or specialty panels",
                  ]}
                />
              </div>

            </div>
          </div>  
          
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="bg-white mt-16">
        <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
            <h2 className="font-semibold text-primary text-2xl">
            Important Notes About Lab Pricing
            </h2>
        </div>

        <ul className="space-y-3 text-sm text-muted-foreground">
            {[
            "Pricing varies by laboratory and geographic location",
            "Some labs offer discounted self-pay rates",
            "Insurance coverage is determined by the laboratory and your insurance plan",
            "Lab fees are not included in visit pricing unless explicitly stated",
            "Not all tests are listed on this page",
            ].map((item) => (
            <li key={item} className="flex gap-3">
                <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                <span>{item}</span>
            </li>
            ))}
        </ul>
      
        </div>
      </section>

      {/* WEIGHT LOSS & SEXUAL HEALTH LAB CONTEXT */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <InfoBlock
            title="Weight Management & Labs"
            text="Lab testing may be recommended as part of weight management or metabolic care to ensure safe, appropriate treatment planning."
          />

          <InfoBlock
            title="Sexual Health & Labs"
            text="or sexual health services, lab coordination is included in the evaluation visit. Lab fees are paid separately to the laboratory."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-primary mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <FAQ
              q="Are labs included in my visit price?"
              a="No. Lab testing is billed separately by the laboratory unless otherwise stated."
            />
            <FAQ
              q="Can you tell me the exact lab cost ahead of time?"
              a="The laboratory confirms final pricing prior to specimen collection. Estimated ranges are provided for planning purposes."
            />
            <FAQ
              q="Do I have to use a specific lab?"
              a="We coordinate with national laboratories, including Quest Diagnostics, and patient-preferred labs when available."
            />
            <FAQ
              q="Can I use insurance for labs?"
              a="Insurance coverage is determined by the laboratory and your insurance plan. Self-pay options are often available."
            />
            <FAQ
              q="Do I have to get labs done?"
              a="Labs are ordered only when clinically appropriate and discussed with you beforehand."
            />
          </div>
        </div>
      </section>

      {/* TRANSPARENCY STATEMENT */}
      <section className="bg-primary/5 py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Transparency Statement
          </h2>

          <p className="text-muted-foreground mb-8">
            All laboratory recommendations are based on clinical judgment and medical necessity. Patients are informed of expected lab testing and estimated costs before orders are placed.
          </p>

          <p className="text-sm text-muted-foreground">
            Have questions about lab testing? We’re happy to walk you through what’s recommended — before anything is ordered.
          </p>
        </div>
      </section>
    </>
  );
}

/* ---------- COMPONENTS ---------- */

function LabCard({
  title,
  range,
  items,
}: {
  title: string;
  range: string;
  items: string[];
}) {
  return (
    <div className="bg-gray-100/40 shadow-sm rounded-2xl p-6">
      <h3 className="font-semibold text-foreground mb-2">
        {title}
      </h3>
      <div className="text-xl font-semibold text-primary mb-4">
        {range}
      </div>

      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="h-4 w-4 text-secondary mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBlock({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground mb-1">{q}</h4>
      <p className="text-muted-foreground text-sm">{a}</p>
    </div>
  );
}
