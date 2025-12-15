"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import ScrollReveal from "@/components/common/ScrollReveal";
import { getProject, getAllProjects } from "@/lib/projectData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  useEffect(() => {
    if (selectedImage) {
      setLightboxLoaded(false);
    }
  }, [selectedImage]);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <main className="bg-background light:bg-white">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
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
            <ScrollReveal>
              <div className="mb-8 md:mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="glass light:bg-white/90 backdrop-blur-xl px-4 py-2 rounded-lg">
                    <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider">
                      {project.category}
                    </span>
                  </span>
                  <span className="text-customGrayAlt light:text-gray-500 text-[0.875rem]">{project.date}</span>
                  <span className="text-customGrayAlt2 light:text-gray-400 text-[0.875rem]">•</span>
                  <span className="text-customGrayAlt light:text-gray-500 text-[0.875rem]">{project.client}</span>
                </div>

                <h1 className="text-white light:text-gray-900 text-[2.25rem] md:text-[3.5rem] font-[700] leading-tight mb-4">
                  {project.title}
                </h1>

                <p className="text-customGrayAlt light:text-gray-600 text-[1.125rem] md:text-[1.5rem] leading-relaxed max-w-4xl">
                  {project.subtitle}
                </p>
              </div>
            </ScrollReveal>

          {/* Hero Video or Cover Image */}
          <ScrollReveal delay={100}>
            {project.videoUrl ? (
              <div className="mb-8 md:mb-12 glass glass-mobile-optimized light:bg-gray-50 light:border-gray-200 rounded-2xl overflow-hidden">
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
              <div className="mb-8 md:mb-12 glass glass-mobile-optimized light:bg-gray-50 light:border-gray-200 rounded-2xl overflow-hidden">
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
          </ScrollReveal>

          {/* Project Story */}
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto mb-8 md:mb-12">
              <h2 className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                The Story
              </h2>
              <div className="space-y-6">
                {project.story.map((paragraph, index) => (
                  <p 
                    key={index}
                    className="text-customGrayAlt light:text-gray-600 text-[1rem] md:text-[1.125rem] leading-[1.8]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Image Gallery */}
          <ScrollReveal delay={300}>
            <div className="mb-8 md:mb-12">
              <h2 className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] overflow-hidden rounded-xl bg-superGray light:bg-gray-100 cursor-pointer group border border-white/10 light:border-gray-200 hover:border-primary transition-all duration-300"
                    onClick={() => setSelectedImage(image)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
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
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Technical Details */}
          {project.technicalDetails && (
            <ScrollReveal delay={400}>
              <div className="max-w-4xl mx-auto mb-8 md:mb-12">
                <h2 className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                  Technical Details
                </h2>
                <div className="glass glass-mobile-optimized light:bg-gray-50 light:border-gray-200 rounded-2xl p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.technicalDetails.camera && (
                      <div>
                        <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                          Camera
                        </h3>
                        <p className="text-white light:text-gray-900 text-[1.125rem]">
                          {project.technicalDetails.camera}
                        </p>
                      </div>
                    )}
                    {project.technicalDetails.lenses && (
                      <div>
                        <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                          Lenses
                        </h3>
                        <p className="text-white light:text-gray-900 text-[1.125rem]">
                          {project.technicalDetails.lenses}
                        </p>
                      </div>
                    )}
                    {project.technicalDetails.lighting && (
                      <div>
                        <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                          Lighting
                        </h3>
                        <p className="text-white light:text-gray-900 text-[1.125rem]">
                          {project.technicalDetails.lighting}
                        </p>
                      </div>
                    )}
                    {project.technicalDetails.lut && (
                      <div>
                        <h3 className="text-primary text-[0.875rem] font-[600] uppercase tracking-wider mb-2">
                          Color Grading
                        </h3>
                        <p className="text-white light:text-gray-900 text-[1.125rem]">
                          {project.technicalDetails.lut}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <ScrollReveal delay={500}>
              <div>
                <h2 className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
                  More Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherProjects.map((otherProject) => (
                    <Link
                      key={otherProject.slug}
                      href={`/projects/${otherProject.slug}`}
                      className="group glass glass-hover glass-lift light:bg-gray-50 light:border-gray-200 backdrop-blur-xl rounded-2xl overflow-hidden hover:border-primary shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                    >
                      <div className="aspect-[16/9] overflow-hidden bg-superGray light:bg-gray-100 relative">
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
                        <h3 className="text-white light:text-gray-900 text-[1.25rem] font-[700] leading-tight mb-2 group-hover:text-primary transition-colors">
                          {otherProject.title}
                        </h3>
                        <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem]">
                          {otherProject.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
          </div>
        </div>

        <FooterSection />
      </div>

      {/* Lightbox Modal with Blur */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          {/* Blurred backdrop */}
          <div className="absolute inset-0 backdrop-blur-2xl bg-black/60" />
          
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-20 bg-black/50 rounded-full p-2"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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
          
          {/* Image container */}
          <div 
            className="relative z-10 w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative transition-all duration-500 ${lightboxLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Image
                src={selectedImage}
                alt="Gallery image"
                width={1200}
                height={1600}
                className="max-h-[85vh] w-auto object-contain rounded-lg shadow-2xl drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                quality={95}
                onLoad={() => setLightboxLoaded(true)}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
