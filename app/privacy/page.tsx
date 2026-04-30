import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "PalmAI privacy policy — anonymous device IDs, palm images discarded after processing, no account, no tracking.",
};

export default function Privacy() {
  return (
    <main className="bg-[#0b0b0d] text-[#f5efe2]">
      <Nav />
      <article className="prose-invert mx-auto max-w-3xl px-5 pt-32 pb-16">
        <h1 className="font-display text-5xl font-semibold mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6f6857]">
          Last updated: {new Date().toISOString().slice(0, 10)}
        </p>

        <section className="mt-10 space-y-6 text-[#b9ad97] leading-relaxed text-base">
          <h2 className="font-display text-2xl text-[#f5efe2]">
            What we collect
          </h2>
          <p>
            PalmAI is anonymous by design. We do not require an account, email,
            password, or phone number. We collect:
          </p>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <strong className="text-[#f3dbab]">Anonymous device ID</strong> —
              a random string generated locally on your device. Used to track
              your credit balance.
            </li>
            <li>
              <strong className="text-[#f3dbab]">Palm images you submit</strong>{" "}
              — sent to our edge function, forwarded to Google Gemini Vision,
              and discarded immediately after the reading is generated. We do
              not store palm images on disk.
            </li>
            <li>
              <strong className="text-[#f3dbab]">Purchase receipts</strong> —
              processed via RevenueCat, which links your anonymous device ID to
              the credit packs you have bought. No personal info attached.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-[#f5efe2] mt-10">
            What we do NOT collect
          </h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>No name, email, phone, or address.</li>
            <li>No location, IP address logging, or device fingerprinting.</li>
            <li>No cross-app tracking. No IDFA. No advertising trackers.</li>
            <li>No analytics that link palm reads to a person.</li>
          </ul>

          <h2 className="font-display text-2xl text-[#f5efe2] mt-10">
            Third-party processors
          </h2>
          <ul className="list-disc pl-6 space-y-1.5">
            <li>
              <strong className="text-[#f3dbab]">Google Gemini</strong> —
              receives your palm image to generate the reading. Discards image
              after response per their API policy.
            </li>
            <li>
              <strong className="text-[#f3dbab]">Supabase</strong> — hosts our
              edge function and credit ledger. Sees only your anonymous device
              ID and credit count.
            </li>
            <li>
              <strong className="text-[#f3dbab]">RevenueCat</strong> — handles
              IAP receipt validation. Sees your anonymous device ID and Apple /
              Google purchase tokens.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-[#f5efe2] mt-10">
            Children
          </h2>
          <p>
            PalmAI is not intended for children under 13. The app is rated 12+
            on the App Store.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2] mt-10">
            Your rights
          </h2>
          <p>
            Because we do not collect personally identifiable information, we
            cannot identify your specific data on request. If you uninstall the
            app, your device ID is gone and any associated credit balance is
            irretrievable.
          </p>

          <h2 className="font-display text-2xl text-[#f5efe2] mt-10">
            Contact
          </h2>
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
