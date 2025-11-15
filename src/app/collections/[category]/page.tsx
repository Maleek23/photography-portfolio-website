"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";

const portfolioData: Record<string, { title: string; description: string; images: string[]; bookingType: string }> = {
  portraits: {
    title: "Portraits",
    description: "Capturing personality and emotion through creative portrait photography",
    bookingType: "Solo Session",
    images: [
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
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
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const category = portfolioData[params.category];

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
            {/* Header */}
            <div className="mb-8 md:mb-12">
            <Link href="/collections" className="text-primary text-[0.813rem] md:text-[0.875rem] font-[500] hover:underline mb-3 md:mb-4 inline-block">
              ← Back to Collections
            </Link>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
              <div className="flex-1">
                <h1 className="text-white text-[2.5rem] md:text-[4.5rem] font-[700] uppercase mb-3 md:mb-4 tracking-tight leading-tight">
                  {category.title}
                </h1>
                <p className="text-customGrayAlt text-[0.938rem] md:text-[1.125rem] max-w-2xl leading-relaxed">
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

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-lightDark cursor-pointer group border border-superGray hover:border-primary transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                {!loadedImages[index] && (
                  <ImageSkeleton className="absolute inset-0" aspectRatio="3/4" />
                )}
                <Image
                  src={image}
                  alt={`${category.title} photography ${index + 1}`}
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

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray text-center">
              <h2 className="text-white text-[1.75rem] md:text-[3rem] font-[600] uppercase mb-3 md:mb-4 leading-tight">
                Like What You See?
              </h2>
              <p className="text-customGrayAlt text-[0.938rem] md:text-[1rem] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                Ready to book a session? Check out our pricing and availability.
              </p>
              <Link
                href="/services"
                className="inline-block bg-primary hover:bg-primary/80 text-white font-[600] px-8 py-4 rounded-lg uppercase text-[0.875rem] transition-all shadow-lg hover:shadow-primary/50 hover:scale-105"
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
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[10000]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Full size photography"
              fill
              className="object-contain"
              quality={95}
              priority
            />
          </div>
        </div>
      )}
    </main>
  );
}
