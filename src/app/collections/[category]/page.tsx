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
      "/images/portraits/portrait-1.jpg",
      "/images/portraits/portrait-2.jpg",
      "/images/portraits/portrait-3.jpg",
    ],
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating your academic achievements with timeless graduation portraits",
    bookingType: "Graduation Session",
    images: [
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
    ],
  },
  "creative-projects": {
    title: "Creative Projects",
    description: "Pushing boundaries with artistic and conceptual photography",
    bookingType: "Solo Session",
    images: [
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
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
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
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
      
      {/* Full-Bleed Hero Section */}
      <div className="relative w-full h-[85vh] min-h-[600px] lg:h-screen overflow-hidden">
        <Image
          src={category.images[0]}
          alt={`${category.title} hero`}
          fill
          className="object-cover"
          priority
          quality={95}
          sizes="100vw"
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          <Link href="/collections" className="text-white/80 hover:text-white text-[0.813rem] font-[500] mb-6 tracking-wide uppercase transition-colors">
            ← Collections
          </Link>
          
          <h1 className="text-white text-[3rem] md:text-[5rem] lg:text-[7rem] font-[700] uppercase mb-4 tracking-tight leading-[0.9]">
            {category.title}
          </h1>
          
          <p className="text-white/90 text-[1rem] md:text-[1.25rem] max-w-2xl mb-10 leading-relaxed">
            {category.description}
          </p>
          
          <Link
            href="/services"
            className="bg-white hover:bg-white/90 text-background font-[600] px-10 py-5 text-[0.875rem] uppercase tracking-wider transition-all hover:scale-105 shadow-2xl"
          >
            Book {category.bookingType}
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>

      {/* Masonry Gallery - Unsplash Style */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-[2px]">
        {category.images.slice(1).map((image, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-[2px] cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative w-full overflow-hidden">
              <img
                src={image}
                alt={`${category.title} ${index + 2}`}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                loading={index < 3 ? "eager" : "lazy"}
              />
              
              {/* Subtle Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 pointer-events-none"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA - Full Width */}
      <div className="w-full bg-gradient-to-b from-background to-black py-24 px-4 text-center">
        <h2 className="text-white text-[2rem] md:text-[3.5rem] font-[600] uppercase mb-6 leading-tight">
          Ready to Work Together?
        </h2>
        <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's create something extraordinary. View packages and book your session.
        </p>
        <Link
          href="/services"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-[600] px-12 py-5 text-[0.875rem] uppercase tracking-wider transition-all hover:scale-105 shadow-2xl"
        >
          View Pricing & Book
        </Link>
      </div>

      <FooterSection />

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
