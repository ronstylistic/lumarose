import { Badge } from "@/components/ui/badge";

type Service = {
  name: string;
  price: string;
  note?: string;
  badge?: string;
};

type Section = {
  title: string;
  description?: string;
  services: Service[];
};

const sections: Section[] = [
  {
    title: "Virtual Visits for Non-Members",
    services: [
      { name: "Sick visit / urgent concern", price: "$89", badge: "Urgent" },
      { name: "Medication refill visit", price: "$49" },
      { name: "Chronic condition visit", price: "$125" },
      { name: "Weight-loss consultation", price: "$149" },
      { name: "Labs-only follow-up", price: "$45", badge: "Lab" },
    ],
  },
  {
    title: "Home Visits (Distance-Based)",
    description:
      "Includes travel, exam, treatment plan, and applicable procedures.",
    services: [
      { name: "0–20 miles", price: "$200" },
      { name: ">20 miles", price: "$250" },
      { name: "30+ miles (case-by-case)", price: "$300" },
    ],
  },
  {
    title: "Weight-Loss Program Add-Ons",
    services: [
      {
        name: "GLP-1 script refill (cash medication)",
        price: "$30",
        note: "management fee",
      },
      { name: "Nutritional meal plan (PDF)", price: "$49 / month" },
      { name: "Monthly accountability coaching", price: "$99 / month" },
    ],
  },
  {
    title: "STD Testing & Treatment",
    services: [
      {
        name: "STD panel order only",
        price: "$55",
        note: "Labs billed through insurance or lab",
        badge: "Lab",
      },
      { name: "STD panel + treatment visit", price: "$99" },
      { name: "Urgent STD visit (same day)", price: "$129 / month", badge: "Urgent" },
      { name: "Partner treatment", price: "$49 / month" },
    ],
  },
  {
    title: "Men’s Health",
    services: [
      { name: "Testosterone / HRT consult", price: "$149" },
      {
        name: "TRT ongoing management",
        price: "$300",
        note: "Includes labs & interpretation",
      },
    ],
  },
  {
    title: "Procedure Fees & Add-On Services",
    services: [
      { name: "Ear irrigation", price: "$45" },
      { name: "Medical excuse letters", price: "$25" },
      { name: "Prior authorizations (complex)", price: "$35" },
      { name: "FMLA / work forms", price: "$75" },
      { name: "Lab draw coordination fee", price: "$15 – $25" },
    ],
  },
  {
    title: "Forms & Documentation",
    services: [
      {
        name: "Physical exam",
        price: "$79",
        note: "Virtual unless in-person required",
      },
      { name: "School / work clearance", price: "$25" },
      { name: "Letters (school, jury duty, employer)", price: "$99 / month" },
    ],
  },
  {
    title: "Laboratory (Cash Pricing)",
    services: [
      { name: "Complete Blood Count (CBC)", price: "$15 – $20" },
      { name: "Comprehensive Metabolic Panel (CMP)", price: "$15 – $20" },
      { name: "Hemoglobin A1c (HbA1c)", price: "$10 – $15" },
      { name: "Lipid panel", price: "$20 – $25" },
      { name: "Thyroid panel", price: "$25 – $35" },
      { name: "Vitamin D", price: "$45" },
      { name: "STD panel (full)", price: "$99 – $149" },
    ],
  },
];

export default function Page() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
     
         <h2 className="text-3xl font-semibold text-primary text-center mb-3">
            Non-Membership Prices
          </h2>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              {/* Section Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {section.description}
                  </p>
                )}
              </div>

              {/* Services */}
              <div className="bg-muted/40 rounded-xl px-6 py-4">
                {section.services.map((service, i) => (
                  <div
                    key={service.name}
                    className="relative flex justify-between gap-6 py-4"
                  >
                    {/* Left */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">
                          {service.name}
                        </p>
                        {service.badge && (
                          <Badge variant="outline" className="text-[10px]">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      {service.note && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {service.note}
                        </p>
                      )}
                    </div>

                    {/* Price */}
                    <span className="text-lg font-semibold text-primary whitespace-nowrap">
                      {service.price}
                    </span>

                    {/* Dashed divider */}
                    {i !== section.services.length - 1 && (
                      <span className="absolute left-0 bottom-0 w-full border-b border-dashed border-border/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
