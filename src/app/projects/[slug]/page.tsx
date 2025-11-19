"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { getProject, getAllProjects } from "@/lib/projectData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            {/* Back Link */}
            <Link 
              href="/projects" 
              className="inline-flex items-center gap-2 text-primary text-[0.875rem] font-[600] hover:gap-3 transition-all mb-6 uppercase tracking-wide"
            >
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
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="glass backdrop-blur-xl px-4 py-2 rounded-lg">
                <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider">
                  {project.category}
                </span>
              </span>
              <span className="text-customGrayAlt text-[0.875rem]">{project.date}</span>
              <span className="text-customGrayAlt2 text-[0.875rem]">•</span>
              <span className="text-customGrayAlt text-[0.875rem]">{project.client}</span>
            </div>

            <h1 className="text-white text-[2.25rem] md:text-[3.5rem] font-[700] leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-customGrayAlt text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-4xl">
              {project.subtitle}
            </p>
          </div>

          {/* Hero Video or Cover Image */}
          {project.videoUrl ? (
            <div className="mb-8 md:mb-12 glass glass-mobile-optimized rounded-2xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${project.title} video`}
                />
              </div>
            </div>
          ) : (
            <div className="mb-8 md:mb-12 glass glass-mobile-optimized rounded-2xl overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>
            </div>
          )}

          {/* Project Story */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-12">
            <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
              The Story
            </h2>
            <div className="space-y-6">
              {project.story.map((paragraph, index) => (
                <p 
                  key={index}
                  className="text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-[1.8]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] overflow-hidden rounded-xl bg-superGray cursor-pointer group border border-white/10 hover:border-primary transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                      loadedImages[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Details */}
          {project.technicalDetails && (
            <div className="max-w-4xl mx-auto mb-8 md:mb-12">
              <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                Technical Details
              </h2>
              <div className="glass glass-mobile-optimized rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.technicalDetails.camera && (
                    <div>
                      <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                        Camera
                      </h3>
                      <p className="text-white text-[1.125rem]">
                        {project.technicalDetails.camera}
                      </p>
                    </div>
                  )}
                  {project.technicalDetails.lenses && (
                    <div>
                      <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                        Lenses
                      </h3>
                      <p className="text-white text-[1.125rem]">
                        {project.technicalDetails.lenses}
                      </p>
                    </div>
                  )}
                  {project.technicalDetails.lighting && (
                    <div>
                      <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                        Lighting
                      </h3>
                      <p className="text-white text-[1.125rem]">
                        {project.technicalDetails.lighting}
                      </p>
                    </div>
                  )}
                  {project.technicalDetails.lut && (
                    <div>
                      <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                        Color Grading
                      </h3>
                      <p className="text-white text-[1.125rem]">
                        {project.technicalDetails.lut}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div>
              <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                More Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {otherProjects.map((otherProject) => (
                  <Link
                    key={otherProject.slug}
                    href={`/projects/${otherProject.slug}`}
                    className="group glass glass-hover glass-lift backdrop-blur-xl rounded-2xl overflow-hidden hover:border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-superGray relative">
                      <Image
                        src={otherProject.coverImage}
                        alt={otherProject.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={85}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-white text-[1.25rem] font-[700] leading-tight mb-2 group-hover:text-primary transition-colors">
                        {otherProject.title}
                      </h3>
                      <p className="text-customGrayAlt text-[0.875rem]">
                        {otherProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          </div>
        </div>

        <FooterSection />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative w-full max-w-6xl aspect-[3/4]">
            <Image
              src={selectedImage}
              alt="Gallery image"
              fill
              className="object-contain"
              quality={95}
            />
          </div>
        </div>
      )}
    </main>
  );
}
