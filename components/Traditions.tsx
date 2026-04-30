"use client";

import { motion } from "framer-motion";

type Tradition = {
  key: string;
  name: string;
  native?: string;
  blurb: string;
  motifs: string[];
  hue: string;
  symbol: string;
};

const traditions: Tradition[] = [
  {
    key: "hindu",
    name: "Hindu",
    native: "हस्त रेखा शास्त्र",
    blurb:
      "Hast Rekha Shastra. Sanskrit-rooted reading covering planetary mounts, karmic cycles, and auspicious symbols like Padma and Matsya.",
    motifs: ["Surya", "Chandra", "Mangal", "Padma", "Matsya"],
    hue: "from-[#ff8a3d]/20 to-[#e9c176]/10",
    symbol: "ॐ",
  },
  {
    key: "western",
    name: "Western Classical",
    native: "Cheiro · Benham",
    blurb:
      "D'Arpentigny hand shapes, Benham mounts, special signs. Confident, structured, citing every line you read from.",
    motifs: ["Earth", "Air", "Water", "Fire", "Mounts"],
    hue: "from-[#e9c176]/20 to-[#c5a059]/10",
    symbol: "✦",
  },
  {
    key: "chinese",
    name: "Chinese",
    native: "掌相 · Zhang Xiang",
    blurb:
      "Five Elements, Eight Palaces, Yi Jing-rooted balance reading. Wealth, family, qi flow, harmony as cultivation.",
    motifs: ["五行", "八宫", "阴阳", "三大主线"],
    hue: "from-[#4fb89a]/20 to-[#e9c176]/10",
    symbol: "易",
  },
  {
    key: "tibetan",
    name: "Tibetan",
    native: "Mandala of the Hand",
    blurb:
      "Hand as mandala, lines as channels of life-energy (lung). Gentle, non-fatalistic. Frames challenges as teachers.",
    motifs: ["Tsa", "Lung", "Wisdoms", "Mandala"],
    hue: "from-[#9d7be0]/20 to-[#e9c176]/10",
    symbol: "ༀ",
  },
  {
    key: "tarot",
    name: "Tarot Fusion",
    native: "Arcana × Palmistry",
    blurb:
      "Maps your palm to Major Arcana archetypes. Vivid, story-driven, playful. The Empress, The Magician, The Hermit.",
    motifs: ["Wands", "Cups", "Swords", "Pentacles"],
    hue: "from-[#e36b8a]/20 to-[#9d7be0]/10",
    symbol: "★",
  },
  {
    key: "kabbalistic",
    name: "Kabbalistic",
    native: "Tree of Life",
    blurb:
      "Hand as vessel for middot — character traits mapped to Sefirot. Symbolic only, never religious authority.",
    motifs: ["Chesed", "Gevurah", "Tiferet", "Yesod"],
    hue: "from-[#9d7be0]/20 to-[#4fb89a]/10",
    symbol: "✡",
  },
];

export function Traditions() {
  return (
    <section id="traditions" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Six Traditions"
          title={
            <>
              <span className="text-[#f5efe2]">Not one palm reader.</span>{" "}
              <span className="gradient-cosmic italic">Six experts.</span>
            </>
          }
          sub="Each tradition is a distinct system prompt with native terminology, mount mappings, and tradition-specific report sections. Pick one per reading — or try them all on the same palm."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {traditions.map((t, i) => (
            <motion.div
              key={t.key}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${t.hue} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative panel rounded-2xl p-6 h-full hover:border-[#e9c176]/40 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`size-12 rounded-xl bg-gradient-to-br ${t.hue} border border-[#e9c176]/30 flex items-center justify-center font-display text-2xl text-[#f3dbab]`}
                  >
                    {t.symbol}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[#6f6857] font-semibold">
                    {t.native}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#f5efe2]">
                  {t.name}
                </h3>
                <p className="text-sm text-[#b9ad97] mt-2 leading-relaxed">
                  {t.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {t.motifs.map((m) => (
                    <span
                      key={m}
                      className="text-[10px] rounded-full bg-[#e9c176]/8 border border-[#e9c176]/20 px-2 py-0.5 text-[#c5a059] font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  sub?: string;
  align?: "center" | "left";
}) {
  const alignClass =
    align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 panel rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#c5a059] font-semibold ${
            align === "center" ? "" : ""
          }`}
        >
          ✦ {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mt-5 leading-[1.05] text-balance">
        {title}
      </h2>
      {sub && (
        <p className="text-base sm:text-lg text-[#b9ad97] mt-5 leading-relaxed text-balance">
          {sub}
        </p>
      )}
    </div>
  );
}
