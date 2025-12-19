import {
  ShieldCheck,
  UserRound,
  Activity,
  Laptop,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    text: "Led by an experienced, board-certified Family Nurse Practitioner",
    icon: ShieldCheck,
  },
  {
    text: "Personalized care plans tailored to your goals and lifestyle",
    icon: UserRound,
  },
  {
    text: "Expertise across complex and chronic health conditions",
    icon: Activity,
  },
  {
    text: "Secure, convenient virtual care",
    icon: Laptop,
  },
  {
    text: "Clear communication and ongoing support",
    icon: MessageCircle,
  },
];

export default function WhyChooseLumaRose() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            Why Choose LumaRose
          </h2>

          <p className="text-lg md:text-xl text-foreground mb-6">
            Healthcare should feel intentional, personal, and rooted in trust.
          </p>

          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            At LumaRose, care is led by experience—not volume. Visits are
            unhurried, plans are individualized, and patients are treated as
            true partners in their health.
          </p>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="
                group
                bg-gray-100/40
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
