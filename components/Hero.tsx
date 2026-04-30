"use client";

import { motion } from "framer-motion";
import { Apple, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Cosmic backdrop */}
      <div className="absolute inset-0 stars-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-[#e9c176]/8 blur-[120px] pointer-events-none" />
      <div className="absolute top-40 right-0 size-[500px] rounded-full bg-[#9d7be0]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Badge */}
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href="#traditions"
            className="inline-flex items-center gap-2 panel rounded-full px-4 py-1.5 text-xs font-medium text-[#f3dbab]"
          >
            <Sparkles className="size-3.5 text-[#e9c176]" />
            Six traditions. One palm. Thirty seconds.
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-balance text-center mt-6 leading-[0.95] font-semibold"
        >
          <span className="text-[#f5efe2]">Read your palm</span>
          <br />
          <span className="gradient-cosmic italic">like the ancients did.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto max-w-2xl text-center mt-7 text-lg sm:text-xl text-[#b9ad97] leading-relaxed text-balance"
        >
          AI palm reader trained on{" "}
          <span className="text-[#f3dbab] font-medium">Hindu Hast Rekha</span>,
          Western, Chinese, Tibetan, Tarot, and Kabbalistic traditions. Snap
          your palm, pick a tradition, get a deep reading in 30 seconds.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <a
            href={site.appStoreUrl}
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-[#f5efe2] px-6 py-3.5 text-sm font-semibold text-[#0b0b0d] hover:bg-white transition-colors min-w-[200px]"
          >
            <Apple className="size-6" fill="currentColor" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-70 font-medium">
                Download on
              </div>
              <div className="text-base font-semibold -mt-0.5">
                App Store
              </div>
            </div>
          </a>
          <a
            href={site.playStoreUrl}
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-[#1a1a1f] border border-[#e9c176]/25 px-6 py-3.5 text-sm font-semibold text-[#f5efe2] hover:border-[#e9c176]/60 transition-colors min-w-[200px]"
          >
            <PlayBadge className="size-6" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-70 font-medium">
                Get it on
              </div>
              <div className="text-base font-semibold -mt-0.5">
                Google Play
              </div>
            </div>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xs text-center mt-5 text-[#6f6857]"
        >
          1 free reading on first install · No signup · For entertainment only
        </motion.p>

        {/* Phone visual */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mt-20 mx-auto max-w-md float-slow"
        >
          <div className="absolute inset-0 bg-[#e9c176]/20 blur-3xl rounded-full" />
          <div className="relative aspect-[9/19] rounded-[3rem] panel glow-gold p-3">
            <div className="size-full rounded-[2.4rem] bg-[#0b0b0d] overflow-hidden relative grain">
              {/* Simulated app screenshot */}
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between text-xs text-[#b9ad97]">
                  <span>9:41</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="h-1 w-4 rounded-sm bg-[#e9c176]/40" />
                    <div className="h-2 w-4 rounded-sm border border-[#e9c176]/40" />
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs text-[#c5a059]">My Reports</span>
                  <span className="rounded-full border border-[#e9c176]/40 bg-[#e9c176]/10 px-2.5 py-1 text-[10px] text-[#e9c176] font-semibold">
                    ✦ 1 credit
                  </span>
                </div>
                <div className="mt-4 mx-auto size-32 rounded-3xl border border-[#e9c176]/40 bg-gradient-to-br from-[#e9c176]/15 to-[#9d7be0]/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 rounded-3xl border border-[#e9c176]/20 pulse-ring" />
                  <PalmIcon className="size-16 text-[#e9c176]" />
                </div>
                <h2 className="font-display text-3xl text-center mt-5 text-[#e9c176]">
                  Palmistry
                </h2>
                <p className="text-xs text-center text-[#b9ad97] mt-1">
                  Six traditions. One palm.
                </p>
                <div className="mt-5 space-y-2.5">
                  {["Single", "Buddy", "Family"].map((m, i) => (
                    <div
                      key={m}
                      className={`rounded-xl border px-3 py-2.5 text-xs ${
                        i === 0
                          ? "bg-[#e9c176]/10 border-[#e9c176]/40 text-[#f3dbab]"
                          : "bg-[#1a1a1f]/80 border-[#e9c176]/15 text-[#b9ad97]"
                      }`}
                    >
                      <div className="font-semibold">{m}</div>
                      <div className="opacity-70 text-[10px] mt-0.5">
                        {i === 0
                          ? "1 palm · 1 tradition · 1 credit"
                          : i === 1
                          ? "2 palms · compatibility · 2 credits"
                          : "4 palms · group dynamics · 4 credits"}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-auto rounded-full bg-[#e9c176] py-3 text-xs font-bold text-[#1a1300]">
                  Begin your reading · 1 credit
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function PalmIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 32V14a3 3 0 116 0v18" />
      <path d="M28 32V10a3 3 0 116 0v22" />
      <path d="M34 32V12a3 3 0 116 0v20" />
      <path d="M40 32V18a3 3 0 116 0v18a14 14 0 01-14 14h-2.6a8 8 0 01-6.8-3.8l-6-9.8a2 2 0 011.7-3l3.7-.4" />
      <path d="M28 38c2 1.5 4.5 1.5 6 0" opacity="0.6" />
      <path d="M26 44c3 2 7 2 10 0" opacity="0.4" />
    </svg>
  );
}

function PlayBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M3 2.5L13.5 12 3 21.5V2.5Z"
        fill="url(#g1)"
      />
      <path d="M13.5 12L3 2.5l13 7.5-2.5 2Z" fill="url(#g2)" />
      <path d="M13.5 12L3 21.5l13-7.5-2.5-2Z" fill="url(#g3)" />
      <path d="M16 9.5l5 2.5-5 2.5L13.5 12 16 9.5Z" fill="url(#g4)" />
      <defs>
        <linearGradient id="g1" x1="3" y1="2.5" x2="13.5" y2="21.5">
          <stop stopColor="#00d4ff" />
          <stop offset="1" stopColor="#0086ff" />
        </linearGradient>
        <linearGradient id="g2" x1="3" y1="2.5" x2="16" y2="10">
          <stop stopColor="#3dffba" />
          <stop offset="1" stopColor="#00d489" />
        </linearGradient>
        <linearGradient id="g3" x1="3" y1="21.5" x2="16" y2="14">
          <stop stopColor="#ff5e62" />
          <stop offset="1" stopColor="#ff2a3a" />
        </linearGradient>
        <linearGradient id="g4" x1="13" y1="9.5" x2="21" y2="14.5">
          <stop stopColor="#ffe065" />
          <stop offset="1" stopColor="#ffae00" />
        </linearGradient>
      </defs>
    </svg>
  );
}

