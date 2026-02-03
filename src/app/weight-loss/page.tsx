import { Button } from "@/components/ui/button";
import { Check, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
    <section className="bg-white py-28">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center px-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
          Weight Loss Management
        </h1>

        <p className="text-foreground mb-6">
          Medical weight-loss and metabolic care designed around transparency, clinical
appropriateness, and personalized support
        </p>

        <p className="text-muted-foreground max-w-3xl mx-auto mt-5">
          Our weight-loss and metabolic health services are offered as self-pay, non-membership care for patients who want medical guidance without a monthly commitment. Pricing is structured as a range to reflect differences in visit complexity, time, and clinical decision-making.
        </p>

        <p className="text-muted-foreground max-w-3xl mx-auto mt-5">
          Prescription medications, including GLP-1–based therapies, are not included in visit pricing
and are prescribed only when clinically appropriate after evaluation.
        </p>

         <p className="text-muted-foreground max-w-3xl mx-auto mt-5">
          Your final fee is always reviewed and agreed upon before your visit begins.
        </p>
      </div>

      {/* Pricing Columns */}
      <div className="max-w-7xl mx-auto mb-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN — NON-MEMBERSHIP */}
            <div className="bg-white">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Weight Management Care
              </h2>
              <p className="text-sm font-medium text-muted-foreground mb-6">
                Non-Membership
              </p>

              <p className="text-muted-foreground mb-6">
                Medical weight-loss and metabolic care for patients seeking
                professional guidance without a monthly commitment.
              </p>

              <p className="text-muted-foreground mb-10">
                These self-pay visits are ideal for individuals who want
                evaluation, treatment planning, and follow-up on an as-needed
                basis.
              </p>

              {/* INITIAL VISIT */}
              <PricingBlock
                title="Initial Weight Management Evaluation"
                price="$225"
                items={[
                  "Review of medical history, medications, and weight-loss goals",
                  "Evaluation of metabolic health and contributing factors",
                  "Discussion of appropriate treatment options",
                  "Individualized care plan and next-step recommendations",
                ]}
              />

              {/* FOLLOW-UP VISIT */}
              <PricingBlock
                title="Weight Management Follow-Up Visit"
                price="$150"
                items={[
                  "Progress review",
                  "Plan adjustments when indicated",
                  "Ongoing education and support",
                  "Medication review when clinically appropriate",
                ]}
              />

              <div className="mt-16 mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="font-semibold text-primary text-2xl">
                    Important Notes
                  </h3>
                </div>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "All weight-loss services are self-pay and non-membership",
                    "Medications, labs, supplements, and pharmacy fees are not included",
                    "Prescriptions are provided only when clinically appropriate",
                    "Weight-loss outcomes vary by individual",
                    "Final pricing is confirmed prior to your visit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div> 
            </div>


            <div className="bg-white">
              <h2 className="text-2xl font-semibold text-primary mb-2">
                Considering Ongoing Support?
              </h2>
              
              <p className="text-muted-foreground mb-6">
                If you are managing chronic conditions alongside weight loss or require ongoing follow-up and medication management, a LumaRose membership plan may provide more consistent support.
              </p>

              <p className="text-muted-foreground mb-6">
               Membership options are designed for patients who benefit from continuity of care, regular follow-up, and a more proactive approach to health management.
              </p>

              <Button className="bg-primary text-white hover:bg-secondary">
              <Link
                href="/membership">
                  View Membership Options
              </Link>
            </Button>        

            </div>

         {/*    <WeightLossCard
            title="Initial Evaluation"
            price="$175 – $250"
            description={[
                "Review of medical history, medications, and weight-loss goals",
                "Evaluation of metabolic health and contributing factors",
                "Discussion of treatment options and next steps",
                "Individualized care plan based on clinical findings and patient goals",
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
                "In-depth medical evaluation and care coordination when indicated",
                "Extended time for clinical decision-making",
            ]}
            disclaimer="Weight-loss outcomes vary by individual. No specific results are guaranteed. All care is
personalized and based on clinical appropriateness."

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
            /> */}
        </div>

         {/* IMPORTANT NOTES */}
        {/* <div className="mt-16 mx-auto">
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
        </div> */}
      </div>
    </section>
    
    <section className="bg-primary/5 py-28 text-center">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Ready to Schedule a Visit?
        </h2>

        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
         Book a non-membership weight-loss visit to see if this care option is right for you.
        </p>

        <Button size="lg" className="bg-primary text-white px-10">
          <Link href="/book">Book a Weight Loss Visit</Link>
        </Button>
      </section>

    </>
  );
}


function WeightLossCard({
  title,
  price,
  description,
  disclaimer, 
  note,
}: {
  title: string;
  price: string;
  description: string[];
  disclaimer?: string;
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

      {/* Disclaimer */}
      {disclaimer && (
        <p className="text-xs text-muted-foreground mt-4">
          <span className="font-bold italic">Disclaimer: </span> {disclaimer}
        </p>
      )}

      {/* Note */}
      {note && (
        <p className="text-xs text-muted-foreground mt-4">
          {note}
        </p>
      )}
    </div>
  );
}

function PricingBlock({
  title,
  price,
  items,
}: {
  title: string;
  price: string;
  items: string[];
}) {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-2xl font-semibold text-primary">
          {price}
        </span>
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <Check className="h-4 w-4 text-secondary mt-1" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}