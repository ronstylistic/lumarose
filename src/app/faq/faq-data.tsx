import type { ReactNode } from "react";

export interface FAQItem {
  q: string;
  a: string | ReactNode;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

export const FAQ_SECTIONS: FAQSection[] = [
  {
    id: "about",
    title: "About LumaRose Health & Wellness",
    items: [
      {
        q: "What is LumaRose Health & Wellness?",
        a:
          "LumaRose Health & Wellness is a virtual, nurse practitioner–led medical practice providing personalized primary care, preventive care, chronic condition management, and select specialty services through a modern, patient-centered model.",
      },
      {
        q: "Is LumaRose a virtual practice?",
        a:
          "Yes. All visits are conducted virtually. LumaRose does not offer in-person visits or procedural services.",
      },
      {
        q: "What states do you serve?",
        a:
          "Services are provided to patients located in states where the provider is licensed at the time of the visit.",
      },
    ],
  },
  {
    id: "membership",
    title: "Membership & Care Options",
    items: [
      {
        q: "Do I need to be a member to receive care?",
        a:
          "No. Limited pay-per-visit services are available for non-members based on availability. Membership provides access to ongoing, continuity-based care.",
      },
      {
        q: "How does the membership work?",
        a:
          "Membership provides access to personalized virtual care for a monthly or annual fee. Members receive continuity-based care rather than one-time, transactional visits.",
      },
      {
        q: "Can I become a member even if I don't need an appointment right away?",
        a:
          "Yes. You may enroll in a LumaRose membership even if you do not need a visit the same day. Membership allows you to establish care, secure access to your care team, and schedule visits when the need arises.",
      },
      {
        q: "Are visits unlimited?",
        a:
          "Visits are included as clinically appropriate, based on medical necessity and provider discretion.",
      },
      {
        q: "Can I cancel my membership?",
        a:
          "Yes. Memberships may be canceled in accordance with practice policies provided at enrollment.",
      },
    ],
  },
  {
    id: "college-care",
    title: "College Care Membership",
    items: [
      {
        q: "Who qualifies for the College Care Membership?",
        a:
          "Patients ages 18–25 who are actively enrolled in an accredited college or university and can provide proof of enrollment.",
      },
      {
        q: "What proof of enrollment is required?",
        a:
          "Accepted documentation includes a current class schedule, student ID with the current term, enrollment verification letter, or tuition receipt.",
      },
      {
        q: "Can parents or guardians pay for the membership?",
        a:
          "Yes. Parents or guardians may pay on behalf of the student. The student remains the patient of record.",
      },
    ],
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness",
    items: [
      {
        q: "Do you offer services for businesses or employer groups?",
        a: (
          <>
            Yes. LumaRose offers customized corporate wellness partnerships for
            small to mid-size businesses in Texas. Learn more on our{" "}
            <a
              href="/corporate-wellness"
              className="text-primary hover:underline font-semibold"
            >
              Corporate Wellness
            </a>{" "}
            page.
          </>
        ),
      },
      {
        q: "Are corporate wellness services billed through insurance?",
        a:
          "Corporate wellness partnerships are employer-sponsored services and are not billed through individual insurance plans. Customized proposals are provided based on company size and service needs.",
      },
      {
        q: "Are services available outside of Houston?",
        a:
          "Yes. While LumaRose is based in Houston, many services are available virtually throughout Texas. On-site availability may vary by location.",
      },
    ],
  },
  {
    id: "insurance-labs",
    title: "Insurance, Labs & Medications",
    items: [
      {
        q: "Can I use insurance at all?",
        a:
          "LumaRose Health & Wellness is a self-pay practice for medical visits and memberships. Insurance is not accepted for visit fees or membership plans. Insurance may be used outside of LumaRose for certain services, such as laboratory testing or medications, depending on the laboratory, pharmacy, and your individual insurance plan.",
      },
    ],
  },
  {
    id: "laboratory",
    title: "Laboratory Testing",
    items: [
      {
        q: "Do I have to get labs done?",
        a:
          "Laboratory testing is ordered only when clinically appropriate and is always discussed with you before testing is ordered.",
      },
      {
        q: "Are labs included in my visit or membership?",
        a:
          "No. Laboratory services are billed separately and paid directly to third-party laboratories.",
      },
      {
        q: "Do I have to use a specific lab?",
        a:
          "No. LumaRose partners with national laboratories, including Quest Diagnostics, but patients may use a preferred laboratory when appropriate.",
      },
      {
        q: "Can you tell me the exact lab cost ahead of time?",
        a:
          "Final laboratory pricing is confirmed by the laboratory prior to specimen collection. Cost considerations may be discussed during your visit for planning purposes.",
      },
    ],
  },
  {
    id: "medications",
    title: "Medications",
    items: [
      {
        q: "How are medications handled?",
        a:
          "Prescribed medications are filled through third-party pharmacies. Insurance coverage, self-pay pricing, and availability vary based on the medication and pharmacy used. Your provider will review medication options, including cost considerations, during your visit.",
      },
    ],
  },
  {
    id: "care-scope",
    title: "Care Scope & Safety",
    items: [
      {
        q: "Do you provide therapy or psychiatric care?",
        a:
          "LumaRose provides primary care–based emotional wellness support. Therapy and specialty psychiatric services are not provided.",
      },
      {
        q: "What if I need emergency care?",
        a:
          "LumaRose does not provide emergency services. For emergencies, call 911 or go to the nearest emergency department.",
      },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & Practice Policies",
    items: [
      {
        q: "Are there late cancellation or no-show fees?",
        a:
          "Yes. Late cancellation and no-show policies apply and are outlined during enrollment and scheduling.",
      },
      {
        q: "Do you observe holidays?",
        a:
          "LumaRose Health & Wellness observes major federal holidays. Appointment availability, response times, and laboratory processing may be limited on these days. Patients are encouraged to plan refills, labs, and follow-up visits accordingly.",
      },
    ],
  },
];

/** Normalize string for search: lowercase, trim, collapse spaces */
function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

/** Returns filtered sections and for each section only items that match (or all if section matches) */
export function filterFAQByQuery(
  sections: FAQSection[],
  query: string
): FAQSection[] {
  const nq = normalizeForSearch(query);
  if (!nq)
    return sections.map((s) => ({ ...s, items: s.items }));

  return sections
    .map((section) => {
      const sectionMatch = normalizeForSearch(section.title).includes(nq);
      const items = sectionMatch
        ? section.items
        : section.items.filter((item) => {
            if (normalizeForSearch(item.q).includes(nq)) return true;
            if (
              typeof item.a === "string" &&
              normalizeForSearch(item.a).includes(nq)
            )
              return true;
            return false;
          });
      return { ...section, items };
    })
    .filter((s) => s.items.length > 0);
}
