import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore personalized healthcare services at LumaRose Health.",
};

import {
  ShieldPlus,
  FlaskConical,
  HeartPulse,
  Syringe,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Thoughtfully designed care that supports your health at every stage.
          </p>
        
           <p className="text-muted-foreground mt-4">
            LumaRose Health & Wellness provides personalized, evidence-based virtual care led by a boardcertified
Family Nurse Practitioner. Services focus on prevention, chronic condition
management, weight management, and whole-person wellness — delivered with intention,
clarity, and respect for your time.
           </p>
        </div>

        <div className="max-w-7xl mx-auto text-center mt-20 px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-3">
            What We Treat & Support
          </h2>
          <p className="text-muted-foreground mb-6">
            Attentive, comprehensive care designed to support prevention,
            long-term health, and focused one-on-one visits.
          </p>
        </div>


        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard
            title="Preventive & Primary Care"
            description="Proactive care focused on early detection, long-term health, and overall wellness."
            items={[
              "Annual wellness visits",
              "Preventive screening guidance",
              "Medication review and optimization",
              "Lifestyle and wellness counseling",
            ]}
          />

          <ServiceCard
            title="Chronic Disease Management"
            description="Ongoing support for long-term and complex medical conditions."
            items={[
              "Hypertension",
              "Diabetes and metabolic conditions",
              "Thyroid disorders",
              "High cholesterol",
              "Other chronic health concerns",
            ]}
          />

          <ServiceCard
            title="Nutrition & Lifestyle Support"
            description="Evidence-based guidance to support energy, balance, and sustainable wellness."
            items={[
              "Nutrition education (no meal plans)",
              "Lifestyle habit assessment",
              "Metabolic health support",
              "Lab review related to wellness goals",
            ]}
          />

          <ServiceCard
            title="Weight Management Support"
            description="Medically guided weight management focused on safety and sustainability."
            items={[
              "Medical evaluation for weight concerns",
              "Ongoing monitoring and progress support",
              "Lifestyle and behavior education",
              "GLP-1–based therapy when clinically appropriate",
            ]}
            note="Medications, labs, and supplements are billed separately when applicable."
          />

          <ServiceCard
            title="Urgent & Episodic Care"
            description="Virtual care for short-term or acute concerns for established patients."
            items={[
              "Minor illness or symptom evaluation",
              "Medication questions",
              "Short-term medical concerns",
            ]}
          />
        </div>

        {/* HOW CARE IS DELIVERED */}
        <div className="max-w-4xl mt-10 mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            How Care Is Delivered
          </h3>

          <ul className="space-y-3">
            {[
              "Secure, HIPAA-compliant virtual visits",
              "Individualized care plans",
              "Clear communication and follow-up",
              "Judgment-free, patient-centered care",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CHOOSING CARE OPTION */}
        <div className="bg-gray-100/40 shadow-sm rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Choosing Your Care Option
          </h3>

          <p className="text-muted-foreground mb-6 max-w-3xl">
            LumaRose offers both membership-based care and non-membership visits,
            so you can choose the level of continuity and support that fits your
            needs.
          </p>

          <ul className="space-y-3 mb-8 max-w-3xl">
            <li className="flex gap-3">
              <Check className="h-5 w-5 text-secondary mt-0.5" />
              <span>
                <strong>Membership Care:</strong> Best for patients seeking
                ongoing support, continuity, and proactive care.
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="h-5 w-5 text-secondary mt-0.5" />
              <span>
                <strong>Non-Membership Care:</strong> Ideal for one-time or
                occasional visits without a monthly commitment.
              </span>
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary text-white">
              <Link href="/membership">Explore Membership Options</Link>
            </Button>

            <Button className="bg-secondary text-white hover:bg-secondary/80">
              <Link href="/non-membership">
                View Non-Membership Services
              </Link>
            </Button>
          </div>
        </div>

        {/* IMPORTANT NOTE */}
        <p className="text-xs text-muted-foreground max-w-4xl mt-6">
          All services are provided based on clinical appropriateness. Not all
          services are suitable for every patient.
        </p>

      </div>
    </section>    
  );
  
}



function ServiceCard({
  title,
  description,
  items,
  note,
}: {
  title: string;
  description: string;
  items: string[];
  note?: string;
}) {
  return (
    <div className="bg-gray-100/40 shadow-sm rounded-2xl p-6 flex flex-col">
      <h3 className="text-xl font-semibold text-primary mb-2">
        {title}
      </h3>

      <p className="text-muted-foreground mb-4">
        {description}
      </p>

      <ul className="space-y-3 flex-1">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <Check className="h-4 w-4 text-secondary mt-1" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {note && (
        <p className="text-xs text-muted-foreground mt-4">
          {note}
        </p>
      )}
    </div>
  );
}