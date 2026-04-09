import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const panelShadow = cn(
  "shadow-[0_1px_2px_rgba(15,23,42,0.045),0_14px_42px_-10px_rgba(15,23,42,0.085)]"
);

export function FeatureCheckGrid({
  items,
  variant = "default",
}: {
  items: readonly string[];
  variant?: "default" | "panel";
}) {
  const isPanel = variant === "panel";

  return (
    <ul
      className={cn(
        "grid grid-cols-1 overflow-hidden sm:grid-cols-2",
        isPanel
          ? cn(
              "rounded-2xl border-0 bg-white",
              panelShadow
            )
          : "rounded-xl border border-primary/25"
      )}
      role="list"
    >
      {items.map((item, i) => (
        <li
          key={i}
          className={cn(
            "flex gap-3.5 p-4 md:p-5",
            isPanel
              ? cn(
                  "border-b border-r border-slate-200/60 bg-white",
                  "last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0",
                  "sm:[&:nth-last-child(2)]:border-b-0"
                )
              : cn(
                  "border-b border-border/70 bg-gray-100/40",
                  "last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0",
                  "sm:[&:nth-last-child(2)]:border-b-0"
                )
          )}
        >
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-secondary/12 text-secondary"
            aria-hidden
          >
            <Check className="h-4 w-4" strokeWidth={2.35} aria-hidden />
          </span>
          <span className="min-w-0 text-sm leading-relaxed text-foreground md:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
