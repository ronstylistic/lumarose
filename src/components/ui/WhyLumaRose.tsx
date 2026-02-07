import {
  CircleCheck
} from "lucide-react";

const reasons = [
  {
    text: "NP-Led, Board-Certified Care is provided by an experienced, board-certified Family Nurse Practitioner.",
    icon: CircleCheck,
  },
  {
    text: "Expertise in Chronic & Complex Conditions Advanced experience managing long-term and medically complex health concerns",
    icon: CircleCheck,
  },
  {
    text: "Personalized Care Planning Individualized plans guided by your goals, history, and clinical needs.",
    icon: CircleCheck,
  },
  {
    text: "Secure, Convenient Virtual Access HIPAA-compliant virtual care designed for ease, privacy, and accessibility.",
    icon: CircleCheck,
  }
];

export default function WhyChooseLumaRose() {
  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            Why Choose LumaRose
          </h2>

          <p className="text-foreground leading-relaxed mb-6">
            Healthcare should feel intentional, personal, and rooted in trust. At LumaRose, care is guided by clinical experience, thoughtful communication, and a patient-centered approach.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
          {reasons.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="
                group
                bg-white/40
                rounded-2xl
                p-6
                shadow-sm
                transition
                hover:bg-primary/20
              "
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="
                  flex h-12 w-12 items-center justify-center
                  rounded-xl
                  bg-secondary/15
                  text-secondary
                  shrink-0
                ">
                  <Icon className="h-6 w-6" />
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
