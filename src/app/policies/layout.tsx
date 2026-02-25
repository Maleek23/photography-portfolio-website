import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Policies | Leekshotit Photography",
  description:
    "Review booking policies, cancellation terms, and session guidelines for Leekshotit Photography sessions in Houston & Dallas.",
  robots: { index: true, follow: true },
};

export default function PoliciesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
