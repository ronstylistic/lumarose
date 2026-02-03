import { Check } from "lucide-react";


const MESSAGE = "Providing evidence-based virtual care with expertise in preventive and primary care,chronic disease management, weight management, and whole-person wellness."

export default function Trust() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-3">
           Experience You Can Trust
          </h2>
          <p className="text-muted-foreground">
           Board-Certified Family Nurse Practitioner | 17+ Years of Clinical Experience
          </p>

          <p className="text-muted-foreground mt-10">
            {MESSAGE}
          </p>
        </div>


        <div className="grid grid-cols-1 max-w-3xl mx-auto gap-4">
      {[
        "Preventive & primary care",
        "Chronic disease management",
        "Weight management",
        "Whole-person wellness",
      ].map((item) => (
        <div
          key={item}
          className="group bg-white/40 shadow-sm rounded-2xl p-6 flex items-center gap-3 transition
                hover:bg-primary/20"
        >
          <Check className="h-6 w-6 text-secondary" />
          <span className="text-foreground leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}
