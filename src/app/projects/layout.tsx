import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Leekshotit Photography",
  description:
    "Explore creative photography projects by Leekshotit Photography — conceptual series, collaborative shoots, and artistic visual storytelling from Houston & Dallas.",
  openGraph: {
    title: "Projects | Leekshotit Photography",
    description:
      "Creative photography projects — conceptual series, collaborative shoots, and visual storytelling.",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
