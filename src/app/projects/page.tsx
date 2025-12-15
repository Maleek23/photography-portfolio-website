"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/common/ScrollReveal";
import Link from "next/link";
import { getAllProjects } from "@/lib/projectData";
import Image from "next/image";
import { useState } from "react";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  return (
    <main className="bg-background light:bg-white">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            {/* Header */}
            <ScrollReveal>
              <div className="mb-8 md:mb-12 text-center">
                <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4">
                  Case Studies
                </p>
                <h1 className="text-white light:text-gray-900 text-[2.25rem] md:text-[3.5rem] font-[700] leading-tight mb-6">
                  Featured Projects
                </h1>
                <p className="text-customGrayAlt light:text-gray-600 text-[1rem] md:text-[1.25rem] max-w-3xl mx-auto leading-relaxed">
                  Complete photography projects from concept to final delivery. Each project includes the full story, technical details, and complete gallery.
                </p>
              </div>
            </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 100}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block glass glass-hover glass-lift light:bg-gray-50 light:border-gray-200 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                >
                  {/* Cover Image */}
                  <div className="aspect-[3/4] overflow-hidden bg-superGray light:bg-gray-100 relative">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                        loadedImages[projects.indexOf(project)] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setLoadedImages(prev => ({ ...prev, [projects.indexOf(project)]: true }))}
                      quality={85}
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 glass light:bg-white/90 backdrop-blur-xl px-4 py-2 rounded-lg">
                      <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-customGrayAlt light:text-gray-500 text-[0.75rem] md:text-[0.875rem]">
                        {project.date}
                      </span>
                      <span className="text-customGrayAlt2 light:text-gray-400 text-[0.75rem]">•</span>
                      <span className="text-customGrayAlt light:text-gray-500 text-[0.75rem] md:text-[0.875rem]">
                        {project.client}
                      </span>
                    </div>

                    <h2 className="text-white light:text-gray-900 text-[1.25rem] md:text-[1.5rem] font-[700] leading-tight mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] md:text-[1rem] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary text-[0.875rem] font-[600] uppercase tracking-wide group-hover:gap-3 transition-all">
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA Section */}
          <ScrollReveal delay={300}>
            <div className="mt-8 md:mt-12 text-center glass glass-mobile-optimized light:bg-gray-50 light:border-gray-200 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2.25rem] font-[700] leading-tight mb-4">
                Want to Work Together?
              </h3>
              <p className="text-customGrayAlt light:text-gray-600 text-[1rem] md:text-[1.125rem] leading-relaxed mb-6">
                Whether it&apos;s a creative project, graduation session, or event coverage, let&apos;s create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="glass glass-hover glass-lift bg-primary/80 backdrop-blur-xl text-white font-[600] py-4 px-8 rounded-xl uppercase text-[0.875rem] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all hover:scale-105"
                >
                  View Services
                </Link>
                <Link
                  href="/contact"
                  className="glass glass-hover glass-lift backdrop-blur-xl text-white light:text-gray-900 font-[600] py-4 px-8 rounded-xl uppercase text-[0.875rem] border border-white/20 light:border-gray-300 hover:border-primary transition-all hover:scale-105"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
