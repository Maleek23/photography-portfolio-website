"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const portfolioData = [
    {
      id: 0,
      title: "Portraits",
      subtitle: "Studio & Natural Light",
      slug: "portraits",
      imageUrl: "/images/portraits-cover.jpg",
    },
    {
      id: 1,
      title: "Graduation",
      subtitle: "Celebrate Your Milestone",
      slug: "graduation",
      imageUrl: "/images/graduation-cover.jpg",
    },
    {
      id: 2,
      title: "Creative",
      subtitle: "Artistic Vision",
      slug: "creative-projects",
      imageUrl: "/images/creative-projects-cover.jpg",
    },
    {
      id: 3,
      title: "Events",
      subtitle: "Concerts & Live Moments",
      slug: "concerts-events",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  const totalItems = portfolioData.length;

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff % totalItems) + totalItems) % totalItems;
    const adjustedDiff = normalizedDiff > totalItems / 2 ? normalizedDiff - totalItems : normalizedDiff;
    
    if (adjustedDiff === 0) {
      return {
        transform: "translateX(0) scale(1) rotateY(0deg)",
        zIndex: 50,
        opacity: 1,
        filter: "brightness(1)",
      };
    } else if (adjustedDiff === 1) {
      return {
        transform: "translateX(60%) scale(0.88) rotateY(-6deg)",
        zIndex: 40,
        opacity: 0.8,
        filter: "brightness(0.7)",
      };
    } else if (adjustedDiff === -1) {
      return {
        transform: "translateX(-60%) scale(0.88) rotateY(6deg)",
        zIndex: 40,
        opacity: 0.8,
        filter: "brightness(0.7)",
      };
    } else if (adjustedDiff === 2 || adjustedDiff === -2) {
      return {
        transform: `translateX(${adjustedDiff > 0 ? '100%' : '-100%'}) scale(0.75) rotateY(${adjustedDiff > 0 ? '-10' : '10'}deg)`,
        zIndex: 30,
        opacity: 0.5,
        filter: "brightness(0.5)",
      };
    } else {
      return {
        transform: "translateX(0) scale(0.6)",
        zIndex: 0,
        opacity: 0,
        filter: "brightness(0.3)",
      };
    }
  };

  return (
    <section className="" id="portfolio">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white light:text-gray-900 text-[1.25rem] md:text-[1.5rem] font-[500] uppercase tracking-wider">
          Collections
        </h2>
        <Link 
          href="/collections"
          className="text-white/50 light:text-gray-500 text-[0.813rem] font-[400] hover:text-white light:hover:text-gray-900 transition-colors"
        >
          View All →
        </Link>
      </div>

      {/* 3D Book/Card Stack */}
      <div className="relative w-full" style={{ perspective: "1200px" }}>
        <div className="relative h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-center overflow-hidden">
          {portfolioData.map((item, index) => {
            const style = getCardStyle(index);
            return (
              <div
                key={item.id}
                className="absolute w-[85%] md:w-[65%] lg:w-[50%] h-full cursor-pointer transition-all duration-500 ease-out"
                style={{
                  transform: style.transform,
                  zIndex: style.zIndex,
                  opacity: style.opacity,
                  filter: style.filter,
                  transformStyle: "preserve-3d",
                }}
                onClick={() => {
                  if (index === currentIndex) {
                    window.location.href = `/collections/${item.slug}`;
                  } else {
                    setCurrentIndex(index);
                  }
                }}
              >
                <div className="relative w-full h-full shadow-2xl shadow-black/60 overflow-hidden group">
                  {!loadedImages[index] && (
                    <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
                  )}
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title} photography collection`}
                    fill
                    sizes="(max-width: 768px) 75vw, (max-width: 1024px) 55vw, 40vw"
                    className={`object-cover transition-all duration-700 ${
                      index === currentIndex ? 'group-hover:scale-105' : ''
                    } ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                    quality={90}
                    priority={index < 2}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                  
                  {/* Content - only show on active card */}
                  {index === currentIndex && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-white/60 text-[0.75rem] md:text-[0.813rem] uppercase tracking-widest mb-2">
                        {item.subtitle}
                      </p>
                      <h3 className="text-white text-[1.5rem] md:text-[2rem] font-[600] uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                        <span className="text-[0.813rem]">View Collection</span>
                        <ChevronRight size={16} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white"
          aria-label="Previous collection"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all text-white"
          aria-label="Next collection"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-[60] flex gap-2">
          {portfolioData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 transition-all ${
                index === currentIndex 
                  ? "bg-primary w-6" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to collection ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
