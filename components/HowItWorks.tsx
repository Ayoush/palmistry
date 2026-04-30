"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles, ScrollText } from "lucide-react";
import { SectionHeading } from "./Traditions";

const steps = [
  {
    icon: Camera,
    title: "Snap your palm",
    body: "Open the app, tap capture, hold your palm flat under good light. Process-and-discard — your image never touches a database.",
    accent: "#e9c176",
  },
  {
    icon: Sparkles,
    title: "Pick a tradition",
    body: "Hindu, Western, Chinese, Tibetan, Tarot, or Kabbalistic. Each one has its own analyst persona and reading framework.",
    accent: "#9d7be0",
  },
  {
    icon: ScrollText,
    title: "Get a deep report",
    body: "Mounts, lines, special markings, hand shape — synthesized into a 5-section reading in 30 seconds. Saved on your device, free to re-open.",
    accent: "#4fb89a",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-28">
      <div className="absolute inset-0 stars-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              <span className="text-[#f5efe2]">Three taps.</span>{" "}
              <span className="gradient-gold italic">Thirty seconds.</span>
            </>
          }
          sub="No signup. No account. No data leaves your phone except the palm image itself, which is discarded after the reading."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="panel rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3">
                  <div
                    className="size-11 rounded-xl border flex items-center justify-center"
                    style={{
                      borderColor: `${s.accent}40`,
                      background: `${s.accent}15`,
                    }}
                  >
                    <s.icon
                      className="size-5"
                      style={{ color: s.accent }}
                    />
                  </div>
                  <span className="font-display text-3xl text-[#6f6857]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold mt-5 text-[#f5efe2]">
                  {s.title}
                </h3>
                <p className="text-sm text-[#b9ad97] mt-2 leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
