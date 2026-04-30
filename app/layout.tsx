import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.brand} — AI Palm Reader · Hast Rekha + 5 Traditions`,
    template: `%s · ${site.brand}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.brand,
  category: "Lifestyle",
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.brand,
    title: `${site.brand} — AI Palm Reader · Hast Rekha + 5 Traditions`,
    description: site.shortDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.brand} — AI palm reading in 6 traditions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@palmai_app",
    creator: "@palmai_app",
    title: `${site.brand} — AI Palm Reader`,
    description: site.shortDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: site.brand,
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: site.brand,
  alternateName: site.name,
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS, Android",
  description: site.description,
  url: site.url,
  offers: [
    {
      "@type": "Offer",
      name: "1 Reading Credit",
      price: "2.99",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "5 Reading Credits",
      price: "10.99",
      priceCurrency: "USD",
    },
    {
      "@type": "Offer",
      name: "20 Reading Credits",
      price: "30.99",
      priceCurrency: "USD",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
