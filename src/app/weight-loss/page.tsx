import { WeightLossPricing } from "@/components/WeightLossPricing";
import { CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-7xl mb-12 text-center mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
            Weight Loss & Metabolic Health
          </h1>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            Self-pay, non-membership medical weight-loss care. Pricing reflects
            visit complexity, time, and clinical decision-making. Final pricing is
            always reviewed prior to your visit.
          </p>
        </div>

        {/* TWO SERVICE CARDS */}
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
        <div className="mt-16 mx-auto px-8">
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

      <WeightLossPricing />
    </section>
  );
}

/* ================= COMPONENTS ================= */

function ServiceColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 space-y-8">
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
