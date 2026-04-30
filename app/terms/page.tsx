import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "PalmAI terms of service.",
};

export default function Terms() {
  return (
    <main className="bg-[#0b0b0d] text-[#f5efe2]">
      <Nav />
      <article className="mx-auto max-w-3xl px-5 pt-32 pb-16">
        <h1 className="font-display text-5xl font-semibold mb-2">
          Terms of Service
        </h1>
        <p className="text-sm text-[#6f6857]">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>

        <section className="mt-10 space-y-6 text-[#b9ad97] leading-relaxed text-base">
          <h2 className="font-display text-2xl text-[#f5efe2]">
            Entertainment only
          </h2>
          <p>
            PalmAI readings are not medical,
            legal, financial, or psychological advice. Do not use the app to
            make significant life decisions. Consult qualified professionals for
            real-world guidance.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2]">Credits</h2>
          <p>
            Credits are non-refundable consumables sold via the App Store and
            Google Play. They never expire while the app is supported. If a
            reading fails on our side, the credit is automatically refunded to
            your in-app balance.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2]">
            Acceptable use
          </h2>
          <p>
            You agree not to upload images that are not your own palm without
            consent, or images containing illegal, abusive, or copyrighted
            content. Misuse may result in your device ID being blocked.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2]">No warranty</h2>
          <p>
            The app is provided as-is without warranty of any kind. We are not
            liable for any indirect, incidental, or consequential damages
            arising from use of the app.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2]">Contact</h2>
          <p>
            Questions? Email{" "}
            <a
              href="mailto:hello@getpalmai.app"
              className="text-[#e9c176] hover:underline"
            >
              hello@getpalmai.app
            </a>
            .
          </p>
        </section>
      </article>
      <Footer />
    </main>
  );
}
