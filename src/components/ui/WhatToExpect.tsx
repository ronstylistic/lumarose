import {
  Sparkles,
  ClipboardList,
  BookOpen,
  MessageCircle,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const expectations = [
  {
    text: "Personalized virtual visits designed for meaningful care",
    icon: Sparkles,
  },
  {
    text: "Thoughtful care plans aligned with your health goals",
    icon: ClipboardList,
  },
  {
    text: "Clear education and communication",
    icon: BookOpen,
  },
  {
    text: "Ongoing follow-up when clinically appropriate",
    icon: MessageCircle,
  }
];

export default function WhatToExpect() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            What to Expect at LumaRose
          </h2>

          <p className="text-muted-foreground mb-6">
           A calm, thoughtful care experience centered around you.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {expectations.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="
                group
                bg-gray-100/40
                shadow-sm
                rounded-2xl
                p-6
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

        {/* CTA */}
        <Link
          href="/about"
          className="
            inline-flex items-center gap-2
            text-secondary font-medium
            hover:text-primary
            transition-colors
          "
        >
          Learn More About Our Care Approach
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
