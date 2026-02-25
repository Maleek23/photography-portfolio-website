"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projectData";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);
  const hero = featuredProjects[0];
  const rest = featuredProjects.slice(1, 3);

  return (
    <section>
      {/* Editorial Header */}
      <div className="flex items-end justify-between mb-8 md:mb-12">
        <div>
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">From the Field</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white light:text-gray-900 leading-tight">
            Selected Stories
          </h2>
        </div>
        <Link
          href="/projects"
          className="hidden md:flex items-center gap-2 text-white/40 light:text-gray-400 hover:text-primary transition-colors text-sm group"
        >
          View All
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* Hero Editorial Card */}
      <Link
        href={`/projects/${hero?.slug}`}
        className="group block relative overflow-hidden mb-4 md:mb-6"
      >
        <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src={hero?.coverImage || ""}
            alt={hero?.title || ""}
            fill
            className="object-cover transition-all duration-1000 group-hover:scale-105"
            sizes="100vw"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
        </div>

        {/* Editorial overlay content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary text-[0.688rem] font-[600] uppercase tracking-[0.2em]">
                {hero?.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="text-white/40 text-[0.75rem]">{hero?.date}</span>
            </div>
            <h3 className="text-white text-2xl md:text-4xl lg:text-5xl font-[600] leading-tight mb-3 group-hover:text-primary transition-colors duration-300">
              {hero?.title}
            </h3>
            {hero?.editorial && (
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-lg mb-4">
                {hero.editorial}
              </p>
            )}
            <div className="flex items-center gap-2 text-white/50 group-hover:text-primary transition-colors">
              <span className="text-[0.813rem] font-[500] uppercase tracking-wider">Read the Story</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>

      {/* Two-Column Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {rest.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden mb-4">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Category pill */}
              <div className="absolute top-4 left-4">
                <span className="glass-thin text-white/80 text-[0.625rem] font-[600] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Text content below image — editorial style */}
            <div className="px-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-white/30 light:text-gray-400 text-[0.75rem]">{project.date}</span>
                {project.client !== "Self-Portrait" && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/30 light:text-gray-400 text-[0.75rem]">{project.client}</span>
                  </>
                )}
              </div>
              <h3 className="text-white light:text-gray-900 text-lg md:text-xl font-[600] mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              {project.editorial && (
                <p className="text-white/45 light:text-gray-500 text-[0.875rem] leading-relaxed line-clamp-2">
                  {project.editorial}
                </p>
              )}
              <div className="flex items-center gap-1.5 mt-3 text-white/35 light:text-gray-400 group-hover:text-primary transition-colors">
                <span className="text-[0.75rem] font-[500] uppercase tracking-wider">View Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="flex md:hidden items-center justify-center gap-2 text-white/60 light:text-gray-600 hover:text-primary transition-colors text-sm mt-8"
      >
        View All Projects
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
