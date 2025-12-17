"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      "/images/portraits/portrait-10.jpg",
      "/images/portraits/portrait-11.jpg",
      "/images/portraits/portrait-12.jpg",
      "/images/portraits/portrait-13.jpg",
      "/images/portraits/portrait-14.jpg",
      "/images/portraits/portrait-15.jpg",
      "/images/portraits/portrait-16.jpg",
      "/images/portraits/portrait-17.jpg",
    ],
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating your academic achievements with timeless graduation portraits",
    bookingType: "Graduation Session",
    images: [
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
    ],
  },
  "concerts-events": {
    title: "Concerts/Events",
    description: "High-energy concert and event photography capturing unforgettable moments",
    bookingType: "Event Coverage",
    images: [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const category = portfolioData[params.category];

  if (!category) {
    notFound();
  }

  const totalImages = category.images.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % totalImages) + totalImages) % totalImages;
    const adjustedDiff = normalizedDiff > totalImages / 2 ? normalizedDiff - totalImages : normalizedDiff;
    
    if (adjustedDiff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (adjustedDiff === 1 || adjustedDiff === -totalImages + 1) {
      return {
        transform: "translateX(75%) scale(0.85) rotateY(-8deg)",
        zIndex: 40,
        opacity: 0.7,
        filter: "brightness(0.6)",
      };
    } else if (adjustedDiff === -1 || adjustedDiff === totalImages - 1) {
      return {
        transform: "translateX(-75%) scale(0.85) rotateY(8deg)",
        zIndex: 40,
        opacity: 0.7,
        filter: "brightness(0.6)",
      };
    } else if (adjustedDiff === 2) {
      return {
        transform: "translateX(130%) scale(0.7) rotateY(-12deg)",
        zIndex: 30,
        opacity: 0.4,
        filter: "brightness(0.4)",
      };
    } else if (adjustedDiff === -2) {
      return {
        transform: "translateX(-130%) scale(0.7) rotateY(12deg)",
        zIndex: 30,
        opacity: 0.4,
        filter: "brightness(0.4)",
      };
    } else {
      return {
        transform: "translateX(0) scale(0.5)",
        zIndex: 0,
        opacity: 0,
        filter: "brightness(0.3)",
      };
    }
  };

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
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-[600] px-6 md:px-8 py-3 md:py-4 uppercase text-[0.813rem] md:text-[0.875rem] transition-all whitespace-nowrap shadow-lg hover:shadow-primary/50"
                >
                  Book {category.bookingType}
                </Link>
              </div>
            </div>

            {/* 3D Album Carousel */}
            <div className="relative w-full" style={{ perspective: "1500px" }}>
              <div className="relative h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
                {category.images.map((image, index) => {
                  const style = getCardStyle(index);
                  return (
                    <div
                      key={index}
                      className="absolute w-[70%] md:w-[50%] lg:w-[40%] h-full cursor-pointer transition-all duration-500 ease-out"
                      style={{
                        transform: style.transform,
                        zIndex: style.zIndex,
                        opacity: style.opacity,
                        filter: style.filter,
                        transformStyle: "preserve-3d",
                      }}
                      onClick={() => {
                        if (index === currentIndex) {
                          setSelectedImage(image);
                        } else {
                          setCurrentIndex(index);
                        }
                      }}
                    >
                      <div className="relative w-full h-full shadow-2xl shadow-black/50">
                        <img
                          src={image}
                          alt={`${category.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading={Math.abs(index - currentIndex) < 3 ? "eager" : "lazy"}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[60] text-white/70 text-[0.875rem] font-[500] tracking-wider">
                {currentIndex + 1} / {totalImages}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="mt-8 flex gap-1 overflow-x-auto pb-4 scrollbar-hide justify-center">
              {category.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all ${
                    index === currentIndex ? "ring-2 ring-primary" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray text-center">
              <h2 className="text-white text-[1.5rem] md:text-[2rem] font-[600] uppercase mb-4 leading-tight">
                Ready to Work Together?
              </h2>
              <p className="text-customGrayAlt text-[0.938rem] md:text-[1rem] mb-8 max-w-2xl mx-auto leading-relaxed">
                Let&apos;s create something extraordinary. View packages and book your session.
              </p>
              <Link
                href="/services"
                className="inline-block bg-primary hover:bg-primary/90 text-white font-[600] px-10 py-4 uppercase text-[0.875rem] transition-all shadow-lg hover:shadow-primary/50 hover:scale-105"
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
