import { CheckCircle, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laboratory Testing",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-6">
            Laboratory Testing
          </h1>

          <p className="text-foreground mb-6">
           Guided lab testing centered around your care, every step of the way
          </p>

          <p className="text-muted-foreground max-w-3xl mx-auto">
            This information applies to all patients, including members and non-members of LumaRose Health & Wellness.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            
            <div className="flex flex-col">
              <div className="mb-16">
                <h2 className="text-2xl font-semibold text-primary mb-8">
                  How Laboratory Testing Work
                </h2>

                <ul className="space-y-4">
                  {[
                    "Labs are ordered only when clinically appropriate",
                    "Discussed during your visit before ordering",
                    "Purpose, options, and cost considerations reviewed in advance",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mt-6">
                  Patients may use Quest Diagnostics or their preferred laboratory when available. Cash-pay pricing may vary by laboratory, test type, and location.
                </p>
              </div>

              
              <div className="mb-16">
                <h2 className="font-semibold text-primary text-2xl mb-3">
                    Cost Transparency
                </h2>

                <ul className="space-y-3 text-muted-foreground">
                    {[
                    "Laboratory costs vary by test, laboratory, and location",
                    "Cost considerations are discussed before labs are ordered",
                    "Final pricing is confirmed by the laboratory prior to specimen collection",
                    ].map((item) => (
                    <li key={item} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5" />
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
              </div>

            </div>

            <div className="flex flex-col">
              <div className="mb-16">
                <h2 className="font-semibold text-primary text-2xl mb-3">
                    Laboratory Billing & Payment
                </h2>

                <p className="text-muted-foreground leading-relaxed mt-4">
                  Laboratory services are billed directly by the laboratory. LumaRose Health & Wellness does not perform laboratory testing and does not collect or mark up lab fees. Quest Diagnostics is a preferred partner; however, patients may choose another laboratory when appropriate.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="font-semibold text-primary text-2xl mb-3">
                   Important Notes
                </h2>

                 <p className="text-muted-foreground leading-relaxed mt-4">
                  Laboratory testing is optional unless medically required for treatment decisions. Not all visits require labs, and declining recommended testing may limit certain treatment options, which will be discussed during your visit.
                </p>
              </div>
            </div>
          </div>

          <p className="text-muted-foreground">Questions about labs? Please visit the <a href="/faq" className="text-primary hover:underline font-semibold">Laboratory FAQ </a>for common questions, result timing, and follow-up expectation</p>  
          
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
    <div className="mt-5">
      <h3 className="text-2xl font-semibold text-primary mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground">{text}</p>
    </div>
  );
}