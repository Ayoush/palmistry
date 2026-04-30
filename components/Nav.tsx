"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

const links = [
  { href: "#traditions", label: "Traditions" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-5 flex items-center justify-between",
          "transition-all duration-300",
          scrolled
            ? "panel rounded-full px-3 py-2 mt-2"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative size-8">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#e9c176] to-[#c5a059] opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
            <div className="relative size-8 rounded-lg border border-[#e9c176]/30 flex items-center justify-center">
              <PalmGlyph className="size-5 text-[#e9c176]" />
            </div>
          </div>
          <span className="font-display text-lg font-semibold text-[#f5efe2]">
            {site.brand}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[#b9ad97]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-[#e9c176] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={site.appStoreUrl}
          target="_blank"
          rel="noopener"
          className="rounded-full bg-[#e9c176] px-4 py-2 text-sm font-semibold text-[#1a1300] hover:bg-[#f3dbab] transition-colors"
        >
          Get the app
        </a>
      </div>
    </motion.header>
  );
}
function PalmGlyph(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
      strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 11V5a1.5 1.5 0 113 0v6" />
      <path d="M12 11V4a1.5 1.5 0 113 0v7" />
      <path d="M15 11V6a1.5 1.5 0 113 0v8a7 7 0 01-7 7H9.6a4 4 0 01-3.4-1.9l-3-5A1 1 0 014.7 13L9 11" />
    </svg>
  );
}

