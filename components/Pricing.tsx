"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { SectionHeading } from "./Traditions";
import { site } from "@/lib/site";

const packs = [
  {
    name: "Single",
    price: "$2.99",
    credits: "1",
    perCredit: "$2.99 / reading",
    features: [
      "1 single-palm reading",
      "Any of 6 traditions",
      "Saved on device",
      "Re-open free anytime",
    ],
    featured: false,
    cta: "Start with one",
  },
  {
    name: "Starter",
    price: "$10.99",
    credits: "5",
    perCredit: "$2.20 / reading",
    features: [
      "5 readings — any mix",
      "Buddy mode unlocked (2 credits)",
      "Save 27% vs singles",
      "Credits never expire",
    ],
    featured: false,
    cta: "Get the starter",
    badge: "Save 27%",
  },
  {
    name: "Mystic",
    price: "$30.99",
    credits: "20",
    perCredit: "$1.55 / reading",
    features: [
      "20 readings — any mix",
      "Family mode unlocked (4 credits)",
      "Save 48% vs singles",
      "Credits never expire",
      "Best for couples + families",
    ],
    featured: true,
    cta: "Best value",
    badge: "Save 48%",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-[#e9c176]/8 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              <span className="text-[#f5efe2]">Pay for what you read.</span>{" "}
              <span className="gradient-cosmic italic">
                Nothing more.
              </span>
            </>
          }
          sub="No subscription. No auto-renewing trap. Buy credits once, use them whenever. New users get 1 free credit on first install."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {packs.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full bg-[#e9c176] text-[#1a1300] text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    Most popular
                  </span>
                </div>
              )}
              <div
                className={`panel rounded-2xl p-7 h-full relative ${
                  p.featured
                    ? "border-[#e9c176]/50 glow-gold"
                    : "hover:border-[#e9c176]/30"
                } transition-colors`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold text-[#f5efe2]">
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="text-[10px] rounded-full bg-[#4fb89a]/15 border border-[#4fb89a]/30 px-2 py-0.5 text-[#4fb89a] font-bold">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold text-[#f5efe2]">
                    {p.price}
                  </span>
                  <span className="text-sm text-[#6f6857]">one-time</span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm text-[#c5a059]">
                  <Zap className="size-4" />
                  <span className="font-semibold">{p.credits} credits</span>
                  <span className="text-[#6f6857]">·</span>
                  <span className="text-[#6f6857]">{p.perCredit}</span>
                </div>
                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 items-start text-sm text-[#b9ad97]"
                    >
                      <Check className="size-4 text-[#e9c176] mt-0.5 flex-none" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener"
                  className={`mt-7 block text-center rounded-xl py-3 text-sm font-semibold transition-colors ${
                    p.featured
                      ? "bg-[#e9c176] text-[#1a1300] hover:bg-[#f3dbab]"
                      : "border border-[#e9c176]/30 text-[#f3dbab] hover:bg-[#e9c176]/8"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-[#6f6857] mt-8">
          Single reading: 1 credit · Buddy: 2 credits · Family: 4 credits ·
          Re-opening past readings is always free.
        </p>
      </div>
    </section>
  );
}
