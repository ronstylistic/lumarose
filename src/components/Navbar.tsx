"use client";

import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Membership", href: "/membership" },
  { label: "College Care", href: "/college-care" },
  { label: "Corporate Wellness", href: "/corporate-wellness" },
  { label: "Care Services", href: "/services" },
  { label: "Non-Membership", href: "/non-membership" },
  { label: "Weight Management", href: "/weight-management" },
  { label: "FAQs", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MOBILE_MENU_ID = "mobile-primary-navigation";

function isActiveRoute(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const desktopNavLinkClass = (href: string) => {
    const active = isActiveRoute(pathname, href);
    return cn(
      "relative box-border cursor-pointer rounded-lg border border-transparent px-3 py-2 text-[0.9375rem] font-medium tracking-tight",
      "transition-[color,background-color,border-color,box-shadow] duration-200 ease-out",
      "outline-none focus-visible:ring-[3px] focus-visible:ring-ring/55 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
      active
        ? "border-primary/40 bg-primary/15 font-semibold text-primary shadow-sm motion-reduce:shadow-none"
        : "bg-transparent text-foreground/80 hover:border-primary/30 hover:bg-primary/12 hover:text-primary hover:shadow-sm motion-reduce:hover:shadow-none"
    );
  };

  const mobileNavLinkClass = (href: string) => {
    const active = isActiveRoute(pathname, href);
    return cn(
      "relative box-border flex min-h-12 w-full max-w-full items-center rounded-xl border px-3.5 text-base font-medium tracking-tight",
      "cursor-pointer outline-none transition-[color,background-color,border-color,box-shadow] duration-200 ease-out",
      "focus-visible:ring-[3px] focus-visible:ring-ring/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "border-transparent bg-transparent",
      "active:border-primary/35 active:bg-primary/14 motion-reduce:active:shadow-none motion-reduce:active:bg-primary/12",
      active
        ? "border-primary/45 bg-primary/16 font-semibold text-primary shadow-sm motion-reduce:shadow-none"
        : "text-foreground/85 hover:border-primary/35 hover:bg-primary/12 hover:text-primary hover:shadow-sm motion-reduce:hover:shadow-none"
    );
  };

  const logoBlock = (onNavigate?: () => void) => (
    <Link
      href="/"
      onClick={onNavigate}
      className="flex min-h-11 min-w-0 flex-1 items-center gap-2 rounded-lg pr-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Image
        src="/images/logo.png"
        width={32}
        height={32}
        alt=""
        className="size-8 shrink-0"
        priority
      />
      <span className="min-w-0 text-left font-semibold text-lg leading-tight sm:text-2xl">
        <span className="text-foreground transition-colors hover:text-secondary">
          LumaRose
        </span>{" "}
        <span className="text-primary">Health &amp; Wellness</span>
      </span>
    </Link>
  );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className="fixed top-0 inset-x-0 z-[9999] border-b border-gray-100 bg-white shadow-md">
        <div className="mx-auto flex max-w-[100vw] items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          {logoBlock()}

          <nav
            className="hidden shrink-0 flex-nowrap items-center gap-2 text-gray-700 font-medium xl:flex xl:gap-3 2xl:gap-6"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={desktopNavLinkClass(item.href)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}

            <Button
              asChild
              className="bg-primary px-5 uppercase text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/book">Get Started</Link>
            </Button>
          </nav>

          <Dialog.Trigger asChild>
            <button
              type="button"
              className={cn(
                "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-gray-700 transition-colors xl:hidden",
                "outline-none hover:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "aria-expanded:bg-muted/80"
              )}
              aria-expanded={open}
              aria-controls={MOBILE_MENU_ID}
              aria-haspopup="dialog"
              aria-label="Open main menu"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </Dialog.Trigger>
        </div>
      </header>

      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-[10000] bg-background xl:hidden",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
            "motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none"
          )}
        />
        <Dialog.Content
          id={MOBILE_MENU_ID}
          className={cn(
            "fixed inset-0 z-[10000] flex max-h-[100dvh] flex-col bg-background xl:hidden",
            "outline-none focus:outline-none",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200",
            "motion-reduce:data-[state=open]:animate-none motion-reduce:data-[state=closed]:animate-none",
            "pt-[env(safe-area-inset-top,0px)]"
          )}
        >
          <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
          <Dialog.Description className="sr-only">
            Browse pages or book an appointment with LumaRose Health and
            Wellness.
          </Dialog.Description>

          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6 sm:py-4">
            {logoBlock(() => setOpen(false))}
            <Dialog.Close asChild>
              <button
                type="button"
                className={cn(
                  "inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-gray-700 transition-colors",
                  "outline-none hover:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                )}
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden />
              </button>
            </Dialog.Close>
          </div>

          <nav
            className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-y-contain px-4 py-5 sm:px-6"
            aria-label="Primary"
          >
            {NAV_ITEMS.map((item) => {
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={mobileNavLinkClass(item.href)}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div
            className="shrink-0 border-t border-border bg-background px-4 py-5 sm:px-6"
            style={{
              paddingBottom: "max(1.25rem, env(safe-area-inset-bottom, 0px))",
            }}
          >
            <Button
              asChild
              className="min-h-12 w-full cursor-pointer rounded-lg py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-[#7f445c]"
            >
              <Link href="/book" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
