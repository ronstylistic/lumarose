import { Check, CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <section className="bg-white py-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
          How Weight Loss Pricing Works
        </h1>

        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our weight-loss and metabolic health services are offered as self-pay, non-membership care for patients who want medical guidance without a monthly commitment. Pricing is structured as a range to reflect differences in visit complexity, time, and clinical decision-making.
        </p>

         <p className="text-muted-foreground max-w-3xl mx-auto mt-5">
          Your final fee is always reviewed and agreed upon before your visit begins.
        </p>
      </div>

      {/* Pricing Columns */}
      <div className="max-w-7xl mx-auto mb-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WeightLossCard
            title="Initial Evaluation"
            price="$175 – $250"
            description={[
                "Review of medical history, medications, and weight-loss goals",
                "Evaluation of metabolic health and contributing factors",
                "Discussion of treatment options and next steps",
                "Personalized weight-loss plan based on clinical findings",
            ]}
            note="This visit may take more time depending on medical complexity."
            />

            <WeightLossCard
            title="Follow-Up Visits"
            price="$125 – $175"
            description={[
                "Progress review",
                "Plan adjustments",
                "Ongoing support and education",
                "Medication review when clinically appropriate",
            ]}
            note="Most routine follow-ups fall toward the lower end of the range."
            />

            <WeightLossCard
            title="Metabolic / Obesity Management"
            price="$175 – $275"
            description={[
                "Multiple medical conditions affecting weight",
                "In-depth evaluation or coordination",
                "Extended time for clinical decision-making",
            ]}
            note="Higher complexity visits requiring extended clinical time."
            />

            <WeightLossCard
            title="Nutrition & Lifestyle Counseling"
            price="$100 – $150"
            description={[
                "Nutrition guidance",
                "Lifestyle and behavior support",
                "Goal setting and accountability",
            ]}
            note="May be used alone or alongside medical weight-loss care."
            />
        </div>

         {/* IMPORTANT NOTES */}
        <div className="mt-16 mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-semibold text-primary text-2xl">
              Important Notes
            </h3>
          </div>

          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "All weight-loss services are self-pay and non-membership",
              "Medications, labs, and supplements are not included in visit pricing",
              "Prescriptions are provided only when clinically appropriate",
              "Controlled substances are not prescribed",
              "Final pricing is always confirmed before your visit",
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
  );
}


function WeightLossCard({
  title,
  price,
  description,
  note,
}: {
  title: string;
  price: string;
  description: string[];
  note?: string;
}) {
  return (
    <div className="bg-gray-100/40 shadow-sm rounded-2xl p-6 flex flex-col">
      {/* Title */}
      <h3 className="text-lg font-semibold text-primary mb-2">
        {title}
      </h3>

      {/* Price */}
      <div className="text-2xl font-semibold text-foreground mb-4">
        {price}
      </div>

     
      {/* Included */}
      <ul className="space-y-3 flex-1">
        {description.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <Check className="h-4 w-4 text-secondary mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Note */}
      {note && (
        <p className="text-xs text-muted-foreground mt-4">
          {note}
        </p>
      )}
    </div>
  );
}