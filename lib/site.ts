export const site = {
  name: "PalmAI",
  brand: "Palmistry",
  domain: "getpalmai.app",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://getpalmai.app",
  description:
    "AI palm reader app — read your palm in 6 traditions: Hindu Hast Rekha, Western, Chinese, Tibetan, Tarot, Kabbalistic. Free trial. iOS + Android.",
  shortDescription:
    "Ancient palmistry meets AI. Snap your palm, get a real Hast Rekha + 5 other tradition readings in 30 seconds.",
  tagline: "Six traditions. One palm. Thirty seconds.",
  appStoreUrl:
    process.env.NEXT_PUBLIC_APPSTORE_URL ?? "https://apps.apple.com/app/idTBD",
  playStoreUrl:
    process.env.NEXT_PUBLIC_PLAYSTORE_URL ??
    "https://play.google.com/store/apps/details?id=club.saatva.palmai",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
    "https://instagram.com/palmai.app",
  twitterUrl:
    process.env.NEXT_PUBLIC_TWITTER_URL ?? "https://x.com/palmai_app",
  supportEmail:
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hello@getpalmai.app",
  keywords: [
    "palmistry",
    "palm reading",
    "ai palm reader",
    "hast rekha",
    "vedic palmistry",
    "hindu palmistry",
    "western palmistry",
    "chinese palm reading",
    "tibetan palmistry",
    "kabbalistic palm",
    "tarot palm",
    "palm reader app",
    "free palm reader",
    "ai astrology",
    "palmistry app ios android",
  ],
};

export type SiteConfig = typeof site;
