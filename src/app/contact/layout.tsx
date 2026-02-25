import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Leekshotit Photography",
  description:
    "Get in touch with Leekshotit Photography for questions, custom project ideas, or collaboration opportunities. Based in Houston & Dallas, Texas.",
  openGraph: {
    title: "Contact | Leekshotit Photography",
    description:
      "Get in touch for questions, custom projects, or collaborations. Houston & Dallas photographer.",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
