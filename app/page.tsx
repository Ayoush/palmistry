import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Traditions } from "@/components/Traditions";
import { HowItWorks } from "@/components/HowItWorks";
import { Modes } from "@/components/Modes";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0b0b0d] text-[#f5efe2] overflow-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Traditions />
      <HowItWorks />
      <Modes />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
