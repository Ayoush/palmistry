"use client";

import { motion } from "framer-motion";
import { User, Heart, Users } from "lucide-react";
import { SectionHeading } from "./Traditions";

const modes = [
  {
    icon: User,
    title: "Single",
    cost: "1 credit",
    body: "Your palm. Your tradition. One deep report covering hand shape, mounts, all major lines, special markings, and a 5-section synthesis.",
    sample: [
      "Long curving life line — strong vitality base",
      "Forked head line — practical-imaginative split",
      "Padma chinha on Mount of Jupiter — dharmic leadership",
    ],
  },
  {
    icon: Heart,
    title: "Buddy",
    cost: "2 credits",
    body: "Two palms read jointly. Compatibility score 0–100, matching points, complementary strengths, friction lines. Be honest, not flattering.",
    sample: [
      "Compatibility: 73",
      "Both have curved heart lines — emotionally expressive together",
      "Her long head line + his developed Mercury — he speaks what she analyzes",
    ],
  },
  {
    icon: Users,
    title: "Family",
    cost: "4 credits",
    body: "Three or four palms. Per-palm standout features, group dynamics, shared themes, friction patterns. Diwali dinner accuracy.",
    sample: [
      "Three of four show strong Venus mount — affection-rich household",
      "Group analyst: middle palm with sharp head line",
      "Group dynamic: heart-led with one practical anchor",
    ],
  },
];

export function Modes() {
  return (
    <section id="modes" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Three reading modes"
          title={
            <>
              <span className="text-[#f5efe2]">Read solo.</span>{" "}
              <span className="gradient-gold italic">
                Read your people.
              </span>
            </>
          }
          sub="The same six traditions across single, couples, and group readings. Compatibility scores and group dynamics that actually feel earned."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-16">
          {modes.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="panel rounded-2xl p-7 hover:border-[#e9c176]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="size-11 rounded-xl border border-[#e9c176]/30 bg-[#e9c176]/8 flex items-center justify-center">
                  <m.icon className="size-5 text-[#e9c176]" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-bold rounded-full border border-[#e9c176]/30 bg-[#e9c176]/10 px-2.5 py-1">
                  {m.cost}
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold mt-6 text-[#f5efe2]">
                {m.title}
              </h3>
              <p className="text-sm text-[#b9ad97] mt-2 leading-relaxed">
                {m.body}
              </p>
              <div className="mt-5 space-y-2">
                {m.sample.map((s) => (
                  <div
                    key={s}
                    className="rounded-lg bg-[#0b0b0d]/60 border border-[#e9c176]/10 px-3 py-2 text-xs text-[#b9ad97]"
                  >
                    <span className="text-[#e9c176] mr-2">›</span>
                    {s}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
