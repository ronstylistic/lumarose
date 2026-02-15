import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Explore transparent membership plans for virtual primary care, preventive medicine, chronic disease management, and weight management at LumaRose Health & Wellness.",
};

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
                <h1 className="text-2xl font-semibold text-primary">About LumaRose Health & Wellness</h1>
                <FAQ
                q="What is LumaRose Health & Wellness?"
                a="LumaRose Health & Wellness is a virtual, nurse practitioner–led medical practice providing personalized primary care, preventive care, chronic condition management, and select specialty services through a modern, patient-centered model."
                />

                <FAQ
                q="Is LumaRose a virtual practice?"
                a="Yes. All visits are conducted virtually. LumaRose does not offer in-person visits or procedural services."
                />

                <FAQ
                q="What states do you serve?"
                a="Services are provided to patients located in states where the provider is licensed at the time of the visit."
                />

                <h1 className="text-2xl font-semibold text-primary">Membership & Care Options</h1>
                <FAQ
                q="Do I need to be a member to receive care?"
                a="No. Limited pay-per-visit services are available for non-members based on availability. Membership provides access to ongoing, continuity-based care."
                />

                <FAQ
                q="How does the membership work?"
                a="Membership provides access to personalized virtual care for a monthly or annual fee. Members receive continuity-based care rather than one-time, transactional visits."
                />

                <FAQ
                q="Can I become a member even if I don’t need an appointment right away?"
                a="Yes. You may enroll in a LumaRose membership even if you do not need a visit the same day. Membership allows you to establish care, secure access to your care team, and schedule visits when the need arises."
                />

                <FAQ
                q="Are visits unlimited?"
                a="Visits are included as clinically appropriate, based on medical necessity and provider discretion."
                 />
                
                <FAQ
                q="Can I cancel my membership?"
                a="Yes. Memberships may be canceled in accordance with practice policies provided at enrollment."
                />    
                
                <h1 className="text-2xl font-semibold text-primary">College Care Membership</h1>
                <FAQ
                q="Who qualifies for the College Care Membership?"
                a="Patients ages 18–25 who are actively enrolled in an accredited college or university and can provide proof of enrollment."
                />    
                
                <FAQ
                q="What proof of enrollment is required?"
                a="Accepted documentation includes a current class schedule, student ID with the current term, enrollment verification letter, or tuition receipt."
                />

                <FAQ
                q="Can parents or guardians pay for the membership?"
                a="Yes. Parents or guardians may pay on behalf of the student. The student remains the patient of record."
                />

                <h1 className="text-2xl font-semibold text-primary">Insurance, Labs & Medications</h1>   
                 <FAQ
                q="Can I use insurance at all?"
                a="LumaRose Health & Wellness is a self-pay practice for medical visits and memberships. Insurance is
not accepted for visit fees or membership plans. Insurance may be used outside of LumaRose for
certain services, such as laboratory testing or medications, depending on the laboratory, pharmacy,
and your individual insurance plan."
                /> 

                <h1 className="text-2xl font-semibold text-primary">Laboratory Testing</h1>
                 <FAQ
                q="Do I have to get labs done?"
                a="Laboratory testing is ordered only when clinically appropriate and is always discussed with you before testing is ordered."
                />   

                <FAQ
                q="Are labs included in my visit or membership?"
                a="No. Laboratory services are billed separately and paid directly to third-party laboratories."
                />   

                 <FAQ
                q="Do I have to use a specific lab?"
                a="No. LumaRose partners with national laboratories, including Quest Diagnostics, but patients may use a preferred laboratory when appropriate."
                />   

                <FAQ
                q="Can you tell me the exact lab cost ahead of time?"
                a="Final laboratory pricing is confirmed by the laboratory prior to specimen collection. Cost considerations may be discussed during your visit for planning purposes."
                />

                <h1 className="text-2xl font-semibold text-primary">Medications</h1>
                <FAQ
                q="How are medications handled?"
                a="Prescribed medications are filled through third-party pharmacies. Insurance coverage, self-pay pricing,
and availability vary based on the medication and pharmacy used. Your provider will review medication
options, including cost considerations, during your visit."
                />   

                <h1 className="text-2xl font-semibold text-primary">Care Scope & Safety</h1>
                 <FAQ
                q="Do you provide therapy or psychiatric care?"
                a="LumaRose provides primary care–based emotional wellness support. Therapy and specialty psychiatric services are not provided."
                />

                 <FAQ
                q="What if I need emergency care?"
                a="LumaRose does not provide emergency services. For emergencies, call 911 or go to the nearest emergency department."
                />

                <h1 className="text-2xl font-semibold text-primary">Scheduling & Practice Policies</h1>
                 <FAQ
                q="Are there late cancellation or no-show fees?"
                a="Yes. Late cancellation and no-show policies apply and are outlined during enrollment and scheduling."
                />

                 <FAQ
                q="Do you observe holidays?"
                a="LumaRose Health & Wellness observes major federal holidays. Appointment availability, response
times, and laboratory processing may be limited on these days. Patients are encouraged to plan refills,
labs, and follow-up visits accordingly."
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