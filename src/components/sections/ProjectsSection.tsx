"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projectData";

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white light:text-gray-900">
            Featured Projects
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

      {/* Asymmetric Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Large Featured Project */}
        <Link 
          href={`/projects/${featuredProjects[0]?.slug}`}
          className="group relative aspect-[4/5] lg:aspect-auto lg:row-span-2 overflow-hidden bg-white/5 light:bg-gray-100"
        >
          <Image
            src={featuredProjects[0]?.coverImage || ""}
            alt={featuredProjects[0]?.title || ""}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          
          {/* Subtle Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Project Number */}
          <div className="absolute top-6 left-6">
            <span className="text-white/15 text-8xl font-bold">01</span>
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary text-xs tracking-widest uppercase">{featuredProjects[0]?.category}</span>
              <span className="w-8 h-[1px] bg-white/20"></span>
              <span className="text-white/60 text-xs">{featuredProjects[0]?.date}</span>
            </div>
            <h3 className="text-white text-2xl md:text-3xl font-medium mb-2 group-hover:text-primary transition-colors">
              {featuredProjects[0]?.title}
            </h3>
            <p className="text-white/70 text-sm md:text-base max-w-md">{featuredProjects[0]?.subtitle}</p>
            
            <div className="flex items-center gap-2 mt-4 text-white/70 group-hover:text-primary transition-colors">
              <span className="text-sm">View Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </Link>

        {/* Right Column - Two Stacked Projects */}
        <div className="flex flex-col gap-4">
          {featuredProjects.slice(1, 3).map((project, index) => (
            <Link 
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative aspect-[16/9] overflow-hidden bg-white/5 light:bg-gray-100"
            >
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Subtle Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              
              {/* Project Number */}
              <div className="absolute top-4 right-4">
                <span className="text-white/10 text-5xl font-bold">0{index + 2}</span>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary text-xs tracking-widest uppercase">{project.category}</span>
                  <span className="text-white/50 text-xs">•</span>
                  <span className="text-white/50 text-xs">{project.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
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
