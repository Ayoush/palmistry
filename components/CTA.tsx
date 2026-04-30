"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { site } from "@/lib/site";

export function CTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 stars-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] rounded-full bg-gradient-to-br from-[#e9c176]/15 to-[#9d7be0]/15 blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-4xl px-5 text-center"
      >
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] text-balance">
          <span className="text-[#f5efe2]">Your palm has been waiting</span>{" "}
          <span className="gradient-cosmic italic">a few thousand years.</span>
        </h2>
        <p className="text-lg text-[#b9ad97] mt-6 max-w-xl mx-auto leading-relaxed">
          Six traditions. Free trial reading. No signup. iOS + Android. Begin.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={site.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#f5efe2] px-7 py-4 text-sm font-semibold text-[#0b0b0d] hover:bg-white transition-colors min-w-[220px]"
          >
            <Apple className="size-7" fill="currentColor" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-70 font-medium">
                Download on
              </div>
              <div className="text-base font-semibold -mt-0.5">App Store</div>
            </div>
          </a>
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#1a1a1f] border border-[#e9c176]/25 px-7 py-4 text-sm font-semibold text-[#f5efe2] hover:border-[#e9c176]/60 transition-colors min-w-[220px]"
          >
            <span className="font-display text-2xl text-[#e9c176]">▶</span>
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-70 font-medium">Get it on</div>
              <div className="text-base font-semibold -mt-0.5">Google Play</div>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
