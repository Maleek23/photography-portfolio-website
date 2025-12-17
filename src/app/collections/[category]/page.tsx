"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
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
      "/images/portraits/MEE04216.png",
      "/images/portraits/MEE07507.png",
      "/images/portraits/MEE00540.png",
      "/images/portraits/MEE01219.png",
      "/images/portraits/MEE01328.png",
      "/images/portraits/mariam.png",
      "/images/portraits/MEE02779.png",
      "/images/portraits/MEE02556.png",
      "/images/portraits/idayah.png",
      "/images/portraits/MEE01954.jpg",
      "/images/portraits/portrait-1.jpg",
      "/images/portraits/MEE02528.png",
      "/images/portraits/portrait-3.jpg",
      "/images/portraits/MEE01834.jpg",
      "/images/collections/portraits/MEE04347.jpg",
      "/images/portraits/portrait-2.jpg",
      "/images/collections/portraits/MEE04209_1765943518202.jpg",
      "/images/portraits/portrait-5.jpg",
      "/images/collections/portraits/MEE03964_1765942955810.jpg",
      "/images/portraits/portrait-4.jpg",
      "/images/collections/portraits/MEE03950_1765942982111.jpg",
      "/images/portraits/portrait-6.jpg",
      "/images/portraits/portrait-7.jpg",
      "/images/portraits/portrait-8.jpg",
      "/images/portraits/portrait-9.jpg",
      "/images/portraits/portrait-10.jpg",
      "/images/portraits/portrait-11.jpg",
      "/images/portraits/portrait-12.jpg",
      "/images/portraits/portrait-13.jpg",
      "/images/portraits/portrait-14.jpg",
      "/images/portraits/portrait-15.jpg",
      "/images/portraits/portrait-16.jpg",
      "/images/portraits/portrait-17.jpg",
      "/images/portraits/portrait-18.jpg",
    ],
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating your academic achievements with timeless graduation portraits",
    bookingType: "Graduation Session",
    images: [
      "/images/graduation/MEE01153.png",
      "/images/graduation/MEE00672.png",
      "/images/graduation/MEE01157.png",
      "/images/graduation/MEE01179.png",
      "/images/graduation/graduation-1.jpg",
      "/images/graduation/graduation-2.jpg",
      "/images/graduation/graduation-3.jpg",
      "/images/graduation/graduation-4.jpg",
      "/images/graduation/graduation-5.jpg",
      "/images/graduation/graduation-6.jpg",
      "/images/graduation/graduation-7.jpg",
      "/images/graduation/graduation-8.jpg",
      "/images/graduation/graduation-9.jpg",
      "/images/graduation/graduation-10.jpg",
    ],
  },
  "creative-projects": {
    title: "Creative Projects",
    description: "Pushing boundaries with artistic and conceptual photography",
    bookingType: "Solo Session",
    images: [
      "/images/creative/creative-1.jpg",
      "/images/creative/creative-2.jpg",
      "/images/creative/creative-3.jpg",
      "/images/creative/creative-4.jpg",
      "/images/creative/creative-5.jpg",
      "/images/creative/creative-6.jpg",
      "/images/creative/creative-7.jpg",
      "/images/creative/creative-8.jpg",
      "/images/creative/creative-9.jpg",
      "/images/creative/creative-10.jpg",
      "/images/creative/creative-11.jpg",
      "/images/creative/creative-12.jpg",
      "/images/creative/creative-13.jpg",
      "/images/creative/creative-14.jpg",
      "/images/creative/creative-15.jpg",
      "/images/creative/creative-16.jpg",
    ],
  },
  "concerts-events": {
    title: "Concerts/Events",
    description: "High-energy concert and event photography capturing unforgettable moments",
    bookingType: "Event Coverage",
    images: [
      "/images/concerts/MEE04552.jpg",
      "/images/concerts/concert-1.jpg",
      "/images/concerts/concert-2.jpg",
      "/images/concerts/concert-3.jpg",
      "/images/concerts/concert-4.jpg",
      "/images/concerts/concert-5.jpg",
      "/images/concerts/concert-6.jpg",
      "/images/concerts/concert-7.jpg",
      "/images/concerts/concert-8.jpg",
      "/images/concerts/concert-9.jpg",
      "/images/concerts/concert-10.jpg",
      "/images/concerts/concert-11.jpg",
      "/images/concerts/concert-12.jpg",
      "/images/concerts/concert-13.jpg",
      "/images/concerts/concert-14.jpg",
      "/images/concerts/concert-15.jpg",
      "/images/concerts/concert-16.jpg",
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
    <main className="bg-background light:bg-white min-h-screen">
      <GrainOverlay />
      <NavBar />
      
      <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">
        
        {/* Simple Page Header */}
        <div className="mb-10 md:mb-12">
          <Link href="/collections" className="text-primary text-[0.813rem] md:text-[0.875rem] font-[500] hover:underline mb-4 inline-block">
            ← Back to Collections
          </Link>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] uppercase mb-3 tracking-tight leading-tight">
                {category.title}
              </h1>
              <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] max-w-2xl leading-relaxed">
                {category.description}
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-[600] px-6 md:px-8 py-3 md:py-4 uppercase text-[0.813rem] md:text-[0.875rem] transition-all whitespace-nowrap"
            >
              Book {category.bookingType}
            </Link>
          </div>
        </div>

        {/* Masonry Gallery - Unsplash Style */}
        <div className="columns-1 md:columns-2 xl:columns-3 gap-3">
          {category.images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-3 cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full overflow-hidden rounded-sm bg-superGray/30 light:bg-gray-100">
                <img
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  className="w-full h-auto block transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-95"
                  loading={index < 6 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray light:border-gray-200 text-center">
          <h2 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[600] uppercase mb-4 leading-tight">
            Ready to Work Together?
          </h2>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s create something extraordinary. View packages and book your session.
          </p>
          <Link
            href="/services"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-[600] px-10 py-4 uppercase text-[0.875rem] transition-all hover:scale-105"
          >
            View Pricing & Book
          </Link>
        </div>
      </div>
      <FooterSection />

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[9999] flex items-center justify-center p-0 md:p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white transition-colors z-[10000] text-[2rem] w-12 h-12 flex items-center justify-center hover:scale-110"
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className="relative w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size photography"
              fill
              className="object-contain drop-shadow-2xl"
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
