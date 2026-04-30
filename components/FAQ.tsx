"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./Traditions";

const faq = [
  {
    q: "Is this real palmistry or just AI-generated nonsense?",
    a: "Each tradition uses a structured analysis methodology with native terminology — Hindu Hast Rekha cites mounts and Sanskrit names, Western uses D'Arpentigny + Benham systems, Chinese uses Wu Xing + Bagua. The AI is grounded in observable palm features (lines, mounts, hand shape) rather than free-form mysticism. That said, palmistry itself is interpretive — we always frame readings as entertainment and never make medical, financial, or fortune-telling claims.",
  },
  {
    q: "Are my palm photos stored anywhere?",
    a: "No. Your image goes from your phone → encrypted edge function → Gemini Vision API → discarded. Nothing is written to disk on our servers. We don't have an account system, an email list, or a database of user images.",
  },
  {
    q: "Do I need an account?",
    a: "No. The app is anonymous. We track an opaque device ID locally for credit balances. No name, no email, no password, no signup screen.",
  },
  {
    q: "What's the difference between the Hindu and other traditions?",
    a: "Hindu (Hast Rekha Shastra) uses Sanskrit names for lines (Jeevan Rekha, Mastak Rekha, Hriday Rekha), planetary deity names for mounts (Surya, Chandra, Mangal, Guru), and includes a karmic synthesis section. It looks for auspicious symbols like Padma (lotus), Matsya (fish), and Trishul (trident) that other traditions don't recognize.",
  },
  {
    q: "How do credits work?",
    a: "1 credit = 1 single reading. 2 credits = 1 buddy/compatibility reading. 4 credits = 1 family/group reading. Buy credit packs ($2.99 / $10.99 / $30.99). Credits never expire. Re-opening past readings is always free.",
  },
  {
    q: "Is this a subscription?",
    a: "No. Pure one-time consumable purchases. Buy credits when you want. Don't buy if you don't. Apple and Google handle the payment.",
  },
  {
    q: "What if a reading fails?",
    a: "If our AI errors out on a reading you initiated, the credit is automatically refunded to your balance. You only pay when a reading succeeds.",
  },
  {
    q: "Will you add more traditions?",
    a: "Likely. The architecture is just prompt-injected tradition profiles — adding a new one is a config change. Tell us which: hello@getpalmai.app",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              <span className="text-[#f5efe2]">Questions, asked</span>{" "}
              <span className="gradient-gold italic">honestly.</span>
            </>
          }
        />
        <div className="mt-14 divide-y divide-[#e9c176]/10">
          {faq.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>

        {/* JSON-LD for FAQ rich result */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="py-5"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-display text-xl font-medium text-[#f5efe2]">
          {q}
        </span>
        <ChevronDown
          className={`size-5 text-[#c5a059] flex-none transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-[#b9ad97] text-sm sm:text-base leading-relaxed pt-3">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}
