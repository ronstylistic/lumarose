import Link from "next/link";
import { CircleCheck, CheckCircle, XCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


const includes = [
  {
    text: "Virtual primary care visits",
    icon: CircleCheck,
  },
  {
    text: "Acute care visits for common student health concerns (colds, sinus infections, uncomplicated UTIs, minor skin conditions)",
    icon: CircleCheck,
  },
  {
    text: "Birth control management for non-invasive methods only; routine medication refills included",
    icon: CircleCheck,
  },
  {
    text: "General emotional wellness check-ins as part of primary care support (not therapy or psychiatric care)",
    icon: CircleCheck,
  },
  {
    text: "Preventive care guidance and health education",
    icon: CircleCheck,
  },
  {
    text: "Secure messaging with your provider",
    icon: CircleCheck,
  }
];

const plans = [
 {
    name: "Monthly",
    price: "$60",
    period: "/month",
    features: [
      "Auto-billed monthly",
      "Proof of enrollment required"
    ],
  },
  {
    name: "Annual (Paid in Full)",
    price: "$600",
    period: "/year",
    popular: true,
    features: [
      "One-time annual payment",
      "Equivalent to two months free"
    ],
  },
   {
    name: "Annual (Split Pay)",
    price: "$600",
    period: "/every 6 months",
    features: [
      "$300 now + $300 later",
      "Second payment billed at 6 months",
      "Membership remains active while payments are current"
    ],
  }
];

export default function Page() {
  return (
    <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-3">
                    Frequently Asked Questions
                </h1>
            </div>

            <div className="space-y-6">
                <FAQ
                q="What is LumaRose Health & Wellness?"
                a="LumaRose Health & Wellness is a virtual, nurse practitioner–led medical practice providing personalized primary care, preventive care, chronic condition support, and select specialty services through a membership-based model."
                />

                <FAQ
                q="Is LumaRose a virtual practice?"
                a="Yes. All visits are conducted virtually. LumaRose does not offer in-person or procedural services."
                />

                <FAQ
                q="What states do you serve?"
                a="Services are provided to patients located in states where the provider is licensed at the time of the visit."
                />

                <FAQ
                q="How does the membership work?"
                a="Membership provides access to ongoing, personalized virtual care for a monthly or annual fee. Members receive continuity-based care rather than one-time, transactional visits."
                />

                <FAQ
                q="Do I need insurance?"
                a="No. LumaRose is a cash-based practice. Insurance is not required."
                />

                <FAQ
                q="Are visits unlimited?"
                a="Visits are included as clinically appropriate, based on medical necessity and appropriate use as determined by the provider."
                 />
                
                <FAQ
                q="Can I cancel my membership?"
                a="Yes. Memberships may be canceled in accordance with practice policies provided at enrollment."
                />    
                
                <FAQ
                q="Who qualifies for the College Care Membership?"
                a="Patients ages 18–25 who are actively enrolled in an accredited college or university and canprovide proof of enrollment."
                />    
                
                <FAQ
                q="What proof of enrollment is required?"
                a="A current class schedule, student ID with current term, enrollment verification letter, or tuition receipt."
                />

                <FAQ
                q="Can parents pay for the membership?"
                a="Yes. Parents or guardians may pay on behalf of the student. The student remains the patient of record."
                />    

                <FAQ
                q="Do I have to be a member to receive care?"
                a="No. Limited pay-per-visit services are available for non-members, based on availability."
                />

                <FAQ
                q="Are labs included?"
                a="No. Labs are billed separately and paid directly to third-party laboratories."
                />   

                <FAQ
                q="Are medications included?"
                a="No. Prescription medications are paid directly to the pharmacy."
                />

                <FAQ
                q="Are labs included in my visit price?"
                a="No. Lab testing is billed separately by the laboratory unless otherwise stated."
                />

                <FAQ
                q="Can you tell me the exact lab cost ahead of time?"
                a="The laboratory confirms final pricing prior to specimen collection. Estimated ranges are provided for planning purposes."
                />

                <FAQ
                q="Do I have to use a specific lab?"
                a="We coordinate with national laboratories, including Quest Diagnostics, and patient-preferred labs when available."
                />

                <FAQ
                q="Can I use insurance for labs?"
                a="Insurance coverage is determined by the laboratory and your insurance plan. Self-pay options are often available."
                />
                
                <FAQ
                q="Do I have to get labs done?"
                a="Labs are ordered only when clinically appropriate and discussed with you beforehand."
                />   

                <FAQ
                q="Do you provide therapy or psychiatric care?"
                a="LumaRose provides primary care–based emotional wellness support. Therapy and specialty psychiatric care are not provided."
                />

                <FAQ
                q="What if I need emergency care?"
                a="LumaRose does not provide emergency services. For emergencies, call 911 or go to the nearest emergency department."
                />

                <FAQ
                q="Are there late cancellation or no-show fees?"
                a="Yes. Late cancellation and no-show policies apply and are outlined during enrollment."
                />
            </div>

        </div>
    </section>

  );
}


function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="group
        bg-gray-100/40
        rounded-2xl
        p-6
        shadow-sm
        transition">
      <h4 className="font-semibold text-foreground mb-1">{q}</h4>
      <p className="text-muted-foreground text-sm">{a}</p>
    </div>
  );
}