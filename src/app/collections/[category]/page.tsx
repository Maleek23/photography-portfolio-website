"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const portfolioData: Record<string, { title: string; description: string; images: string[]; bookingType: string }> = {
  portraits: {
    title: "Portraits",
    description: "Capturing personality and emotion through creative portrait photography",
    bookingType: "Solo Session",
    images: [
      "/images/portraits/portrait-1.jpg",
      "/images/portraits/portrait-2.jpg",
      "/images/portraits/portrait-3.jpg",
      "/images/portraits/portrait-4.jpg",
      "/images/portraits/portrait-5.jpg",
      "/images/portraits/portrait-6.jpg",
      "/images/portraits/portrait-7.jpg",
      "/images/portraits/portrait-8.jpg",
      "/images/portraits/portrait-9.jpg",
    ],
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating your academic achievements with timeless graduation portraits",
    bookingType: "Graduation Session",
    images: [
      "/images/graduation-nike.jpg",
    ],
  },
  "creative-projects": {
    title: "Creative Projects",
    description: "Pushing boundaries with artistic and conceptual photography",
    bookingType: "Solo Session",
    images: [
      "/images/creative-smoke.jpg",
    ],
  },
  "concerts-events": {
    title: "Concerts/Events",
    description: "High-energy concert and event photography capturing unforgettable moments",
    bookingType: "Event Coverage",
    images: [
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
    ],
  },
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const category = portfolioData[params.category];

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen">
      <NavBar />
      
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            
            {/* Simple Page Header */}
            <div className="mb-10 md:mb-12">
              <Link href="/collections" className="text-primary text-[0.813rem] md:text-[0.875rem] font-[500] hover:underline mb-4 inline-block">
                ← Back to Collections
              </Link>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-white text-[2rem] md:text-[2.75rem] font-[700] uppercase mb-3 tracking-tight leading-tight">
                    {category.title}
                  </h1>
                  <p className="text-customGrayAlt text-[0.938rem] md:text-[1rem] max-w-2xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-[600] px-6 md:px-8 py-3 md:py-4 rounded-lg uppercase text-[0.813rem] md:text-[0.875rem] transition-all whitespace-nowrap shadow-lg hover:shadow-primary/50"
                >
                  Book {category.bookingType}
                </Link>
              </div>
            </div>

            {/* Masonry Gallery - All Photos */}
            <div className="columns-1 md:columns-2 xl:columns-3 gap-[2px]">
              {category.images.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-[2px] cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={image}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    
                    {/* Subtle Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray text-center">
              <h2 className="text-white text-[1.5rem] md:text-[2rem] font-[600] uppercase mb-4 leading-tight">
                Ready to Work Together?
              </h2>
              <p className="text-customGrayAlt text-[0.938rem] md:text-[1rem] mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's create something extraordinary. View packages and book your session.
              </p>
              <Link
                href="/services"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-[600] px-10 py-4 rounded-lg uppercase text-[0.875rem] transition-all shadow-lg hover:shadow-primary/50 hover:scale-105"
              >
                View Pricing & Book
              </Link>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/98 z-[9999] flex items-center justify-center p-0 md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors z-[10000] text-[2rem] w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size photography"
              fill
              className="object-contain"
              quality={100}
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  );
}
