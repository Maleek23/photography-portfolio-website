import type { Metadata } from "next";
import { getProject } from "@/lib/projectData";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProject(params.slug);

  if (!project) {
    return { title: "Project | Leekshotit Photography" };
  }

  return {
    title: `${project.title} | Leekshotit Photography`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Leekshotit Photography`,
      description: project.description,
      images: [{ url: project.coverImage }],
      type: "website",
    },
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
