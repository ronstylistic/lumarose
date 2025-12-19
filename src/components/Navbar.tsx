"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 inset-x-0 z-9999 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-2 outline-none focus:outline-none focus:ring-0"
          >
            <Image
              src="/images/logo.png"
              width={32}
              height={32}
              alt="LumaRose Health & Wellness logo"
              priority
            />
            <span className="font-semibold text-lg sm:text-2xl">
              <span className="hover:text-secondary transition-colors">
                LumaRose
              </span>{" "}
              <span className="text-primary">
                Health & Wellness
              </span>
            </span>
          </Link>


          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <Link href="/" className="text-primary transition-colors duration-200 hover:text-secondary">Home</Link>
            <Link href="/bio" className="transition-colors duration-200 hover:text-secondary">Bio</Link>
            <Link href="/services" className="transition-colors duration-200 hover:text-secondary">Services</Link>
            <Link href="/contact" className=" transition-colors duration-200 hover:text-secondary">Contact</Link>

            <Button className="bg-primary text-white hover:bg-secondary px-5 uppercase">
              <Link href="/book">Book Now</Link>
            </Button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="fixed top-18 inset-x-0 z-9998 bg-white border-b border-gray-100 shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-gray-700 font-medium">
            <Link className="transition-colors duration-200 hover:text-secondary" href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link className="transition-colors duration-200 hover:text-secondary" href="/bio" onClick={() => setOpen(false)}>
              Bio
            </Link>
            <Link className="transition-colors duration-200 hover:text-secondary" href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link className="transition-colors duration-200 hover:text-secondary" href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <Button
              className="bg-primary text-white hover:bg-secondary uppercase w-full"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
