import type { Metadata } from "next";

const categoryMeta: Record<string, { title: string; description: string }> = {
  portraits: {
    title: "Portrait Photography",
    description: "Capturing personality and emotion through creative portrait photography. Professional portrait sessions by Leekshotit in Houston and Dallas, Texas.",
  },
  graduation: {
    title: "Graduation Photography", 
    description: "Celebrating academic achievements with timeless graduation portraits. Professional graduation photography by Leekshotit in Houston and Dallas, Texas.",
  },
  "creative-projects": {
    title: "Creative Projects",
    description: "Pushing boundaries with artistic and conceptual photography. Creative photography projects by Leekshotit in Houston and Dallas, Texas.",
  },
  "concerts-events": {
    title: "Concerts & Events Photography",
    description: "High-energy concert and event photography capturing unforgettable moments. Event coverage by Leekshotit in Houston and Dallas, Texas.",
  },
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = categoryMeta[params.category];
  
  if (!category) {
    return { title: "Collection | Leekshotit Photography" };
  }

  return {
    title: `${category.title} | Leekshotit Photography`,
    description: category.description,
    openGraph: {
      title: `${category.title} | Leekshotit Photography`,
      description: category.description,
      type: "website",
    },
  };
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
