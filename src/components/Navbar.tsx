"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* LOGO + TITLE */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            width={32}
            height={32}
            alt="LumaRose Logo"
          />
          <span className="font-semibold text-2xl">
            <span className="hover:text-secondary">LumaRose</span> <span className="text-primary">Health & Wellness</span>
          </span>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/0" className="text-primary">Home</Link>
          <Link href="/bio">Bio</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>

          <Button className="bg-primary text-white hover:bg-secondary px-5 uppercase">
            <Link href="/book">Book Now </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
