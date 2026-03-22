import type { ReactNode } from "react";

import { Check } from "lucide-react";

import { revealCard, revealSection, staggerClass } from "@/lib/motion";

import { cn } from "@/lib/utils";



/** Matches WhyLumaRose benefit card surface */

const whyStyleCardClass = cn(

  "rounded-xl bg-gray-100/40 p-5 md:rounded-2xl md:p-6",

  "shadow-[0_1px_2px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)]",

  "transition-shadow duration-200 motion-reduce:transition-none",

  "hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_8px_28px_rgba(15,23,42,0.08)]"

);



function ExpectationListRow({ children }: { children: ReactNode }) {

  return (

    <li className="flex gap-3.5">

      <span

        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary"

        aria-hidden

      >

        <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />

      </span>

      <span className="min-w-0 text-base leading-relaxed text-slate-700 md:text-[1.0625rem]">

        {children}

      </span>

    </li>

  );

}



type Expectation = {

  id: string;

  title: string;

  paragraphs?: readonly string[];

  /** Single line before bullets (when no beforeBullets) */

  lead?: string;

  /** Paragraphs before the bullet list */

  beforeBullets?: readonly string[];

  bullets?: readonly string[];

  /** Paragraphs after the bullet list */

  afterBullets?: readonly string[];

};



const expectations: Expectation[] = [

  {

    id: "before-during-visit",

    title: "Before & During Your Visit",

    paragraphs: [

      "Before booking, you will complete a short intake form so your provider can understand your concerns ahead of time.",

      "You will then meet one on one with your provider in a private virtual visit where your concerns are heard, questions are answered, and care is tailored specifically to you.",

      "Most visits last approximately 30 to 45 minutes, giving you the time and attention you deserve.",

    ],

  },

  {

    id: "treatment-plan",

    title: "Your Treatment Plan",

    lead: "You will receive a clear and personalized plan based on your needs, which may include:",

    bullets: [

      "Prescriptions sent to your preferred pharmacy if appropriate",

      "Lab orders if needed",

      "Personalized recommendations and next steps",

    ],

  },

  {

    id: "after-visit-ongoing-support",

    title: "After Your Visit & Ongoing Support",

    beforeBullets: [

      "Your care does not end when the visit is over.",

      "You will have access to continued support, including:",

    ],

    bullets: [

      "Secure messaging for follow up questions",

      "Guidance if symptoms change or do not improve",

      "Ongoing care when needed",

    ],

    afterBullets: [

      "Appointments are available during evenings and weekends, so you can get care without missing work or rearranging your day.",

    ],

  },

];



export default function WhatToExpect() {

  return (

    <section

      className="bg-white py-16"

      aria-labelledby="what-to-expect-heading"

    >

      <div className="mx-auto max-w-7xl px-6">

        <div

          className={cn(

            "mx-auto mb-14 max-w-3xl text-center md:mb-16",

            revealSection

          )}

        >

          <h2

            id="what-to-expect-heading"

            className="mb-5 text-balance text-3xl font-semibold tracking-tight text-primary md:text-4xl"

          >

            What to Expect From Your Care

          </h2>

          <p className="mx-auto max-w-prose text-pretty text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">

            Getting care with LumaRose is simple, personalized, and designed

            around you.

          </p>

        </div>



        <div className="mx-auto flex max-w-3xl flex-col gap-6">

          {expectations.map(

            (

              {

                id,

                title,

                paragraphs,

                lead,

                beforeBullets,

                bullets,

                afterBullets,

              },

              index

            ) => (

              <article

                key={id}

                role="article"

                aria-labelledby={`what-to-expect-${id}`}

                className={cn(

                  whyStyleCardClass,

                  revealCard,

                  staggerClass(index)

                )}

              >

                <div className="flex items-start justify-start gap-4 md:gap-5">

                  <div

                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary md:h-12 md:w-12 md:rounded-xl"

                    aria-hidden

                  >

                    <Check

                      className="h-5 w-5 md:h-6 md:w-6"

                      strokeWidth={2.5}

                      aria-hidden

                    />

                  </div>

                  <div className="min-w-0 max-w-md flex-1 sm:max-w-lg md:max-w-xl">

                    <h3

                      id={`what-to-expect-${id}`}

                      className="text-left text-xl font-semibold tracking-tight text-primary md:text-[1.35rem]"

                    >

                      {title}

                    </h3>

                    <div className="mt-3 space-y-3 text-left text-base leading-relaxed text-slate-700 md:text-[1.0625rem]">

                      {bullets?.length ? (

                        <>

                          {beforeBullets?.length ? (

                            beforeBullets.map((text, i) => (

                              <p key={`pre-${i}`} className="text-pretty">

                                {text}

                              </p>

                            ))

                          ) : lead ? (

                            <p className="text-pretty">{lead}</p>

                          ) : null}

                          <ul className="space-y-3.5" role="list">

                            {bullets.map((text, i) => (

                              <ExpectationListRow key={i}>

                                {text}

                              </ExpectationListRow>

                            ))}

                          </ul>

                          {afterBullets?.map((text, i) => (

                            <p key={`post-${i}`} className="text-pretty">

                              {text}

                            </p>

                          ))}

                        </>

                      ) : (

                        (paragraphs ?? []).map((text, pIndex) => (

                          <p key={pIndex} className="text-pretty">

                            {text}

                          </p>

                        ))

                      )}

                    </div>

                  </div>

                </div>

              </article>

            )

          )}



          <p className="text-pretty text-left text-base leading-relaxed text-slate-600 md:text-[1.0625rem]">

            Because getting care should feel simple, supported, and centered

            around you.

          </p>

        </div>

      </div>

    </section>

  );

}


