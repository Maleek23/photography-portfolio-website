import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leekshotit Photography | Houston & Dallas Photographer | Graduation & Portrait Sessions",
  description:
    "Abdulmalik Ajisegiri (Leekshotit) — Professional Houston & Dallas photographer specializing in graduation photos, portraits, creative projects, and concert/event coverage.",
  openGraph: {
    title: "Leekshotit Photography | Professional HTX/DTX Photographer",
    description:
      "Professional photography services specializing in graduation, portraits, creative projects, and events. Based in Houston & Dallas.",
    images: [{ url: "/images/hero.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
