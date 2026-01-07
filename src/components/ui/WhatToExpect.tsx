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
    text: "Personalized, unhurried virtual visits",
    icon: Sparkles,
  },
  {
    text: "Thoughtful care plans tailored to you",
    icon: ClipboardList,
  },
  {
    text: "Clear education and communication",
    icon: BookOpen,
  },
  {
    text: "Ongoing support and follow-up",
    icon: MessageCircle,
  },
  {
    text: "A calm, supportive care experience",
    icon: HeartHandshake,
  },
];

export default function WhatToExpect() {
  return (
    <section className="bg-gray-100 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
            What to Expect at LumaRose
          </h2>

          <p className="text-muted-foreground mb-6">
            A care experience designed to feel calm, thoughtful, and centered
            around you.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {expectations.map(({ text, icon: Icon }) => (
            <div
              key={text}
              className="
                group
                bg-white/40
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
