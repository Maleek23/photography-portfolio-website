import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videography | Leekshotit Photography",
  description:
    "Watch video work by Leekshotit Photography — cinematic highlights, behind-the-scenes footage, and creative video projects from Houston & Dallas.",
  openGraph: {
    title: "Videography | Leekshotit Photography",
    description:
      "Cinematic highlights, behind-the-scenes footage, and creative video projects.",
    type: "website",
  },
};

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
