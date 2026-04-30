import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with PalmAI palm reader app.",
};

export default function Support() {
  return (
    <main className="bg-[#0b0b0d] text-[#f5efe2]">
      <Nav />
      <article className="mx-auto max-w-3xl px-5 pt-32 pb-16">
        <h1 className="font-display text-5xl font-semibold mb-2">Support</h1>
        <p className="text-[#b9ad97] mt-3 leading-relaxed">
          Hit a problem? Have a question that's not in the FAQ? Email us
          directly. We respond within 24-48 hours.
        </p>

        <a
          href={`mailto:${site.supportEmail}?subject=PalmAI%20Support`}
          className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#e9c176] px-6 py-4 text-sm font-semibold text-[#1a1300] hover:bg-[#f3dbab] transition-colors"
        >
          ✉ Email {site.supportEmail}
        </a>

        <h2 className="font-display text-2xl text-[#f5efe2] mt-12">
          Common issues
        </h2>
        <ul className="mt-4 space-y-3 text-[#b9ad97] leading-relaxed">
          <li>
            <strong className="text-[#f3dbab]">
              Bought credits but balance didn't update?
            </strong>{" "}
            Open the app → Settings → Restore Purchases. If still missing, email
            us with the date of purchase.
          </li>
          <li>
            <strong className="text-[#f3dbab]">Reading failed?</strong> Credits
            are auto-refunded on backend errors. Pull-to-refresh on the home
            screen to confirm.
          </li>
          <li>
            <strong className="text-[#f3dbab]">Want a refund?</strong> Refunds
            are handled directly by Apple (
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener"
              className="text-[#e9c176] hover:underline"
            >
              reportaproblem.apple.com
            </a>
            ) or Google Play.
          </li>
        </ul>
      </article>
      <Footer />
    </main>
  );
}
