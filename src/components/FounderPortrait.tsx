"use client";

import Image from "next/image";
import { UserRound } from "lucide-react";
import { useState } from "react";

export default function FounderPortrait() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br from-primary/15 via-muted to-secondary/10 lg:min-h-[420px]"
        role="img"
        aria-label="Shameka Crump, FNP-C, founder of LumaRose Health & Wellness"
      >
        <span className="flex h-28 w-28 items-center justify-center rounded-full bg-card shadow-[0_12px_40px_-12px_rgba(148,82,110,0.25)] ring-4 ring-white">
          <UserRound className="h-14 w-14 text-primary/60" strokeWidth={1.25} aria-hidden />
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/images/founder.jpg"
      alt="Shameka Crump, FNP-C, founder of LumaRose Health & Wellness"
      fill
      className="object-cover object-top"
      /* Home founder card: one column on mobile, ~half row on lg inside max-w-6xl */
      sizes="(max-width: 1024px) 100vw, 42vw"
      quality={72}
      onError={() => setFailed(true)}
    />
  );
}
