"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AnimatedHero() {
  return (
    <section className="relative w-full bg-primary py-32 flex justify-center items-center overflow-hidden">
      {/* subtle dotted bg */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[22px_22px]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-white border border-primary/40 shadow-xl rounded-xl px-12 py-14 max-w-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          LumaRose Health & Wellness
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-gray-700 mb-6"
        >
          Innovative, personalized care for a healthier, balanced you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button className="bg-primary text-white px-8 py-5 text-md hover:bg-secondary transition shadow-md">
            <Link href="@">BOOK YOUR CONSULTATION TODAY</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
