import {
  Laptop,
  ShieldCheck,
  Stethoscope,
  Scale,
  Activity,
  TestTube,
  Pill,
  Home,
} from "lucide-react";

const services = [
  { label: "Virtual Primary Care", icon: Laptop },
  { label: "Preventive & Urgent Care", icon: ShieldCheck },
  { label: "Chronic Disease Management", icon: Stethoscope },
  { label: "Weight-Loss Program (GLP-1/Peptides)", icon: Scale },
  { label: "Men’s Wellness (HRT, Testosterone Evaluation)", icon: Activity },
  { label: "STD Testing & Treatment", icon: TestTube },
  { label: "Medication Management & Laboratory Reviews", icon: Pill },
  { label: "Limited Concierge Home-Visit Upgrades", icon: Home },
];

export default function AboutLumaRose() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif text-primary italic mb-4">
            About LumaRose
          </h2>

          <p className="text-sm tracking-widest uppercase text-muted-foreground">
            Virtual Primary Care <span className="mx-2">+</span>
            Preventive Care <span className="mx-2">+</span>
            Weight Management
          </p>
        </div>

        {/* Description */}
        <p className="max-w-4xl mx-auto text-center text-lg text-foreground leading-relaxed mb-20">
          We provide a virtual, membership-based health and wellness practice
          for adults age 18 and above. We focus on prevention, chronic disease
          management, weight-loss programs, and everyday health concerns — all
          provided conveniently within the comforts of your home.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="
                group
                rounded-2xl
                border border-muted
                p-10
                text-center
                bg-white
                hover:shadow-md
                transition
              "
            >
              <div className="flex justify-center mb-6">
                <Icon className="w-14 h-14 text-primary group-hover:scale-105 transition" />
              </div>

              <p className="text-sm font-semibold tracking-wide text-primary uppercase leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
