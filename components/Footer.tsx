import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-[#e9c176]/10 py-14">
      <div className="mx-auto max-w-6xl px-5 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl font-semibold text-[#f5efe2]">
              {site.brand}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#6f6857] border border-[#e9c176]/20 rounded-full px-2 py-0.5">
              by PalmAI
            </span>
          </div>
          <p className="text-sm text-[#b9ad97] mt-3 max-w-md leading-relaxed">
            AI palm reader · Hast Rekha + 5 traditions · iOS + Android · For
            entertainment purposes only.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="size-9 rounded-full border border-[#e9c176]/20 hover:border-[#e9c176]/60 flex items-center justify-center text-[#c5a059] hover:text-[#e9c176] transition-colors"
            >
              IG
            </a>
            <a
              href={site.twitterUrl}
              target="_blank"
              rel="noopener"
              aria-label="X / Twitter"
              className="size-9 rounded-full border border-[#e9c176]/20 hover:border-[#e9c176]/60 flex items-center justify-center text-[#c5a059] hover:text-[#e9c176] transition-colors"
            >
              X
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#6f6857] font-bold">
            App
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-[#b9ad97]">
            <li>
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-[#e9c176]"
              >
                App Store
              </a>
            </li>
            <li>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noopener"
                className="hover:text-[#e9c176]"
              >
                Google Play
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-[#e9c176]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#e9c176]">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-[#6f6857] font-bold">
            Legal
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-[#b9ad97]">
            <li>
              <Link href="/privacy" className="hover:text-[#e9c176]">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-[#e9c176]">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-[#e9c176]">
                Support
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${site.supportEmail}`}
                className="hover:text-[#e9c176]"
              >
                {site.supportEmail}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 mt-12 pt-6 border-t border-[#e9c176]/10 text-xs text-[#6f6857] flex flex-col sm:flex-row gap-2 justify-between">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Not medical or financial advice.</span>
      </div>
    </footer>
  );
}
