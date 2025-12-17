"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projectData";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">Case Studies</p>
          <h2 className="text-[1.5rem] md:text-[2rem] font-medium text-white light:text-gray-900">
            Featured Projects
          </h2>
        </div>
        <Link 
          href="/projects" 
          className="hidden md:flex items-center gap-2 text-white/60 light:text-gray-600 hover:text-primary transition-colors text-sm"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <Link 
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative aspect-[4/5] overflow-hidden bg-white/5 light:bg-gray-100"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary text-xs tracking-widest uppercase mb-1">{project.date}</p>
              <h3 className="text-white text-lg font-medium">{project.title}</h3>
              <p className="text-white/60 text-sm mt-1">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      <Link 
        href="/projects" 
        className="flex md:hidden items-center justify-center gap-2 text-white/60 light:text-gray-600 hover:text-primary transition-colors text-sm mt-8"
      >
        View All Projects
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
